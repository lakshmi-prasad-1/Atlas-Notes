import ratelimit from "../config/upStach.js";

/**
 * Rate Limiting Middleware
 * 
 * Best Practices:
 * - Uses client IP address as the rate limit key for per-user limiting
 * - Returns HTTP 429 (Too Many Requests) when limit exceeded
 * - Handles errors gracefully and passes to error handler
 * - Includes proper logging for monitoring
 */

const rateLimiter = async (req, res, next) => {
  try {
    // Extract client IP from request
    // Considers X-Forwarded-For header for proxied requests (reverse proxy, load balancer)
    // Falls back to direct connection IP if header not present
    const clientIp = req.headers["x-forwarded-for"]?.split(",")[0] || req.ip || req.socket.remoteAddress;
    
    // Use IP address as the rate limit key for per-client limiting
    // This prevents one user from exhausting the rate limit for all users
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(clientIp);

    // Check if request is within rate limit
    if (!success) {
      // Calculate retry-after in seconds
      const retryAfter = Math.ceil((reset - Date.now()) / 1000);
      
      return res.status(429).json({
        message: "Too many requests, please try again later",
        retryAfter: retryAfter,
        limitInfo: {
          limit: limit,
          remaining: remaining,
          reset: new Date(reset),
        },
      });
    }

    // Add rate limit info to response headers for client awareness
    res.setHeader("X-RateLimit-Limit", limit);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", new Date(reset));

    // Proceed to next middleware
    next();
  } catch (error) {
    // Log rate limit errors for monitoring and debugging
    console.error("Rate limit error:", error);
    // Pass error to error handling middleware
    next(error);
  }
};

export default rateLimiter;
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

/**
 * Rate Limiting Configuration using Upstash Redis
 * 
 * Best Practices:
 * - Uses sliding window algorithm for more accurate rate limiting
 * - Limits to 10 requests per 10 seconds window
 * - Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN env variables
 * - Redis connection is established from environment variables
 */

const ratelimit = new Ratelimit({
  // Redis instance for storing rate limit state
  redis: Redis.fromEnv(),
  // Sliding window: allows 10 requests per 10 second window
  // More accurate than fixed window as it slides through time
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export default ratelimit;
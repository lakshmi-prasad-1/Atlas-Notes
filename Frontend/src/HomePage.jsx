import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("/api/info");
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        console.log("error was occured in useEffect", error);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div>
      <div className='min-h-fit'>
        <Navbar />
      </div>
      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {(notes.length > 0) ? (notes.map((note) => (
            <div key={note._id} className='flex flex-col p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all'>
              <div className='flex justify-between items-start mb-3'>
                <h3 className='text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                  {note.title}
                </h3>
                <div className='flex gap-2'>
                  <Link
                    to={`/notes/${note._id}`}
                    className='p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors'
                    title="Edit Note"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    onClick={async () => {
                      await axios.delete(`/api/info/${note._id}`);
                      setNotes(notes.filter(n => n._id !== note._id));
                      toast.success(`${note.title} was deleted !`);
                    }}
                    className='p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors'
                    title="Delete Note"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <p className='text-gray-600 flex-grow leading-relaxed mb-4'>
                {note.matter}
              </p>

              {/* Footer */}
              <div className='pt-4 border-t border-gray-100 mt-auto'>
                <small className='text-xs font-medium text-gray-400 italic'>
                  Created At: {new Date(note.createdAt).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))) : (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No notes created yet!</p>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default HomePage

import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <div className='min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-8'>
        <div className='w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10'>
          <h1 className="text-3xl  font-extrabold bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent text-center">
            Create New Note
          </h1>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-orange-700 mb-2'>
              Title :
            </label>
            <input type='text' placeholder='Enter Title Here...' className='w-full text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition'
              value={title} onChange={(e) => { setTitle(e.target.value) }}
            />
          </div>
          <div className='mb-8'>
            <label className='block text-sm font-medium text-orange-700 mb-2'>
              Content :
            </label>
            <input type='text' placeholder='Enter Title Here...' className='w-full px-4 py-3 text-gray-700 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none transition resize-none'
              value={content} onChange={(e) => { setContent(e.target.value) }}
            />
          </div>
        </div>
        <button className="w-full mt-6 py-4 bg-gradient-to-r from-orange-400 to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
          onClick={async () => {
            try {
              const res = await axios.post('/api/info', {
                title: title,
                matter: content
              });
              toast.success('Notes Saved Successfully !');
            } catch (error) {
              toast.error('Got an error not saved yet');
            }
          }}
        >Save !!</button>
      </div>
    </div>
  )
}

export default CreatePage

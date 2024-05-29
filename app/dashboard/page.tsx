'use client';

import React from 'react'

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';

function page() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <h1 className=' text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-purple-400'>Dashboard</h1>
      <div  className=' flex flex-row justify-center p-10 w-full'>


        <form className='flex flex-col justify-end w-1/2 h-96 bg-gray-400 rounded-lg  m-0.5' onSubmit={handleSubmit}>
        <div className='flex-grow overflow-y-auto p-3 m-0.5'>
          {messages
            .filter(m => m.role === 'user') // Only display messages from the user
            .map(m => (
              <div key={m.id} className='mb-2 p-2 bg-white rounded'>
                {m.content}
              </div>
          ))}
        </div>
        
        <div className='flex flex-row justify-between p-3 m-0.5 '>
          <textarea
            className='rounded  text-black w-full h-full px-2 m-0.5  bg-white  placeholder-black place-content-center  resize-none focus:outline-none focus:border-transparent'
            value={input}
            placeholder="Enter text to Humanize"
            onChange={handleInputChange}
          />
          <Button type='submit' size="lg" variant="outline"  className='bg-teal-500 h-full m-0.5'>Humanize</Button>
        </div>
        
        </form>
        
        <div className='w-1/2 h-96 bg-gray-400 rounded-lg p-3 m-0.5 overflow-y-auto'>
          {messages
            .filter(m => m.role === 'assistant') // Only display messages from the assistant
            .map(m => (
              <div key={m.id} className='mb-2 p-2 bg-white rounded'>
                {m.content}
              </div>
          ))}
        </div>
      </div>
      
      {/* <Chat/> */}
    </>
  )
}

export default page
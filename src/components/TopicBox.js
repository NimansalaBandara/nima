import React from 'react'
import './topicbox.css'

export default function TopicBox() {
  const topic = "my favourite food is kottu";
  const item = " and rice";
  return (
    <div>
      <div className="topicBox">
        <samp className='text'>{topic}{item}</samp>
      </div>
    </div>
  )
}

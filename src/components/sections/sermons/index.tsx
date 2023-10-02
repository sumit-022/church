import React from 'react'
import SermonGallery from './sermon-gallery'
import RightBar from './rightbar'

const Sermons = () => {
  return (
    <div className='flex gap-18'>
      <SermonGallery />
      <RightBar />
    </div>
  )
}

export default Sermons
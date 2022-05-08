import { useState } from 'react'

const images = [
  { path: '/assets/home/test/test-image1.jpg' },
  { path: '/assets/home/test/test-image2.jpg' },
  { path: '/assets/home/test/test-image3.jpg' },
]

const Test = () => {
  return (
    <div className="w-full overflow-hidden border h-96">
      {/* Test */}

      <div className="h-[500px] w-full bg-pink-500">
        <p>test</p>
      </div>
    </div>
  )
}

export default Test

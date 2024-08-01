import React from 'react'
import Image from 'next/image'

import loader from './spinner.gif'

const spinner = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image src={loader} alt="loading.." />
    </div>
  )
}

export default spinner
import React from 'react'

function ErrorEle() {
  return (
    <div>
        <h1 className='text-center mt-2 text-red-500 font-medium text-xl'>Something Went wrong</h1>
    </div>
  )
}

function SuccessEle() {
    return (
        <h1 className='text-center text-green-200 font-medium text-xl'> Message Deliverd Successfully</h1>
    )
}

export {ErrorEle,SuccessEle}

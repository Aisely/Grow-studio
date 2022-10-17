import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

const Modal = ({fullname}) => {
  return (
    <div className=" rounded-md border  border-[#436664] bg-[#3c5c5a] shadow">
        <div>
          <div className=" flex flex-col items-center gap-6  px-8  py-8 opacity-100">
            <h2 className="text-center text-3xl">Hello {fullname}</h2>
            <p className="text-xs text-center">
              Your OTP code succesful ! Logging into your dashboard...
            </p>
            <MutatingDots
              height="100"
              width="100"
              color="#66cee9"
              secondaryColor="#ff4f4f"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      </div>
  )
}

export default Modal
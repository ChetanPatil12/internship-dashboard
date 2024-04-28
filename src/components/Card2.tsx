import React from 'react'

const Card2 = () => {
  return (
    <div className='p-3 bg-[#161E54] text-white rounded-lg mt-6'>
      <p className="text-sm font-semibold ">Recent Activity</p>
      <div className='mt-8'>
        <p className='text-[9px] text-[#dbdbdb]'>10.40 AM, Fri 10 Sept 2021</p>
        <p className='my-2'>You Posted a New Job</p>
        <p className='text-[12px] w-[300px] text-[#dbdbdb]'>Kindly check the requirements and terms of work and make sure everything is right.</p>

        <div className="flex items-center justify-between mt-3 px-4">
            <p className='text-xs'>
                Today you makes 12 Activity
            </p>

            <button className='p-2 rounded-sm text-xs bg-[#FF5151]'>See All Activitity</button>
        </div>
      </div>
    </div>
  )
}

export default Card2

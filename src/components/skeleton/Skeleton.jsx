import React from 'react'

const Skeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {
            Array(8)
            .fill()
            .map((_ , inx) => (
                <div className=' border  rounded-xl '  key={inx}>
                    <div className="w-full h-[280px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-t-xl"></div>
                    <div className='h-[145px]'></div>
                </div>
            ))
        }
    </div>
  )
}

export default React.memo(Skeleton)
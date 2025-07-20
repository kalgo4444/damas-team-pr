import React from 'react'

const Skeleton = () => {
  return (
    <div className=''>
        {
            Array(8)
            .fill()
            .map((_ , inx) => (
                <div key={inx}>
                    <div></div>
                </div>
            ))
        }
    </div>
  )
}

export default Skeleton
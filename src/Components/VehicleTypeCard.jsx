import React from 'react'

function VehicleTypeCard({image,title}) {
  return (
      <div className='py-6.6 px-[23px] border border-[#E9E9E9] rounded-2xl flex flex-col items-center'>
        <img src={image} alt="" />
        <h4 className='text-lg font-medium'>{title}</h4>
      </div>
  )
}

export default VehicleTypeCard


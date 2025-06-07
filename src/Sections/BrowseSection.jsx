import React from 'react'
import Commontitle from '../Components/Commontitle'
import type1 from '../Assets/type1.png'
import type2 from '../Assets/type2.png'
import type3 from '../Assets/type3.png'
import type4 from '../Assets/type4.png'
import type5 from '../Assets/type5.png'
import type6 from '../Assets/type6.png'
import type7 from '../Assets/type7.png'
import type8 from '../Assets/type8.png'
import type9 from '../Assets/type9.png'
import VehicleTypeCard from '../Components/VehicleTypeCard'

function BrowseSection() {
  const types = [
    {
      id: 1,
      image: type1,
      title: 'suv',
    },
    {
      id: 2,
      image: type2,
      title: 'Sedan',
    },
    {
      id: 3,
      image: type3,
      title: 'Hatchback',
    },
    {
      id: 4,
      image: type4,
      title: 'Coupe',
    },
    {
      id: 5,
      image: type5,
      title: 'Hybrid',
    },
    {
      id: 6,
      image: type6,
      title: 'Convertible',
    },
    {
      id: 7,
      image: type7,
      title: 'Van',
    },
    {
      id: 8,
      image: type8,
      title: 'Truck',
    },
    {
      id: 9,
      image: type9,
      title: 'WagElectric',
    },
  ]
  return (
    <>
        <div className="section__wrapper max-w-[1440px] m-auto py-14.5 overflow-x-hidden">
           <Commontitle title="Browse by Type" buttontitle="View All" path="/" />
           <div className="grid grid-cols-9 gap-5 w-full">
            {types.map((type) => {
                return (
                  <VehicleTypeCard key={type.id} image={type.image} title={type.title} />
                )
              })
            }
           </div>
        </div>
    </>
  )
}

export default BrowseSection

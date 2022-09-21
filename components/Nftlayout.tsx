import React from 'react'
import Nft from './Nft'
import nft1 from '../assets/Nft/nft1.png'
import nft2 from '../assets/Nft/nft2.png'
import nft3 from '../assets/Nft/nft3.png'
import nft4 from '../assets/Nft/nft4.png'
import iconeth from '../assets/Nft/eth.svg'

const CarouselLayout = () => {
  const nfts = [
    {
      image: nft1,
      label: 'Andalaniosios',
      price: '2.1756',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft2,
      label: 'Bobobuy #001',
      price: '0.43',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft3,
      label: 'Girllllss #001',
      price: '1.43',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft4,
      label: 'Trio Cube #011',
      price: '0.1575',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft1,
      label: 'Andalaniosios',
      price: '2.1756',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft2,
      label: 'Bobobuy #001',
      price: '2.1756',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft3,
      label: 'Girllllss #001',
      price: '2.1756',
      link: '/',
      icon: iconeth,
    },
    {
      image: nft4,
      label: 'Trio Cube #011',
      price: '2.1756',
      link: '/',
      icon: iconeth,
    },
  ]

  return (
    <div className="">
      <div className="container mb-10">
        <Nft title="" data={nfts} />
      </div>
    </div>
  )
}

export default CarouselLayout

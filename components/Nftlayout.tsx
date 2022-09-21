import React from 'react'
import Nft from './Nft'
import ImageNft1 from '../assets/Nft/nft1.png'
import ImageNft2 from '../assets/Nft/nft2.png'
import ImageNft3 from '../assets/Nft/nft3.png'
import ImageNft4 from '../assets/Nft/nft4.png'
import IconEth from '../assets/Nft/eth.svg'

const CarouselLayout = () => {
  const nfts = [
    {
      image: ImageNft1,
      label: 'Andalaniosios',
      price: '2.1756',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft2,
      label: 'Bobobuy #001',
      price: '0.43',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft1,
      label: 'Girllllss #001',
      price: '1.43',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft1,
      label: 'Trio Cube #011',
      price: '0.1575',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft1,
      label: 'Andalaniosios',
      price: '2.1756',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft2,
      label: 'Bobobuy #001',
      price: '2.1756',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft3,
      label: 'Girllllss #001',
      price: '2.1756',
      link: '/',
      icon: IconEth,
    },
    {
      image: ImageNft4,
      label: 'Trio Cube #011',
      price: '2.1756',
      link: '/',
      icon: IconEth,
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

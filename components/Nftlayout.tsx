import React from 'react'
import importAll from './importAll'
import Nft from './Nft'

const CarouselLayout = () => {
	const Images = importAll(require.context('/assets/Nft', false, /\.(png|jpe?g|svg)$/))
	const Nfts = [
		{
			image: Images['nft1.png'],
			label: 'Andalaniosios',
			price: '2.1756',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft2.png'],
			label: 'Bobobuy #001',
			price: '0.43',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft3.png'],
			label: 'Girllllss #001',
			price: '1.43',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft4.png'],
			label: 'Trio Cube #011',
			price: '0.1575',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft1.png'],
			label: 'Andalaniosios',
			price: '2.1756',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft2.png'],
			label: 'Bobobuy #001',
			price: '2.1756',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft3.png'],
			label: 'Girllllss #001',
			price: '2.1756',
			link: '/',
			icon: Images['eth.svg']
		},
		{
			image: Images['nft4.png'],
			label: 'Trio Cube #011',
			price: '2.1756',
			link: '/',
			icon: Images['eth.svg']
		}
	]

	return (
		<div className=''>
			<div className='container mb-10'>
				<Nft title='' data={Nfts} />
			</div>
		</div>
	)
}

export default CarouselLayout

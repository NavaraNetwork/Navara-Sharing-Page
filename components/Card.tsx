import Image from 'next/image'
import React from 'react'

import creditCard from '../assets/credit_card.svg'
import checkMark from '../assets/checkmark.svg'

const Card = () => {
	return (
		<div className='relative min-h-[196px] pl-5 pt-5 text-white'>
			<picture className='absolute top-0 left-0 w-full -z-10'>
				<Image
					src={creditCard}
					layout='responsive'
				/>
			</picture>
			<p className='mb-2 capitalize text-xs font-normal opacity-70'>
				Navara Name Service sadadadas
			</p>
			<p className='mb-7 text-sm'>Navara One</p>
			<div className='flex gap-3'>
				<p className='text-base font-medium'>nacara.nns.one</p>
				<Image src={checkMark} />
			</div>
			<p className='text-[10px] font-normal text-[#F5F9FF]'>0x123...789</p>
		</div>
	)
}

export default Card

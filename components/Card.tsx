import Image from 'next/image'
import React from 'react'

import { UserInfo } from '../types/types'

// Assets
import creditCard from '../assets/images/credit_card.svg'
import checkMark from '../assets/icons/checkmark.svg'
import avatar from '../assets/images/lemon.jpg'

const Card: React.FC<UserInfo> = ({
	name,
	alias,
	domain,
	address,
	expirationDate,
}) => {
	return (
		<div className='relative min-h-[196px] pl-5 pt-5 text-white'>
			<picture className='absolute top-0 left-0 w-full -z-10'>
				<Image
					src={creditCard}
					layout='responsive'
				/>
			</picture>
			<div className='flex'>
				<div className=''>
					<Image
						src={avatar}
						layout='fill'
					/>
				</div>
				<div>
					<p className='mb-2 capitalize font-normal opacity-70'>{name}</p>
					<p className='text-xs'>{alias}</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<p className='text-base font-medium'>{domain}</p>
				<Image src={checkMark} />
			</div>
			<p className='text-[10px] font-normal text-[#F5F9FF]'>{address}</p>
		</div>
	)
}

export default Card

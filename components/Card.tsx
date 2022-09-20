import Image from 'next/image'
import React from 'react'

import { UserInfo } from '../types/types'

// Assets
import creditCard from '../assets/images/credit_card.svg'
import checkMark from '../assets/icons/checkmark.svg'

const Card: React.FC<UserInfo> = ({
	name,
	alias,
	domain,
	address,
	expirationDate,
	isValid,
	avatar,
	logo,
}) => {
	return (
		<div className='relative min-h-[196px] pl-5 pt-5 pr-8 text-white'>
			{/* Card Background */}
			<picture className='absolute top-0 left-0 w-full -z-10'>
				<Image
					src={creditCard}
					layout='responsive'
				/>
			</picture>
			{/* Card Background */}

			<div className='flex justify-between'>
				<div className='flex gap-4'>
					<div className='relative w-14 h-14 rounded-full overflow-clip'>
						<Image
							src={avatar}
							layout='responsive'
						/>
					</div>
					<div>
						<p className='mb-2 capitalize font-normal opacity-70'>{name}</p>
						<p className='text-xs'>{alias}</p>
					</div>
				</div>
				<div className='w-9 h-10'>
					<Image
						src={logo}
						layout='responsive'
					/>
				</div>
			</div>

			<div className='flex justify-between  mt-2'>
				<div>
					<div className='flex gap-3'>
						<p className='font-medium'>{domain}</p>
						<Image src={checkMark} />
					</div>
					<p className='text-[10px] font-normal text-[#F5F9FF]'>{address}</p>
				</div>
				<div>
					<p className='text-xs font-bold leading-6'>{expirationDate}</p>
					<p className='text-[10px]'>{isValid ? 'Valid' : 'Invalid'}</p>
				</div>
			</div>
		</div>
	)
}

export default Card

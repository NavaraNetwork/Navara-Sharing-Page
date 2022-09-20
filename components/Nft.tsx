import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type NftProps = {
	title: string
	data: any
}

const Nft = ({ title, data }: NftProps) => {
	return (
		<div>
			{/* <h1 className='mt-10 text-left text-4xl font-bold'>{title}</h1> */}
			<div className='grid grid-cols-2   gap-4'>
				{data.map((item: any, index: React.Key | null | undefined) => (
					<Link key={index} href={item.link} passHref>
						<a
							className='cursor-pointer single-about-us  flex items-center justify-center flex-col'
							target='_blank'
							rel='noreferrer'>
							<div className='icon'>
								<Image className='rounded-xl' src={item.image} alt='JD' />
							</div>
							<h3>
								{item.label} <br />
							</h3>
							<div className='flex justify-center items-center mb-5'>
								<Image src={item.icon} alt='JD' />
								<h3 className='my-1'>
									{item.price} <br />
								</h3>
							</div>
							<p />
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Nft

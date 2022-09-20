import Image from 'next/image'
import React from 'react'

import search from '../assets/search.svg'

type SearchProps = {
	placeholder?: string
	className?: string
}

const Search: React.FC<SearchProps> = ({ placeholder, className }) => {
	return (
		<div className={`flex items-center gap-4 p-4 ${className}`}>
			<Image src={search} />
			<input
				type='search'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Search

import React from 'react'

import Image from 'next/image'
import IconSearch from '../../../assets/icons/search.svg'
import { Input } from './Input'
type SearchProps = {
  placeholder?: string
  className?: string
  onChange?: (event: any) => void
  onSubmit?: (event: any) => void
  value?: string
  searching?: boolean
}

const SearchDropdown: React.FC<SearchProps> = ({ placeholder, className, onChange, onSubmit, value }) => {
  return (
    <div className={`${className}`}>
      <Input placeholder="Search other domain" onChange={onChange} value={value} icon={<Image src={IconSearch} />} />
    </div>
  )
}

export default SearchDropdown

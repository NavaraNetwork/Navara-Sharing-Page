import React from 'react'

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
    <>
      <Input placeholder="Search other domain" onChange={onChange} value={value} />
    </>
  )
}

export default SearchDropdown

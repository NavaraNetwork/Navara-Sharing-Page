import React from 'react'

import { SearchIcon } from '@heroicons/react/solid'
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
      <div className={`flex items-center gap-4 -4  ${className}`}>
        <SearchIcon width="20" height="20" className="dark:text-white" />

        <div>
          <Input placeholder="Search other domain" onChange={onChange} value={value} />
        </div>
      </div>
    </>
  )
}

export default SearchDropdown

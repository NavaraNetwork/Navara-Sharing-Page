import React from 'react'

import { SearchIcon } from '@heroicons/react/solid'
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
        {/* <Image src={search} className="p-1 w-10 h-10 rounded-full  " /> */}
        <div>
          <input
            id="first_name"
            className="w-64 border no-zoom text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-white"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  )
}

export default SearchDropdown

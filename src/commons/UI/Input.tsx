import React from 'react'
type InputProps = {
  className?: string
  placeholder?: string
  onChange?: (event: any) => void
  value?: string
  icon?: any
}
export const Input: React.FC<InputProps> = ({ className, placeholder, onChange, value, icon }) => {
  return (
    <div>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">{icon}</div>
        <input
          type="search"
          id="default-search"
          className="block no-zoom p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
    // <input
    //   className="w-full border no-zoom text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-white focus-visible:outline-[#1d4ed8] focus-visible:border-white"
    //   type="search"
    //   placeholder={placeholder}
    //   onChange={onChange}
    //   value={value}
    // />
  )
}

import React from 'react'
type InputProps = {
  className?: string
  placeholder?: string
  onChange?: (event: any) => void
  value?: string
}
export const Input: React.FC<InputProps> = ({ className, placeholder, onChange, value }) => {
  return (
    <input
      className="w-full border no-zoom text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-white focus-visible:outline-[#1d4ed8] focus-visible:border-white"
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

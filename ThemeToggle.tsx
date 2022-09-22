import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <button
      className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-600 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-blue-300 w-7 h-7" />
      ) : (
        <SunIcon className="text-blue-400 w-7 h-7" />
      )}
    </button>
  )
}

export default ThemeToggler

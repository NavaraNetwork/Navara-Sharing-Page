import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    // <button
    //   className="w-8 h-8  rounded-lg dark:bg-slate-600 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
    //   onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    //   aria-label="Toggle Dark Mode"
    // >
    //   {theme === 'light' ? (
    //     <MoonIcon className=" w-7 h-7" color="black" />
    //   ) : (
    //     <SunIcon className=" w-7 h-7" color="yellow" />
    //   )}
    // </button>
    <>
      <div className="switch-wrapper">
        <div className="toggle-wrapper">
          <input
            type="checkbox"
            name="toggle"
            className="toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <label htmlFor="toggle" className="toggle-body">
            <span className="thumb"></span>
          </label>
        </div>
      </div>
    </>
  )
}

export default ThemeToggler

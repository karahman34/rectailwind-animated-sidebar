import { FaMoon, FaSun } from 'react-icons/fa'

export default function Content({ theme, setTheme }) {
  return (
    <div className="flex flex-grow items-center justify-center min-h-screen bg-gray-300 dark:bg-gray-800 transition-all">
      <div
        className="flex items-center justify-center h-[8rem] w-[8rem] text-green-500 bg-white rounded-full cursor-pointer transition-all hover:bg-green-600 hover:text-white dark:bg-primary dark:text-white dark:hover:bg-green-600"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <FaMoon size="75" /> : <FaSun size="75" />}
      </div>
    </div>
  )
}

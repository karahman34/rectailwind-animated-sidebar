import { useEffect, useState } from 'react'

import './App.css'
import Content from './components/Content/Content'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const bodyClass = window.document.body.classList

    if (theme === 'dark') {
      bodyClass.add('dark')
    } else {
      bodyClass.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex h-screen w-screen">
      <SideBar />

      <Content theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

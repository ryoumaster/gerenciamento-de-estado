import { MyProvider } from './components/Contexto'
import MyChildren from './components/Filho'
import './App.css'
import {useState, createContext, useContext} from 'react'

const PreferencesContext = createContext()

function App() {
  const [preferences, setPreferences] = useState({theme:'light', language:'en'})

  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'
    }))
  }


  const changeLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language:language
    }))
  }

  return (
    <>
      <PreferencesContext.Provider value={{preferences, toggleTheme, changeLanguage}}>
        <div className='botoes'>
          <ToolBar/>
          <button onClick={toggleTheme}>Trocar o tema</button>
          <button onClick={() => changeLanguage('pt-br')}>PT</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </PreferencesContext.Provider>
    </>
  )
}

function ToolBar() {
  const { preferences }  = useContext(PreferencesContext)

  return(
    <div className='texto' style={{background: preferences.theme === 'light' ? 'white' : 'gray', color: preferences.theme === 'light' ? 'black' : 'white'}}>
      Tema utilizado - {preferences.theme}, Idioma - {preferences.language}
    </div>
  )
}

export default App

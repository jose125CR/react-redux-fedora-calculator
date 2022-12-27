import './App.scss'
import HistorialScreen from './componets/HistorialScreen'
import KeyboardPanel from './componets/KeyboardPanel'
import { Provider } from 'react-redux'
import store from './redux/store'
import InputSection from './componets/InputSection'
import Header from './componets/Header'

const App = () => {

  return (
    <Provider store={store}>
        <Header />
        <div className="container">
        <HistorialScreen />
        <InputSection />
        <KeyboardPanel />
      </div>
    </Provider>
  )
}

export default App

import logo from './logo.svg'
import './App.css'
import FirstComponent from './component/FirstComponent'
import TemplateExpressions from './component/TemplateExpressions'
import Events from './component/Events'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <FirstComponent />

      <TemplateExpressions />

      <Events />
    </div>
  )
}

export default App

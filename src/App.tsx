import './App.css'
import FormData from './components/FormData'
import FormWithState from './components/FormWithState'

function App() {
  return (
    <div className='w-1/2 mx-auto p-3'>
      <h1 className='font-extrabold text-center my-5'> Curso React </h1>
      <FormWithState />
      {/* <FormData /> */}
    </div>
  )
}

export default App



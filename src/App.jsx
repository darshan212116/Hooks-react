// import { useContext, useState } from 'react'
import './App.css'
import Card from './Component/Card/Card'
import DarkMode from './Component/DarkMode/DarkMode'
import Toggletheame from "./Component/DarkMode/DarkMode"
import English from './Component/UseContext/eng/english'
import Chinease from './Component/UseContext/chi/chinease'
import Korean from './Component/UseContext/ko/korean'
import UseEffect from './Component/UseEffect/UseEffect'
import Usecntext from './Component/UseContext/Usecntext'
import { Data } from './Component/UseContext/Usecntext'
import UseReducer from './Component/UseReducer'
import UseRef from '././Component/UseRef'
import Testforstorage from './Component/Testforstorage'
import UseLocalStorage from './Component/useLocalStorage'
import Custom from './Component/Testforstorage'
import Header from './Component/Componentadd/Header'
import Addtocart from './Component/Componentadd/Addtocart'



function App() {
  // const[value,SetValue]=useContext(Data)
  // const [color, setColor] = useState("")

  return (
    <div>

{/* ReactDOM.render(<App />, document.getElementById('root')); */}

      {/* {This code is for language} */}
    {/* <select  onClick={e=>SetValue(e.target.value)}>
            <option disabled="true" selected="true">Select Lang</option>
            <option >English</option>
            <option>Chinease</option>
            <option>Korean</option>
            
        </select> */}
       <Addtocart/>

    {/* <Custom/> */}

      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <Card/>   
    <DarkMode/>
      <Toggletheame/>
      <UseEffect/>  
     */}
      

      {/* <div>

        {
          value=="English"?(
            <English></English>
          ):value=="Chinease"?(
            <Chinease></Chinease>

          ):(
            <Korean></Korean>
          )
        }  */}
       {/* </div> */}
    
    </div>
  )
}

export default App
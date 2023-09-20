import Pessoa from "./assets/Pessoa.png"
import Icon from "./assets/Icon.png"
import './Alimento.css'

function App() {

  return (
    <body className='CentroXY'>
    <div className="esperandomenudorafael"> .</div>
      <div className="esperandomenudorafael2"> .</div>
      <img src={Pessoa}/>
     <h6>Paciente</h6>



     <div>
     <label for ="uploads">
      <p className="p-1">Café da Manhã</p>
      <img className="Icon  " src={Icon}/>
     </label>
     <input type="file" name="uploads" id="uploads" />
     </div>
     <div>
     <label for ="uploads">
     <p className="p-1">Almoço</p>
     <img className="Icon  " src={Icon}/>
     </label>
     <input type="file" name="uploads" id="uploads" />
     </div>
     <div>
     <label for ="uploads">
     <p className="p-1">Lanche</p>
     <img className="Icon  " src={Icon}/>
     </label>
     <input type="file" name="uploads" id="uploads" />
     </div>
     <div>
     <label for ="uploads">
     <p className="p-1">Janta</p>
     <img className="Icon  " src={Icon}/>
     </label>
     <input type="file" name="uploads" id="uploads" />
     </div>



   </body>
      
  )
}

export default App

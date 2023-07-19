import { useState } from "react";
import Perfil from "./components/Perfil";
import Reposlist from "./components/Reposlist";



function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input className="input" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite seu usuario do github e clique fora do campo" />


      {nomeUsuario.length > 3 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <Reposlist nomeUsuario={nomeUsuario} />
        </>
      )}
    </>

  )
}

export default App

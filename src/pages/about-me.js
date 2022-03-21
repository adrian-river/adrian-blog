import * as React from "react"

const IndexPage = () => {
  return (
    <>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h2 className="float-md-start mb-0">Cover</h2>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/*==== comienza el body ====*/}
      {/*==== main-bienvenida ====*/}
      <main className="px-1">
        <h1>¿Quien soy?</h1>
        <p className="lead">
        hola, soy Adrian David Rivera Cortez soy un adolescente de 17 años naci<br />
        en Venezuela caracas en el 2004, el 20 de octubre, y naci sin dificultades <br />
        a mi primer año de nacido mis padres se mudaron a Charallave estado miranda,<br />
        alli vivi hasta los 16 años pero no nos adelantemos,cuando cumpli 2 años mi hermana<br />
        nacio un 10 de enero, en cuento a mis padres son Yamilet Cortez (mi mamá) y <br />
        Geovanny Rivera (mi papá), tienen sus defectos pero son muy cariñosos y sin ellos <br />
        no seria la persona que actualmente soy...<br /><br />

        yo estudie en una escuela privada llamada <br /> 
        'Nuestros Simbolos' y me gradue teniendo un record <br />
        personal de 9 años consecutivos en cuadro de honor quedando entre los mejores <br />
        de mi clase a excepcion del decimo año el cual no logre quedar.Tambien estudie<br />
        en una escuela de arte (al lado de mi colegio xd) durante 5 años y realize<br />
        muchos cuadros e hice una exposicion de cuadros en el junquito<br /><br />

        Despues de graduarme mi madre, mi hermana<br />
        y yo decimos emigrar hacia Perú(actual residencia) debido a que<br />
        cada dia en Venezuela se ponia peor sin mencionar de algunos problemas<br />
        familiares, mi padre por otra parte se quedo en Venezuela para sacar su jubilacion<br />
        al llegar a Perú (gracias a Yembert(mi primo) que nos dio esa oportunidad) me encanto<br />
        el pais. <br /> <br />

        Actualmente me encontro en constante aprendimiento sobre el ambito de la tecnologia<br />
        (desarrollo), poseo mis documentos(CPP) y siguiendo dando un paso tras otro :D
        </p>
      </main>
    </div>
  </>  
  
  )
}

export default IndexPage
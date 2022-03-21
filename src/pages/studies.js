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
        <h1>¿Que estudio?</h1>
        <p className="lead">
        Actualmente me encuentro estudiando de forma remota en cursos online<br />
        comenze mis estudios sobre el desarrollo en codigo debido a que desde <br />
        niño me fascino todo sobre las computadoras el software, el hardware, como<br />
        funcionaban y especialmente los juegos (mas en {""}
        <a href="/tastes" className="text-black">¿Que te gusta/apaciona?)</a>
        ademas<br/>
        de que me llego la idea de crear mi propio videojuego (salio mal) y yembert<br/>
        me motivo a aprender a lo que eso respecta pero desde la base comenzando <br/>
        con un curso de programacion basica en {""}
        <a href="https://platzi.com/cursos/programacion-basica/" className="text-black">platzi</a>
        , con el lenguaje de programacion de javascript<br/>
        guiada por Freddy Vegas, me ecanto (por asi decirlo) echar codigo como loco y <br/>
        ver como se contruia mi codigo, luego con la herramienta de unity comenze a crear<br/>
        un pequeño juego, pero no me gusto, por lo que decidi que eso no era lo mio preferia jugar<br/>
        a los juegos y no hacerlos.<br/><br/>
        luego de eso segui estudiando desarrollo en paginas como mastermind y udemy<br />
        en el caso de udemy me aburrio un poco pero aprendi mucho sobre la logica de programacion<br />
        y de un lenguaje llamado pascal, y en mastermind aprendi python, un lenguaje<br />
        que en lo personal me encanto por si simplicidad y de facil lectura
        </p>
      </main>
    </div>
  </>  
  
  )
}

export default IndexPage
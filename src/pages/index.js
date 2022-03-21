import * as React from "react"
import './styles/cover.css'

const IndexPage = () => {
  return (
    <>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h1 className="float-md-start mb-0">Blog-page</h1>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="/contacto">
              Startup
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
        <h1>Bienvenido a mi Blog-web</h1>
        <p className="lead">
          este Blog-page lo logre construir durante un fin<br /> 
          semana (20/10/2022), que hablara a grandes rasgos<br />
          sobre mi, fue construido a base de una plantilla llamada cover<br />
          en {" "}
          <a href="https://getbootstrap.com/docs/5.1/examples/" className="text-purple">Bootstrap</a>
          , y modificada por mi, espero les guste mi <br />
          proyecto
        </p>
      </main>
        {/*==== salto de lineas ====*/}
        <br/><br/><br/><br/><br/><br/>
        {/*==== segundo main ====*/}
      <main className="px-2">
        <div className="cuadro">
          <h1>¿Quien soy?</h1>
          <p className="Second">
            hola, soy Adrian David Rivera Cortez<br/>
            soy un adolescente de 17 años que...
          </p>
        </div>

        {/*==== boton ====*/}
        <p className="lead">
          <a href="/about-me" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            Learn more
          </a>
        </p>
      </main>

      <br/><br/><br/><br/><br/><br/>
        {/*==== tercer main ====*/}
      <main className="px-3">
        <div className="cuadro-2">
          <h1>¿Que estudio?</h1>
          <p className="Second">
            actualmente me encuentro estudiando<br/>
            de forma remota en cursos online...
          </p>
        </div>

        {/*==== boton ====*/}
        <p className="lead-2">
          <a href="/studies" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            Learn more
          </a>
        </p>
      </main>

      <br/><br/><br/><br/><br/><br/>
        {/*==== cuarto main ====*/}
      <main className="px-4">
        <div className="cuadro-3">
          <h1>¿Que te gusta/apaciona?</h1>
          <p className="Second">
            mis gustos siempre han hido cambiando.<br/>
            desde niño adquiri gustos hacia...
          </p>
        </div>

        {/*==== boton ====*/}
        <p className="lead-3">
          <a href="/tastes" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            Learn more
          </a>
        </p>
      </main>

      {/*==== comienza el footer ====*/}
      <footer className="mt-auto text-white-50">
        <p>
          Cover template for{" "}
          <a href="https://getbootstrap.com/" className="text-white">
            Bootstrap
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    </div>
  </>  
  
  )
}

export default IndexPage

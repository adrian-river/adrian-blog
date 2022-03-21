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
        <h1>¿Que te gusta/apaciona?</h1>
        <p className="lead">
        mis gustos siempre han hido cambiando.desde niño adquiri gustos hacia<br />
        la cocina, el arte, los videojuego, la tecnologia y actualmente hacia<br />
        la programacion.<br /><br /><br />
        <h2>La comida</h2>
        en cuento a la cocina mi gusto llego repentinamente un dia pense me encanta comer<br />
        (otro gusto)seria chido preparar mi propia comida a mi preferencia<br />
        pero solo quedo como una idea nunca di el paso de cocinar algo por mi mismo y tampoco<br />
        me queria meter en ningun curso de cocina...<br /><br /><br />

        <h2>El arte</h2> 
        en el arte fue el caso contrario,<br />
        de niño dibujaba mucho, dibujaba mis juguetes, situaciones imaginarias, etc,<br />
        en este caso si tuve la oportunidad de ir a un curso de arte a la edad de 7 años<br />
        y me fascino alli dibuje mas que nunca, aprendi muchas cosas como las sombres<br />
        los tipos de colores, trazado de lineas, ademas de mejorar muchisimo mis tecnicas de<br />
        dibujo,Ademas tambien se me presento la oportunidad de presentar mi arte no solo en<br />
        una si no en dos exposiciones de arte en donde fueron toda mi familia<br /><br />

        luego de 5 años me comenzo a aburrir la rutina de ir a la escuela de arte y lo deje<br />
        (con algunas quejas por parte de mis padres)...<br /><br /><br />

        <h2>Los videojuegos</h2>
        los videojuegos fueron y son una parte de mi niñez y adolescencia, debido a<br />
        que cuando era niño vi por primera vez un videojuego en una sala de computacion<br />
        en el jardin de niños era el paintball de windows xp y desde ese dia algo cambio dentro<br />
        de lotso como dice el meme, luego en la casa de mi abuela, vi a mi primo jugando minecraft<br />
        y al llegar a la casa le pedi a mi papá que me ayudara a descargarlo (primer juego descargado)<br />
        ya mi papá tenia juegos en la computadora con la cual jugaba con horarios, pero con minecraft<br />
        me abrio las puertas a un mundo nuevo y desde ese entonces, descargo juegos(yarr*marinero*)<br />
        y juegos a muchisimos juegos,y debido a las tantas horas que le dedique a jugar cree (sin querer)<br />
        una pequeña adiccion que actualmente ando controlando, pero no me arrepiento de haber jugado<br />
        a tan buenos titulos, que me dieron un escape de realidad que vivia en Venezuela y en mi casa<br /><br /><br />

        <h2>La programacion</h2>
        de esta tema no hay nada que no se haya dicho en {""}
        <a href="/studies" className="text-black">¿Que estudias?</a><br />
        alli digo los inicios de por que decidi estudiar, pero algo que no mencione y entra<br />
        en este articulo es lo que me apaciona de la programacion es crear, el mundo de infinitas<br />
        posibilidades que puedes crear en la programacion es asombroso, y de eso me di cuenta no solo<br />
        al inicio si no tambien cuando realizaba proyectos personales en phyton, que porcierto es<br />
        uno de mis lenguajes favoritos...
        </p>
      </main>
    </div>
  </>  
  
  )
}

export default IndexPage
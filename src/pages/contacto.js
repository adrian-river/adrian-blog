import React, {Component} from "react";

class ContactoPage extends Component {
    state = {
        info:[]
    }

    /*  http://localhost/Blog-page/index.php/wp-json/Adrian/v1/home/blog */

    componentDidCatch(){
        fetch( 'http://localhost/Blog-page/index.php/wp-json/Adrian/v1/home/games')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({info: data})
                console.log(this.state.info);
            })
    }

    render(){
      return(
        <div>
          <p>hola contacto</p>
          <ul>
              <li>{this.state.info.juego1}</li>
              <li>{this.state.info.juego2}</li>
          </ul>
        </div>
        )
    }
}

export default ContactoPage;

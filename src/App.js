import React, {Component} from "react";

//PER LANCIARE UN PROGETTO VAI SULLA CARTELLA DEI ESSO CON IL TERMINALE E SCRIVE NPM START

class App extends Component
{

  state =
  {
    counter: 0
  }


  lol (a)
  {
    if (a==1)
      this.setState({counter: this.state.counter + 1});
    else
      this.setState({counter: this.state.counter - 1});
  }

  render ()
  {
    //console.log
    return(
      <div>
        <h1> counter: {this.state.counter} </h1>

        <button onClick={() => this.lol(1)}/*{() => this.setState({counter: this.state.counter + 1})} */ >
          incrementa
        </button>

        <button onClick={() => this.lol(2)}>
          decrementa
        </button>
      </div>
    );
  }




}

export default App;

import { Component } from 'react';
import util from './util';
import Stream from './components/stream';
import Header from './components/header';

import './App.css';
import Foot from './components/foot';
import LoginPanel from './components/login-panel';

export default class App extends Component{

  state = {
    no : null
  }

  componentDidMount(){
    var no = util.queryParams.raw
    if( !util.checkNo( no ) ) this.setState({ no: false })
    else{
      this.setState({ no: no.toUpperCase() })
      util.visit( no )
    }
  }

  // buildNo(){
  //   window.setTimeout( () => window.location.href = `?${ util.makeNo() }`, 1000 )
  // }

  render() {
  
    const { no } = this.state

    return (
      <div>
  
        <Header no={ no }/>

        { no === false &&
          <div className="section center" style={{'paddingTop':'12vh'}}>
            <LoginPanel />
          </div>
        }
  
        { no &&
          <div className="section center mt30 pb50">
            <Stream no={ no } />
          </div>
        }

        <div className="section mt120">
          <Foot />
        </div>
      </div>
    );
  }

}
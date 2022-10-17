import { Component } from 'react';
import util from './util';
import Stream from './components/stream';
import Header from './components/header';

import './App.css';
import Foot from './components/Foot';

export default class App extends Component{

  state = {
    no : null
  }

  componentDidMount(){
    var id = util.queryParams.raw
    if( !id || !id.match(/^\w{5}$/) ) return this.buildNo()
    this.setState({ id: id.toUpperCase() })
  }

  buildNo(){
    window.setTimeout( () => window.location.href = `?${ util.makeID() }`, 1000 )
  }

  render() {
  
    const { id } = this.state

    return (
      <div>
  
        <Header id={ id }/>
  
        { !id && <p className="center gray py50">正在创建站点..</p> }
  
        <div className="section center mt30 pb50" style={{'minHeight':'90vh'}}>
          { id && <Stream id={ id } /> }
        </div>

        <Foot id={id} />
        {/* <HalfMark /> */}
        
      </div>
    );
  }

}
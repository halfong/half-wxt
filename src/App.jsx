import './App.css';
import util from './util';
import Stream from './components/stream';
import Header from './components/header';
import Intro from './components/intro';
import HalfMark from './components/half-mark';

const rebuild = ()=> window.location.href = `?${ util.makeID() }`

// id = 'oeTHWjsl2Mv59weeRlstdZ5gcHN0'
function App() {
  var id = util.queryParams.raw
  if( !id || !id.match(/^\w{5}$/) ){
    id = null
    window.setTimeout( rebuild , 1000 )
  }else{
    id = id.toUpperCase()
  }

  return (
    <div style={{ padding:'2vw' }}>

      <Header id={ id }/>

      { !id && <p className="center gray py50">正在创建地址..</p> }

      { id &&
        <div>
          <div className="center mt10 section">
            <Stream id={ id } />
          </div>
          <div className="mt50 pb50">
            <Intro id={ id } />
          </div>
        </div>
      }

      <HalfMark />
      
    </div>
  );
}

export default App;
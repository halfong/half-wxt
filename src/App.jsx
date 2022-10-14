import './App.css';
import util from './util';
import Stream from './components/stream';
import Header from './components/header';
import Intro from './components/intro';
import HalfMark from './components/half-mark';

// id = 'oeTHWjsl2Mv59weeRlstdZ5gcHN0'

function App() {
  var id = util.queryParams.raw

  return (
    <div style={{ padding:'2vw' }}>

      <Header id={ id }/>

      { id &&
        <div className="center mt10">
          <div className="inline bg-black darken h32 px20 center round-full mb20"><span className='gray t5 th32'>编号 { id }</span></div>
          <Stream id={ id } />
        </div>
      }

      <div className="mt50 pb50">
        <Intro />
      </div>

      <HalfMark />
      
    </div>
  );
}

export default App;
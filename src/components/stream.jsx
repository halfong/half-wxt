import useSWR from "swr";
import util from "../util";
import Intro from "./intro";

const getData = id => fetch(`https://bjlx.top/half/api/wxt/${id}`).then(res => res.json())

export default function Stream({ id }){

  const { data, error } = useSWR(id, getData,{
    revalidateOnFocus: false,
    refreshInterval: 3000,
  })

  return <div className="com-stream flex-row" style={{'margin':'0 -15px'}}>
    { error && <p className='py15 center gray'>有点小问题 :(</p> }
    { data && data.map( _m => 
        <div className="px20 py10 col-2 inline" key={ _m.createdAt }>
          {
            _m.type === 'image' ?
            <a href={ _m.data } target="__blank">
              <img className="hover-box block bounce-in" src={ _m.data } alt={ _m.createdAt } />
              <p className="ink th24 t6 bold right">{ util.time.timeago( _m.createdAt ) }</p>
            </a>
            :
            <div>
              <p className="px20 py50 left bg-white t5 bounce-in" dangerouslySetInnerHTML={ { __html : _m.data.replace(/\n/g,'<br/>') } }></p>
              <p className="ink th24 t6 bold right">{ util.time.timeago( _m.createdAt ) }</p>
            </div>
              
          }
        </div>
    )}
    { (!data || data.length === 0) &&
      <div className="mt50 pb50 col-12">
        <Intro id={ id } />
      </div>
    }
  </div>
}
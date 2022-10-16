import useSWR from "swr";
import util from "../util";

const getData = id => fetch(`https://hal-f.cn/api/wxt/${id}`).then(res => res.json())

export default function Stream({ id }){

  const { data, error } = useSWR(id, getData,{
    revalidateOnFocus: false,
    refreshInterval: 3000,
  })

  if( error ) return <p className='py20 center gray'>有点小问题 :(</p>
  if( !data ) return null

  return <div className="com-stream flex-row">
    { data.map( _m => 
        <div className="inline px10 py10" style={{'width':'290px' }} key={ _m.createdAt }>
          {
            _m.type === 'image' ?
            <img className="hover-box block round" src={ _m.data } alt={ _m.createdAt }
              onClick={ ()=> window.open( _m.data, '_blank') }/>
            : <p className="t5 px20 py50 left round bg-white" dangerouslySetInnerHTML={ { __html : _m.data.replace(/\n/g,'<br/>') } }></p>
          }
          <p className="ab-tl inline px10 h24 center bg-black-opacity" style={{ 'left':10, 'top':10 }}>
            <span className="white th24 t6">{ util.time.timeago( _m.createdAt ) }</span>
          </p>
        </div>
    )}
  </div>
}
import useSWR from "swr";
import util from "../util";

const getData = id => fetch(`https://hal-f.cn/api/wxmp/csz/${id}`).then(res => res.json())

export default function Stream({ id }){

  const { data, error } = useSWR(id, getData,{
    revalidateOnFocus: false,
    refreshInterval: 3000,
  })

  if( error ) return <p className='py20 center t3 gray'>有点小问题 :(</p>
  if( !data ) return <p className='py20 center t3 gray'>连接中..</p>

  return <div className="com-stream">
    { data.map( _m => 
      <div key={ _m.createdAt }>
        <div className="inline w320">
          {
            _m.type === 'image' ?
            <img className="hover-box block" src={ _m.data } alt={ _m.createdAt }
              onClick={ ()=> window.open( _m.data, '_blank') }/>
            : <p className="hover-box t4 px20 py50 left bg-white">{ _m.data }</p>
          }
          <p className="ab-br inline px10 h24 center bg-black-opacity round-full" style={{ 'right':5,'bottom':5 }}>
            <span className="white th24 t6">{ util.time.timeago( _m.createdAt ) }</span>
          </p>
        </div>
      </div>
    )}
  </div>
}
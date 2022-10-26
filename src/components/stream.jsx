import useSWR from "swr";
import util from "../util";

const getData = id => fetch(`https://bjlx.top/half/api/wxt/${id}`).then(res => res.json())

export default function Stream({ no }){

  const { data, error } = useSWR(no, getData,{
    revalidateOnFocus: false,
    refreshInterval: 3000,
  })

  return <div className="com-stream flex-row" style={{'margin':'0 -15px'}}>
    { error && <p className='py15 center gray'>有点小问题 :(</p> }
    { data && data.map( _m => 
        <div className="px10 py10 col-1-5 inline" key={ _m.createdAt }>
          {
            _m.type === 'image' ?
            <a href={ _m.data } target="__blank">
              <img className="hover-box block bounce-in round" src={ _m.data } alt={ _m.createdAt } />
              <p className="gray th24 t6 bold right">{ util.time.timeago( _m.createdAt ) }</p>
            </a>
            :
            <div>
              <p className="px20 py30 left bg-white t5 bounce-in round" dangerouslySetInnerHTML={ { __html : _m.data.replace(/\n/g,'<br/>') } }></p>
              <p className="th24 t6 gray right">{ util.time.timeago( _m.createdAt ) }</p>
            </div>
              
          }
        </div>
    )}
    { (!data || data.length === 0) &&
      <div className="mt50 py80 col-12 center">
        <p><span className="icon icon-empty gray" style={{'fontSize':80}}/></p>
        <p className="mt20 gray bold t2">投件站 {no}</p>
        <p className="gray m-hide">暂无信件，点右上角“投件”</p>
        <p className="gray d-hide">桌面端访问：wxt.hal-f.cn</p>
      </div>
    }
  </div>
}
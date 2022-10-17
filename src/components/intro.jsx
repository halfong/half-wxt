import qrcodeImg from '../assets/half_code.jpg'

export default function Intro({ id }){

  return <div className='com-intro center pt50'>
    <div className="inline bg-white px5 py5 round" style={{'width':160}} >
      <img src={ qrcodeImg } alt="half-wxmp-code" style={{'width':'100%'}}/>
      <p className="t5 center pb5">微信扫码</p>
    </div>
    <p className='mt20 white'>发消息<span className="t2 th4 primary bold serif"> “{id}” </span>后开始投件</p>
  </div>

}
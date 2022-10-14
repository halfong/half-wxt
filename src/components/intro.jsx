import qrcodeImg from '../assets/half_code.jpg'

export default function Intro(){

  return <div className='com-intro center'>
    <div className="inline bg-white px5 py5" style={{'width':160,'height':160,'borderRadius':'0 16px 0 16px','overflow':'hidden'}} >
      <img src={ qrcodeImg } alt="half-wxmp-code" />
    </div>
    <p className='mt10 white t5'>传送文件：发消息给公众号</p>
    <p className='mt1 white t5'>公开访问：有网址即可访问</p>
    <p className='mt1 white t5'>阅后即焚：文件仅存60分钟</p>
  </div>

}
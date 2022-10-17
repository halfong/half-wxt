import halfImg from '../assets/half.png'
import qrcodeImg from '../assets/half_code.jpg'

export default function Foot({ id }){

  return <footer className='bg-black darken py50'>
    <div className="section">
      <div className="col-6" style={{'paddingLeft':120}}>
        <div className="ab-tl inline bg-white round" style={{'width':100}} >
          <img src={ qrcodeImg } alt="half-wxmp-code" style={{'width':'100%'}}/>
        </div>
        <p className='white bold pt5'>通过微信跨端分享文件</p>
        <p className='white t5 mt10'>1、微信扫码关注</p>
        <p className='white t5'>2、发消息<span className="th5 primary bold serif"> “{id}” </span></p>
        <p className='white t5'>3、传文件（支持文本、图片）</p>
      </div>
      <div className="col-6 right">
        <span className="t5 th54 white mr10">Made by Hal Fong</span>
        <img className='wh54 round-full' src={ halfImg } alt="half-logo" />
      </div>
    </div>
  </footer>

}
import halfImg from '../assets/half.png'

export default function HalfMark(){

  return <div className='fix-b h54 hover-box' style={{ 'right':'20px','left':'auto','bottom':'20px','width':'auto' }}>
    <span className="t5 th54 white mr10">Made by Hal Fong</span>
    <img className='wh54 round-full' src={ halfImg } alt="half-logo" />
  </div>

}
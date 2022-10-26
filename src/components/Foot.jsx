import halfImg from '../assets/half.png'

export default function Foot({ id }){

  return <footer className='darken py30' style={{'borderTop':'1px #151515 solid'}}>
      <a href='https://hal-f.cn' target='__blank' className="block center">
        <img className='wh32 round-full' src={ halfImg } alt="half-logo" />
        <span className="t5 th32 gray ml10">Produce by Hal Fong @2022</span>
      </a>
  </footer>

}
import wxtSvg from '../assets/wxt.svg'

export default function Header({ id }){

  return <header className='com-header h64 mb10'>
    <div className="com-header-bar fix-t glossy">
      <div className="section h64 flex-row">
        <div className='flex-2'>
          <img className='ab-tl h24' src={wxtSvg} alt="wxt-logo" style={{'top':'20px','width':'auto'}}/>
          <span className="ab-tl icon icon-wxt-zh white ml1 t5 th64" style={{'left':'72px','top':'7px'}}/>
          {/* <p className="ab-bl white t5 th7" style={{ 'bottom': -4,'width':'100%'}}>/ { id || '发消息给公众号获取地址' }</p> */}
        </div>
        { id && 
          <div className="flex-1 h64 right">
            <p className="t5 danger mr pr20 th64 bold">接收中</p>
            <span className="ab-tr recording-dot" style={{'top':'26px'}}></span>
          </div>
        }
      </div>
    </div>
  </header>

}
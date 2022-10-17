import wxtSvg from '../assets/wxt.svg'
import wxtZhSvg from '../assets/wxt-zh.svg'

export default function Header({ id }){

  return <header className='com-header h64 mb10'>
    <div className="com-header-bar fix-t glossy">
      <div className="section h64 flex-row">
        <div className='flex-2'>
          <img className='ab-tl h24' src={wxtSvg} alt="微信投件logo" style={{'top':'20px'}}/>
          <img className='ab-tl' src={wxtZhSvg} alt="微信投件" style={{'left':38,'top':22,'height':18}}/>
        </div>
        { id && 
          <div className="flex-1 h64 right">
            <div className="inline h44 bg-black darken pl20 pr30 round-full" style={{'marginTop':10}}>
              <p className="mr t5 th44 gray">站点  <span className="ml th44 primary serif bold">{ id }</span></p>
              <span className="ab-tr recording-dot" style={{'top':16,'right':14}}></span>
            </div>
          </div>
        }
      </div>
    </div>
  </header>

}
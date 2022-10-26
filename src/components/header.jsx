import React from 'react'
import wxtSvg from '../assets/wxt.svg'
import wxtZhSvg from '../assets/wxt-zh.svg'
import qrcodeImg from '../assets/half_code.jpg'

export default class Header extends React.Component{

  state = {
    showQR : false
  }

  render(){
    const { no } = this.props
    const { showQR } = this.state

    return <header className='com-header h64 mb10'>
      <div className="com-header-bar fix-t glossy" style={{'borderBottom':'1px #151515 solid'}}>
        <div className="section h64 flex-row">
          <div className='col-6 left'>
            <img className='fleft h24 mt20' src={wxtSvg} alt="微信投件logo" />
            <img className='fleft ml10' src={wxtZhSvg} alt="微信投件" style={{'marginTop':22,'height':18}}/>
            { no && //站点号
              <div className="fleft h24 mt20 ml10 px10 pr30" style={{'marginTop':20,'borderLeft':'1px #333 solid'}}>
                <p className="mr t4 th24 white serif">{ no }</p>
                <span className="ab-tr recording-dot bg-primary" style={{'top':8,'right':14}}></span>
              </div>
            }
          </div>
          { no && //操作栏
            <div className="col-6 right m-hide">
              <button className="h36 px20 bg-none link" style={{'marginTop':14}} onClick={ ()=> window.location = '/' }>
                <span className="t5 gray bold">退出</span>
                <span className="icon icon-exit th5 gray ml5" />
              </button>
              <button className="h36 bg-primary px10 round-full" style={{'marginTop':14}}
                onMouseEnter={ ()=>this.setState({ showQR : true }) }
                onMouseLeave={ ()=>this.setState({ showQR : false }) }>
                <span className="white t5 bold mr5">投件</span>
                <span className="icon icon-qrcode th5 white ml" />
                <span className="icon icon-down t6 ml10 th5 primary darken ml" />
              </button>
              { showQR && this.renderQRPanel() }
            </div>
          }
        </div>
      </div>
    </header>
  }

  renderQRPanel(){
    const { no } = this.props
    return <div className='ab-tr inline bg-white center p10 round' style={{'width':200,'top':58,'right':0}} >
        <img className='block' src={ qrcodeImg } alt="half-wxmp-code" style={{'width':'100%'}}/>
        <p className="t5 center pb5">微信扫码关注</p>
        <p className='t5'>发消息<span className="t5 primary bold serif"> “{no}” </span>后即可投件</p>
    </div>
  }

}
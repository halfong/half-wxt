import React from "react";
import util from "../util";

/**
 * 访问面板
 */
export default class LoginPanel extends React.Component{

  visits = util.visit()

  state = {
    value : '',
  }

  toSite( no ){
    if( !util.checkNo(no) ) return
    window.location.href = `?${ no }`
  }

  handleInput(e){
    console.log( e )
    if( e.target.value.length > 5 ) return false
    this.setState({ value : e.target.value.toUpperCase() })
  }

  render(){
    const { value } = this.state
    return <div className="inline round bg-ink p20 center bounce-in" style={{'width':360}}>

      <div className="cols">
        <p className="col-6 th3 white bold left">访问投件站</p>
        <p className="col-6 right">
          <span className="t5 th3 gray mr5">or</span>
          <span className="t5 th3 primary link" onClick={ e => this.toSite(util.makeNo()) }>随机创建</span>
        </p>
      </div>
      <div className="mt30">
        <input type="text" className="inline t4" autoFocus placeholder="5位字母及数字组合"
          value={ value }
          onChange={ this.handleInput.bind(this) }
          onKeyDown={ e => e.code === 'Enter' && this.toSite( value ) }/>
      </div>
      <button className={`inline mt30 round-full w100 h44 ${ util.checkNo(value) ? 'bg-primary' :'bg-gray'} center`}
        onClick={ e => this.toSite(value) }>
        <span className="t5 bold white th44">前往</span>
      </button>
      { this.visits.length > 0 &&
        <div className="mt20 pt20 left" style={{'borderTop':'1px #1b1b1b solid'}}>
          <p className="t5 gray bold mb10">访问记录</p>
          { this.visits.map( no =>
            <p className="link inline bg-black primary px10 h24 center mr5 round t5 th24" key={ no }
              onClick={ ()=>this.toSite(no) }>{ no }</p>
          )}
        </div>
      }
    </div>
  }

}
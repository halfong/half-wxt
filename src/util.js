const time = {

  countdown : function( sec = 0, format = 'auto' ){
    let re = [] //[ sec, min?, hour?, day? ]
    const day = Math.floor( sec/(3600*24) )
    sec -= 3600*24*day
    day > 0 && re.unshift(day + '天')
    const hour = Math.floor( sec/3600)
    sec -= 3600*hour
    hour > 0 && re.unshift(hour + '小时')
    const min = Math.floor( sec/60 )
    sec -= 60*min
    min > 0 && re.unshift( min + '分' )
    re.unshift(sec + '秒')
    return re.slice(-2).reverse().join('')
  },

  //return Data object
  parseDate : function( mixed ){
      if( !mixed ) return new Date();
      if( mixed.getTime ) return mixed;
      return new Date( mixed )
  },

  calendarDay : function( timeStr, withTime = false ){
      if( !timeStr ) return '未知';
      var re = '';
      var diff = time.diffDays( timeStr, new Date() );
      switch( diff ){
          case -1 : re = '昨天 ';break;
          case 0 : re = '今天 ';break;
          case 1 : re = '明天 ';break;
          case 2 : re = '后天';break;
          default: re = ''
      }
      return re + time.format( timeStr, 'M月d日' + ( withTime ? ' H:m' : '' ) )
  },

  timeago( timeStr ){
      var date = time.parseDate( timeStr );
      console.log( timeStr,date )
      const now = new Date().getTime()/1000
      const tar = date.getTime()/1000
      if( now - tar > 3600*24*365*3 ) return '很久前'
      if( now - tar > 3600*24*365*2 ) return '2年前'
      if( now - tar > 3600*24*365 ) return '1年前'
      if( now - tar > 3600*24*180 ) return Math.floor( ( now - tar )/( 3600*24*30 ) ) + '个月前'
      if( now - tar >= 3600*24 ) return Math.floor( ( now - tar )/( 3600*24 ) ) + '天前'
      if( now - tar >= 3600 ) return Math.floor( ( now - tar )/3600 )+'小时前'
      if( now - tar >= 60 ) return Math.floor( ( now - tar )/60 )+'分钟前'
      return Math.ceil( now - tar )+'秒前'
  },

  diffDays: function( start, end ){
      start = time.setZeroClock( time.parseDate( start ) );
      end = time.setZeroClock( time.parseDate( end ) );
      return Math.floor( ( start.getTime()- end.getTime() )/(1000 * 60 * 60 * 24)  );
  },

  diff: function( start, end, divisor = 1 ){
    start = time.parseDate( start );
    end = time.parseDate( end );
    return Math.floor( ( start.getTime()- end.getTime() )/divisor  );
  },

  setZeroClock: function( date ){
      return new Date( date.getFullYear(), date.getMonth(), date.getDate() );
  },

  format : function( timeStr , format = 'M月d日' ){
      var date = time.parseDate( timeStr );
      var map_Mzh = ['未知','一','二','三','四','五','六','七','八','九','十','十一','十二' ];
      var map = [
          { key : 'Y', value : date.getFullYear() },
          { key : 'Mzh', value : map_Mzh[ date.getMonth() + 1 ] },
          { key : 'M', value : date.getMonth()+1 },
          { key : 'dd', value : date.getDate() < 10 ? ( '0'+ date.getDate() ) : ( date.getDate() ) },
          { key : 'd', value : date.getDate() },
          { key : 'H', value : ( '0' + date.getHours() ).slice(-2) },
          { key : 'm', value : ( '0' + date.getMinutes() ).slice(-2) },
          { key : 'ss', value : ( '0' + date.getSeconds() ).slice(-2) },
          { key : 's', value : date.getSeconds() },
      ];
      map.forEach(function(i){
          format = format.replace( i.key, i.value );
      });
      return format;
  },

}

const util = {

  time,

  get queryParams(){
    let re = {
      raw : window.location.href.split('?')[1]
    }
    re.raw && re.raw.split('&').forEach( pair => re[pair.split('=')[0]] = pair.split('=')[1] )
    return re
  },

  makeNo(){
    const map = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
    var id = ''
    while( id.length < 5 ){
      id += map[Math.round( Math.random()* (map.length - 1) )]
    }
    return id
  },

  checkNo( str ){
    console.log( str )
    return str && str.match(/^\w{5}$/)
  },

  //访问过的no
  visit( no = null ){
    var data = JSON.parse( window.localStorage.getItem('visits') || '[]' )
    if( no ){
      if( data.indexOf( no ) > - 1 ) data.splice( data.indexOf( no ), 1 )
      data.unshift( no )
      data = data.slice(0,3)
      window.localStorage.setItem('visits', JSON.stringify( data ) )
    }
    return data
  }
}

export default util
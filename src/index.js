import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import imgURL from './img/login/Arrow.png'
import { height ,width} from "./units";

function AppDriver({}){
  const [val , setval] = useState('');

  return(
    <div className="main" style={{flex:1,backgroundColor:"#ffffff",height:height + 'px'}}>
      <img src={require('./img/login/Arrow.png')} style={{marginTop :"20px",marginLeft : "15px"}} onClick={() => {alert('123213')}}/>
      <div className="logo" style={{marginTop :"90px",alignItems:"center",textAlign:"center"}}>
        <img src={require('./img/login/logo.png')}/>
      </div>

      <div className="userinput" style={{textAlign:"center",borderBottomWidth : "1px",marginTop:"80px",borderBottomColor:"#000000",flex:1}}>
        <input type='text' value={val} style={{borderTopWidth : "0px",borderLeftWidth : "0px",borderRightWidth : "0px",height:"30px",width : (3 * width / 4) + 'px' , fontSize : "24px",color:"#000000",textAlign:"center",borderRadius:"0px"}} onChange={(v) => {
          setval(v.target.value);
        }} placeholder="Enter Phone Number"/>
      </div>

      <div style={{flex:1,textAlign:"center",marginTop :(height / 3) + 'px',backgroundColor:"#7B5CFF",marginLeft : "50px",marginRight : "50px",paddingTop :"15px",paddingBottom : "15px",borderRadius : "5px"}}
        onClick={() => {
        }}
      >
        <span style={{fontSize : '20px',color:"#ffffff"}}>Log in</span>
      </div>
    </div>
  )
}

ReactDOM.render(
  <AppDriver/>,
  document.getElementById('root')
)
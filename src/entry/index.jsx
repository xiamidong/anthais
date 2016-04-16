import '../common/lib';
import LteHead from '../component/LteHead';
import ReactDOM from 'react-dom';
import React from 'react';
var data=[{
            src:"src/images/01.png",
            title:"消息1",
            content:"这是你收到的第一条消息",
            times:5
          },
          {
            src:"src/images/02.png",
            title:"消息2",
            content:"这是你收到的第二条消息",
            times:5
          },
          {
            src:"src/images/03.png",
            title:"消息3",
            content:"这是你收到的第三条消息",
            times:4
          }];
ReactDOM.render(<LteHead userTitle="AdminLte" data={data} url="src/images/user.jpg" userName="Alexander Pierce"  />, document.getElementById('react-content'));

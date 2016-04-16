import React from 'react';
import {Button} from 'antd';
const MyButton = React.createClass({
  render() {
    return <div className="buttonwrap">
		    	<Button type="primary">主按钮</Button>
		    	<Button>次按钮</Button>
		  		<Button type="ghost">幽灵按钮</Button>
		  		<Button type="dashed">虚线按钮</Button>
		  		
			</div>
  }
});
/*log*/
const HeadLogo=React.createClass({
  render:function () {
    return (
      <a href="#" className="logo">{this.props.userTitle}</a>
    );
  }
});
/*创建遮罩层*/
const BoardScreen=React.createClass({
  handleClick:function(){
    var boardscreen=document.getElementById("boardscreen");
    boardscreen.style.display="none";
    var oborderwrap=document.getElementById("borderwrap");
    oborderwrap.style.display="none";
  },
  render:function(){
    return (
          <div className="boardscreen" id="boardscreen" onClick={this.handleClick} >
          </div>
      );
  }
});
/*创建头部导航组件*/
const NavBar=React.createClass({
  render:function(){
    return(
        <div className="navbar">
            <SideBarButton />
            <NavBarMenu userName={this.props.userName} url={this.props.url} data={this.props.data} />
        </div>
      );
  }
});
/*创建左边按钮切换*/
const SideBarButton=React.createClass({
    render:function(){
      return(
          <a href="#" className="sidebarbutton"><i className="icon-reorder"></i></a>
        );
    }
});
/*创建头部右侧导航菜单链接外框*/
const NavBarMenu=React.createClass({
    render:function(){
      return (
            <div className="navbarmenu">
                <ul className="navbar-nav">
                    <li className="navmenulist"><MessageMenu /><BoardWrap data={this.props.data} /></li>
                    <li className="navmenulist"><NotificationsMenu /></li>
                    <li className="navmenulist"><TasksMenu /></li>
                    <li className="navmenulist"><PersonMenu userName={this.props.userName} url={this.props.url} /></li>
                    <li className="navmenulist"><ControlSidebar /></li>
                </ul>
            </div>
        );
    }
});
/*创建信息图标*/
const MessageMenu=React.createClass({
  handelClick:function(e){
    e.preventDefault();
    var boardscreen=document.getElementById("boardscreen");
    boardscreen.style.display="block";
    var oborderwrap=document.getElementById("borderwrap");
    if (oborderwrap.style.display=="none") {
      oborderwrap.style.display="block";
    }else {
      oborderwrap.style.display="none";
    }  
  },
  render:function(){
    return(
          <a href="#" className="navbarlsta messagemenu" onClick={this.handelClick}>
              <i className="icon-envelope-alt " />
              <span className="label label-success">4</span>
          </a>
      );
  }
});
/*创建通知图标*/
const NotificationsMenu=React.createClass({
  render:function(){
    return(
          <a href="#" className="navbarlsta notifications">
              <i className="icon-bell-alt" />
              <span className="label label-warning">4</span>
          </a>
      );
  }
});
/*创建任务图标*/
const TasksMenu=React.createClass({
  render:function(){
    return(
          <a href="#" className="navbarlsta tasksmenu">
              <i className="icon-flag" />
              <span className="label label-danger">4</span>
          </a>
      );
  }
});
/*个人中心*/
const PersonMenu=React.createClass({
    render:function(){
      return (
            <a href="#" className="navbarlsta personmenu">
              <img src={this.props.url} /><span>{this.props.userName}</span>
            </a>
        );
    }
});
/*创建头部右侧设置图标*/
const ControlSidebar=React.createClass({
    render:function(){
      return(
            <a href="#" className="navbarlsta controlsidebar">
                <i className="icon-cogs" />
            </a>
        );
    }

});

/*创建信息下拉列表*/
//下拉列表的外框
const BoardWrap=React.createClass({
    render:function(){
      var messageNum=this.props.data.length;
      return (
            <div className="dropboard borderwrap" id="borderwrap">
                <BorderHead  messageNum={messageNum} />
                <MessageList data={this.props.data} />
                <BorderFoot />
            </div>
        )
    }
});
/*下拉板块头部*/
const BorderHead=React.createClass({
    render:function(){
      return(
          <div className="borderhead">
              You have {this.props.messageNum} messages
          </div>
        )
    }

});
/*下拉板块底部*/
const BorderFoot=React.createClass({
    render:function(){
      return(
          <div className="borderfoot">
             <a href="#">See All Messages</a>
          </div>
        )
    }

});
/*消息列表*/
const MessageList=React.createClass({
    render:function(){
      var messageNode=this.props.data.map(function(message){
          return (
            <MessagesCon key={message.title} src={message.src} title={message.title} content={message.content} times={message.times} />
          );
      });
      return (

              <div className="messagelist">
                  {messageNode}
              </div>
        );
    }
});
/*消息内容*/
const MessagesCon=React.createClass({
    render:function(){
      return (
            <div className="messagecon">
                <a href="#">
                    <div className="messageimg">
                        <img src={this.props.src} className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                        {this.props.title}
                        <small><i className="icon-time"></i> {this.props.times} mins</small>
                    </h4>
                    <p>{this.props.content}</p>
                </a>
            </div>
        );
    }
});

export default MyButton;
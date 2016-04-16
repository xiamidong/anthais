import '../common/lib';
import MyButton from '../component/MyButton';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render( <div className="myapp">
	<MyButton />,
	<App />
	</div>, document.getElementById('react-content'));
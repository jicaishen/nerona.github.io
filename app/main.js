require('./less/style.less');
require('./css/normalize.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Data = require('./data');

/**
 * 首页
 */
var Index = React.createClass({
	render : function() {
		return (
			<div>
				<ImgBg />
				<article className="indexBg">
					<p className="indexMe">
						<img src="./app/images/1.png" alt="个人头像" />
						<span className="indexName">Neron</span>
					</p>
					<p className="indexBtn"><i className="icon-music"></i><a href="http://m.kuwo.cn/?f=srcwap">Start Play! &gt;&gt;</a></p>
				</article>
			</div>
		);
	}
});

var ImgBg = React.createClass({
	render : function() {
		return (
			<img id="imgBg" className="dim" src="./app/images/bg.jpg" alt="" />
		);
	}
}); 

ReactDOM.render(
		<Index />,
		document.getElementById('index')
);
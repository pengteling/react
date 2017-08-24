import React from 'react'
import ImgFigure from "./ImgFigure"
import ControllerUnits from "./ControllerUnits"

require("./../../styles/main.scss")
let imageDatas_all = require("./../../data/imageData.json");

/* 图片地址数组 */
let imageDatas = imageDatas_all.map(function(val){
	//console.log('./../images/' + val.filename);
	let imgUrl = require('../../images/' + val.filename);
	//console.log("imgUrl");
	return {
		filename: imgUrl,
		title: val.title,
		desc: val.desc
	};
});

class GalleryByReactApp extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			/* 状态 定义每个图片的状态信息 位置 旋转 是否翻转 是否居中 */
			imgdataArr:[
				/*{
					pos:{
						left:0,
						top:0,
						transform: rotate(0deg)
					},
					isinverse: false,
					iscenter: false,
					filename:"",
					title:"",
					desc:""
				}*/
			]
		}
	}
	getImgPos(iscenter){ //获取单个图片pos 随机和中心图片
		var stageW = document.body.offsetWidth;
		var stageH = document.body.offsetHeight;
		var halfStageW = Math.ceil(stageW/2);
		var halfStageH = Math.ceil(stageH/2);
		var rndx =0,rndy=0,rndrotate=0,zIndex=1;

		if(iscenter){
			//如果中心图片
			//全部为0
			//console.log("当前中心图片id"+this.props.index);
			rndx = halfStageW -120;
			rndy = halfStageH -120;
			rndrotate = 0;
			zIndex=3;
		}
		else{
				//rndx = Math.random() * stageW;
			rndx = (Math.random() -0.5>0) ? (Math.random()*(halfStageW  - 360)-20) : (-Math.random()*(halfStageW-360)  +stageW -120);
			rndy =Math.random()* stageH;
			rndrotate = (0.5 - Math.random())* 60;
		}

		return {
				left: rndx +"px",
				top: rndy +"px",
				zIndex:zIndex,
				//rotate : rndrotate +"deg"
				transform: "rotate("+rndrotate +"deg)"
		}
	}
	layoutImage(centerindex){
		let imgdataArr =this.state.imgdataArr;
		imageDatas.map(function(val,key){
			imgdataArr[key]={
				pos : this.getImgPos(key == centerindex),
				filename :val.filename,
				desc : val.desc,
				title : val.title,
				isinverse: false,
				iscenter: key == centerindex
			};

		}.bind(this));
		this.setState({
			imgdataArr: imgdataArr
		})
	}
	componentWillMount() {
		this.layoutImage(0)
	}
	tocenter(index){
		return function(){
			//console.log(index);
			this.layoutImage(index);
		}.bind(this);
	}
	toinverse(index){
		return function(){
			let imgdataArr =this.state.imgdataArr;
			imgdataArr[index].isinverse = !imgdataArr[index].isinverse;
			this.setState({
				imgdataArr:imgdataArr
			})
		}.bind(this)
	}
	render(){
		console.log("render 父组件");
		var controllerUnits =[];
		var ImgFigures = [];
		//console.log(imageDatas);
		imageDatas.map(function(val,key){
			ImgFigures.push(<ImgFigure key={key} ref={'img'+key} docenter={this.tocenter(key)} doinverse={this.toinverse(key)} data={this.state.imgdataArr[key]} />);

			controllerUnits.push(<ControllerUnits key={key} ref={'img'+key} docenter={this.tocenter(key)} doinverse={this.toinverse(key)} data={this.state.imgdataArr[key]}  />);

		}.bind(this));
		return(
			<section className="stage" ref="stage">
				<section className="img-sec">
					{ImgFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
			</section>
			)
	}
}

export default GalleryByReactApp

import React from 'react'
export default class ImgFigure extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this); //绑定this
	}
	handleClick(ev){
		ev.stopPropagation();
		ev.preventDefault();
		if(this.props.data.iscenter){
			this.props.doinverse();

		}else{
			//console.log(this.props);
			this.props.docenter();
		}
	}
	render() {
		//console.log("render 子组件");
		let styleObj = {};
		styleObj = this.props.data.pos;
		if(styleObj.transform=="rotate(0deg)")	{
			//console.log("0")
			delete styleObj.transform //如果为0 则删除这个属性 避免transform被覆盖
		}
		let classnamestr = this.props.data.isinverse? "isback":""
		return (
			<figure className={classnamestr}  style={styleObj} onClick={this.handleClick} ref="imgC">
				<img src={this.props.data.filename} />
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>
				<p  onClick={this.handleClick} className="desc">{this.props.data.desc}</p>
			</figure>
			)
	}
}

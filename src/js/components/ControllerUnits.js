import React from 'react'
class ControllerUnits extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
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
	render(){
		let classnamestr = this.props.data.iscenter? "active":""
		classnamestr += (this.props.data.isinverse?" inverse":"")
		return(
				<span className={classnamestr} onClick={this.handleClick} ref="navC"></span>
			);
	}
}

export default ControllerUnits

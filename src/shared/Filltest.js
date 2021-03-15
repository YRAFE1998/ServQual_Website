import React, {Component} from 'react';

class DataFiller extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(	
		<SelectFile filename="navigation" />
		);
	}
}


function SelectFile(props){
	var file, x;
	switch (props.filename) {
		case "navigation":
			file=require("./navigation.json");
			break;
		case "pages":
			file=require("./pages.json");
			break;
		case "profile":
			file=require("./profile.json");
			break;
		case "services":
			file=require("./services.json");
			break;					
		default:
			file=require("./navigation.json");
			break;
	}
	console.log(file);
	var text="";
	for (x in file) {
		text+=x;
		if(typeof file[x] === "object" || typeof file[x] === "Object"){
			var j;
			for (j in file[x]){
				text += j + (file[x])[j];
			}
		}
		else{
			text+= file[x];
		} 
	}
	return(
		<div>
			{text}
		</div>
	);
}

export default DataFiller;



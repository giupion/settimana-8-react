import React,{Component} from 'react';



export default class ImageComponent extends Component{
/*dà le stesse proprietà all'elemento padre*/
    constructor(props){

        super (props);
    }

    render(){
        return (
            <img src={this.props.image} alt={this.props.title}/>
        )
    }
}


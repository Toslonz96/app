import React,{Component} from "react";

export default class Button extends React.Component {
    /*constructor(){
        super()
        this.onClickButtonOk = this.onClickButtonOk.bind(this);
    }*/
    showAlert(msg){
        alert(msg);
    }

    onClickButtonOk = () =>{// arrow function to avoid binding.
        this.showAlert("Hello");
    }
    render(){
        return(
            <div>
                <button onClick={this.onClickButtonOk.bind(this)}>OK</button>
            </div>
        )
    }
    
}
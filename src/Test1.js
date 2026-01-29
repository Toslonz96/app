import React,{Component} from "react";

export class Test1 extends Component {
    showAlert(msg) {
        alert(msg);
    }
    onCilckButtonOk = () => {
        this.showAlert("Button OK Clicked");
    }
     ButtonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 9px #999'
    };
    render() {
        return (
            <div onClick = {this.onCilckButtonOk} style={this.ButtonStyle}>
                OK
            </div>
        )
    }
}
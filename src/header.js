import React from "react";
import {userContext} from "./context";

export default class Header extends React.Component{
    static contextType = userContext

    render(){
        let [user,setUser] = this.context

        const headerStyle = {
            backgroundColor:'#cee',
            textAlign:'center',
            padding:'5px'
        }

        const onClickSignout = (event) =>{
            event.preventDefault()
            setUser("")
        }

        const onClickSignIn = (event) =>{
            event.preventDefault()
            setUser("Toto")
        }

        return(
            <div style={headerStyle}>
                <a href="#" >Home</a>&nbsp;-&nbsp;
                <a href="#" >Product</a>&nbsp;-&nbsp;
                <a href="#" >Contact Us</a>&nbsp;-&nbsp;&nbsp;

                {
                    (user)
                    ?<span>[{user}&nbsp;:&nbsp;<a href="#" 
                    onClick={onClickSignout}>Sign out</a>]</span>

                    :<span>[<a href="#" onClick={onClickSignIn}>
                        Sign in</a>]</span>
                }

            </div>
        )
    }
}
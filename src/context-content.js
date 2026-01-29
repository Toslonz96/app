import React from "react";
import {userContext} from "./context";

export default function Content(){
    let [user,setUser] = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: "#ddd",
        textAlign: "center",
        padding: "10px",
        margin: "10px"
    };

    const onClickSignIn = (event) =>{
        event.preventDefault();
        setUser("Toto");
    }

    return(
        <div style={contentStyle}>
            {
                (user)
                ?<span>Hello {user}</span>
                :<span>Please <a href="#" onClick={onClickSignIn}>
                    Signin</a></span>
            }
        </div>
    )
}
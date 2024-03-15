'use client'

import { useState } from "react";

function FetchToken(props) {
    const {clientID, clientSecret} = props;
    console.log(clientID)
    const url = "https://accounts.spotify.com/api/token";
    const param = new URLSearchParams(window.location.search);
    const code = param.get('code')
    console.log(code)
    console.log(clientID, clientSecret)


    async function getToken () {
        param.append("client_id", clientID);
        param.append("client_secret", clientSecret);
        param.append("grant_type", "authorization_code");
        param.append("code", code);
        param.append("redirect_uri", "http://localhost:3000/");
        // obtain token from spotify
        const token = await fetch(url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'Basic ' + (new Buffer.from(clientID + ':' + clientSecret).toString('base64'))
                },
            body: param
        })
        const {access_token} = await token.json();
        console.log(access_token)
        const profile = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", 
            headers: { 'Authorization': "Bearer " + access_token }
        }).then(res=>res.json()).then(data=>(data));
        console.log(token)
        console.log(profile)
    }

    return (
        <div>
            <button type="button" onClick={async ()=>{
                    getToken()
                }
            }>
                get Token
            </button>
        </div>
    )
}

export default FetchToken
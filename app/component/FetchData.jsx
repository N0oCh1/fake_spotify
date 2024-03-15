'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";

function FetchData (props) {
    const {clientID, clienSecret} = props
    const scope = "playlist-read-private playlist-read-collaborative";
    const rediret = "http://localhost:3000/";
// use searchParams for obtain spotyfy code 
    const param = new useSearchParams();
    const [fetch, setFetch] = useState(false)
    if(fetch){
        param.append("client_id", clientID);
        param.append("response_type", "code");
        param.append("redirect_uri", rediret);
        param.append("scope", scope);
        document.location = `https://accounts.spotify.com/authorize?${param.toString()}`;
    }
    return (
        <button className="hover:bg-zinc-700 hover:border-2 hover:border-white hover:rounded-md p-2" type="button" onClick={(e)=>{e.preventDefault(); setFetch(!fetch)}}>
            Fetch Data
        </button>
    )
}
export default FetchData
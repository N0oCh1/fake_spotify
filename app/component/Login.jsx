'use client'
import { useSearchParams } from "next/navigation"
import { getAccessToken, getCode } from "../utils/utils"

export default function Login(props){
    const searchParams = useSearchParams();
    const {clientID, scope, redirectURL, clientSecret} = props
    function login () {
        getCode(clientID, scope, redirectURL);
        const code = searchParams.get('code');
        getAccessToken(clientID, clientSecret, code, redirectURL);
    }
    return(
        <>
            <button 
            className="p-2 rounded-md border-2 border-white hover:bg-zinc-400"
            onClick={(e) => {login(); e.preventDefault();}}>
                Login
            </button> 
        </>
        
        )
    }

export function getCode (clientID, scope, redirectURL) {
    try{
        const searchParams = new URLSearchParams()
        searchParams.append("client_id", clientID);
        searchParams.append("response_type", "code");
        searchParams.append("redirect_uri", redirectURL);
        searchParams.append("scope", scope);
        document.location = `https://accounts.spotify.com/authorize?${searchParams.toString()}`;
    }
    catch(error){
        console.log(error);
    }
};

export async function getAccessToken(clientID, clientSecret, code, redirectURL) {
    try{
        console.log(clientID)
        console.log(clientSecret)
        console.log(code)
        const param = new URLSearchParams()
        param.append("client_id", clientID);
        param.append("client_secret", clientSecret);
        param.append("grant_type", "authorization_code");
        param.append("code", code);
        param.append("redirect_uri", redirectURL);

        const token = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'Basic ' + (new Buffer.from(clientID + ':' + clientSecret).toString('base64'))
                },
            body: param
        });
        const {access_token, refresh_token} = await token.json();
        console.log(access_token, refresh_token)
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
    }
    catch (error) { 
        console.log(error)
    }
};

export async function refreshAccessToken (refreshToken, clientID) {
    try {
        const token = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new searchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: clientID
            })
        })
    return await token.json()
    }
    catch (error) {
        console.log(error)
    }
};

export async function getUserProfile (accessToken) {
    try{
        const profile = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", 
            headers: { 'Authorization': "Bearer " + accessToken }
        })
    }
    catch(error) {
        console.log(error)
    }

}
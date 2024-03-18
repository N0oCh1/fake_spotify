'use client'
import { useEffect, useState } from "react";
import { getPlaylist } from "../utils/page"
import PlaylistCard from "./PlaylistCard";

export default function GetPlaylist() {
    const [showList, setShowList] = useState([]);

    async function handleButton() {
        setShowList(await getPlaylist())
    }

    return (
        <div>
            <button className="p-2 rounded-md border-2 border-white hover:bg-zinc-400" onClick={()=>{handleButton()}}>
                get playlist
            </button>
            <div className="flex flex-col gap-2">
            {showList.map((item)=>{
                    return(
                        <PlaylistCard key={item.id} name={item.name}/>
                    )
                })}  
            </div>
        </div>

    )
}
// import { IconButton } from "./IconButton"
import { ArrowRight, House, Plus, Search } from "./icons/Icons"

export default function AsideVar(){
    return(
        <div className="flex flex-row gap-1 justify-between">
            <h2> Biblioteca</h2>
            <div className="flex flex-row gap-1"> 
                <button type="button" className="hover:bg-zinc-800 rounded-full p-1">
                    <Plus/> 
                </button>
                <button type="button" className="hover:bg-zinc-800 rounded-full p-1">
                    <ArrowRight/> 
                </button>

            </div>
        </div>
)
}
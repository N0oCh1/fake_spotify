import { Button } from "./Button"

export default function AsideVar(props){
    return(
        <div className="flex flex-row gap-1 justify-between">
            <h2>Biblioteca</h2>
            <div className="flex flex-row"> 
                <h2>+</h2>
                <Button text = {"Button"}/>
            </div>

        </div>
)
}
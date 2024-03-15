import { House, Search } from "./icons/Icons";

export default function AsideTopvar () {

    return (
        <ul>
            <li className="hover:bg-slate-300 cursor-pointer flex flex-row gap-2"> <House/> Inicio</li>
            <li className="hover:bg-slate-300 cursor-pointer flex flex-row gap-2"> <Search/> Buscar</li>
        </ul>
    )
}

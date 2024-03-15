
import style from "./styles/app.module.css"
import AsideTopvar from "./component/AsideTopVar";
import AsideVar from "./component/AsideVar";
import AsidePlaylist from "./component/AsidePlaylist";
import FetchData from "./component/FetchData";
import FetchToken from "./component/FetchToken";
import { Suspense } from "react";


export default function Home() {

  const {spotyStyle, listContent} = style


  const clientID = "e9e63f77d41a40b4bcec61711746eedc";
  const clientSecret = "45e34c3a7b524e409fa5e97d97830bda";
  return (
    <div className= {`${spotyStyle} ralative h-screen gap-2 p-2 flex bg-gray-950`}>
      <aside className="[grid-area:aside] bg-black flex flex-col gap-2 ">
        <div className="bg-gray-900 rounded-lg p-2">
          <AsideTopvar/>
        </div>
        <div className=" bg-gray-900 rounded-lg p-2">
          <div>
            <AsideVar/> 
          </div>
          <div className={`${listContent} flex flex-col h-min overflow-auto`}>
            <AsidePlaylist/>
          </div>
        </div>
      </aside>

      <main className="[grid-area:main] bg-gray-900 h-full rounded-lg">
        <Suspense>
          <FetchData clientID = {clientID} />
          <FetchToken clientID = {clientID} clientSecret = {clientSecret}/>
        </Suspense>
      </main>
d
      <footer className="[grid-area:player] bg-black border border-gray-900 rounded-lg h-16">
        
      </footer>

    </div>
  );
}

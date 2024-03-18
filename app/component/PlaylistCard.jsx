
export default function PlaylistCard (props) {
    const {name, image, ...other} = props;
    return(
        <button {...other} className="flex flex-row align-middle border-2 rounded-md p-1 border-white w-full hover:bg-zinc-400" type="button">
            <img 
            src="https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"
            width={60}
            height={60}
            loading="lazy"
            aria-label="imagen gato sad"
            />
            <h2 className="my-auto mr-auto">
                {name}
            </h2>
        </button>
    )
}
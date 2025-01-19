
const VideoTitle = ({title,overview}) => {
  return (
    //what we are doing in css is that our title is overlapping over our video ,we have provided background gradient to right
    //this will be like black is fading from left to right 
    //we have given width as screen and aspect-video  that we have given to iframe
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
            <button className=" bg-white text-black py-1 md:py-4 px-3 text-xl rounded-lg hover:bg-opacity-80"> ▶ Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
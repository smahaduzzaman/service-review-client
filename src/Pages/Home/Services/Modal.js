import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Modal = ({ setModalOn, setChoice }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/services`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, []);

    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50">

            {
                photos.map(photo => <div className="flex h-screen justify-center items-center ">

                    <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">

                        <div className="flex  text-lg  text-zinc-600   mb-10" >Are you sure ?</div>
                        <img src={photo.img} alt="" />
                        <div className="flex">
                            <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Cancel</button>
                        </div>

                    </div>
                </div>)
            }
        </div>

    );
}

export default Modal;

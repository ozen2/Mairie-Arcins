import Image from "next/image"
import mairie from "../../public/image.png"

import Button from "./button"

export default function Card(){
    return(
        <article className="bg-white w-full h-[26rem] rounded-3xl mt-20 flex flex-col gap-3 items-start custom-shadow">
            <Image src={mairie} className="-mt-12 w-64 rounded-3xl self-center object-cover h-72 shadow-md"></Image>
            <h3 className="text-[1.3rem] ml-5 font-medium">Lorem ipsum</h3>
            <p className="ml-5 mr-5 line-clamp-2 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet, id fugit magnam cum debitis ipsam quo quibusdam nisi dolor blanditiis sequi, ratione culpa consequuntur corrupti! Nobis, quos. Et, vitae!</p>
            <Button/>
        </article>
    )
}
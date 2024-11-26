import Image from "next/image";
import mairie from "../../../public/image.png";

import Button from "./button";

export default function Card() {
  return (
    <article className="bg-[#ffffff] min-w-10 max-w-96 md:min-w-96 md:max-w-96 rounded-3xl mt-20 flex flex-col gap-3 items-start">
      <Image
        src={mairie}
        alt=""
        className="-mt-12 rounded-3xl self-center w-[22rem] object-cover shadow-md"
      />
      <h3 className="text-[1.3rem] ml-5 font-medium">Lorem ipsum</h3>
      <p className="ml-5 mr-5 line-clamp-2 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        eveniet, id fugit magnam cum debitis ipsam quo quibusdam nisi dolor
        blanditiis sequi, ratione culpa consequuntur corrupti! Nobis, quos. Et,
        vitae!
      </p>
      <Button />
    </article>
  );
}

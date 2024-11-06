import Link from "next/link";

export default function Button (){
    return(
        <Link href="/autre-page" className="self-end mt-5 mb-5 mr-5 bg-[--primary-color] hover:bg-[--primary-hover] pt-2 pb-2 pl-3 pr-3 rounded-full text-[0.9rem] text-white">Accéder à l'article</Link>
    )
}
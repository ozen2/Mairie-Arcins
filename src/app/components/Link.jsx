"use client";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../../public/realArrow.svg";

export default function LinkGen({ link, name }) {
  return (
    <Link href={link} className="text-[--primary-color] self-end">
      <span className="animated-underline">{name}</span>
      <Image
        src={arrow}
        alt="lien de redirection"
        width={18}
        className="ml-2 inline-block"
      />
    </Link>
  );
}

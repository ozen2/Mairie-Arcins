import Image from "next/image";
import logoArcins from "../../public/logoArcins.svg"

export default function Home() {
  return (
<main className="flex flex-col">
  <header><Image src={logoArcins} alt="" width={100} className="ml-10 mt-10"/></header>
</main>
  );
}
import Image from "next/image";

import logoArcins from "../../public/logoArcins.svg";
import mairie from "../../public/image.png";
import stat from "../../public/stat.svg";

import Card from "./components/card";
import Navbar from "./components/navbarClient";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col ml-7 mr-7">
        <header className="flex justify-between items-center">
          <Image src={logoArcins} alt="" width={100} className="mt-10 pb-12" />
          <Navbar />
        </header>
        <article>
          <section className="flex flex-col gap-8">
            <Image
              src={mairie}
              className="object-cover min-h-96 border-solid rounded-tr-[6rem]"
            />
            <h1 className="font-medium ">Lorem ipsum dolor sit amet</h1>
            <p className="font-light text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              atque. Sit velit repellendus ex, iste maiores quisquam.
            </p>
          </section>
          <h1 className="font-medium mt-20">Lorem ipsum</h1>
          <section className="">
            <Card />
            <Card />
          </section>
          <section className="mt-20 flex-col mb-20">
            <h1 className="font-medium">Lorem ipsum</h1>
            <p className="font-light">Lorem ipsum dolor</p>
            <div className="flex justify-between mt-10">
              <div>
                <h3 className="font-medium">100+</h3>
                <p className="font-light">Lorem ipsum</p>
              </div>
              <div>
                <h3 className="font-medium">205+</h3>
                <p className="font-light">Lorem ipsum</p>
              </div>
            </div>
            <Image
              src={stat}
              alt=""
              width={200}
              className="justify-self-center mt-5"
            />
            <div className="flex justify-between mt-5">
              <div>
                <h3 className="font-medium">55</h3>
                <p className="font-light">Lorem ipsum</p>
              </div>
              <div>
                <h3 className="font-medium">266</h3>
                <p className="font-light">Lorem ipsum</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h1 className="font-medium">Lorem ipsum</h1>
            <p className="font-light mb-10">Lorem ipsum dolor</p>
            <Image
              src={mairie}
              alt=""
              className="min-h-96 object-cover rounded-bl-[6rem] rounded-tr-[6rem] mb-5"
            />
            <p className="font-light text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              aspernatur eum at suscipit facilis itaque, est, totam quos a
              provident nihil dicta vel obcaecati aliquam nulla sed? Quas,
              facilis expedita!
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

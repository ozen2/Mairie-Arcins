import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/autre-page"
      className="self-end mt-5 mb-5 mr-5 bg-[--primary-color] hover:bg-[--primary-hover] py-3 px-4 rounded-full text-[1rem] text-white"
    >
      Ça m&apos;intéresse
    </Link>
  );
}

import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
export default function ProductCard({
  name = "Naman Agarwal",
  price = "$99",
  img = "https://m.media-amazon.com/images/I/51fzgQD5-fL.jpg",
}) {
  return (
    <div className="max-w-sm bg-black relative group">
      <a href="#" className="relative block  ">
        <div className="relative overflow-hidden">
          <Image alt="alt text." src={img} width={250} height={200} />
          <div className="absolute inset-0 bg-black opacity-0 "></div>
        </div>
      </a>
      <div className="p-5 bg-white">
        <div className="text-black text-xl font-bold">{name}</div>
        <div className="text-gray-400 text-lg">{price}</div>
      </div>
    </div>
  );
}

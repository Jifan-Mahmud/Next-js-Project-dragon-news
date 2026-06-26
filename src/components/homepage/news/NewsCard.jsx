import Image from "next/image";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { FaStar  } from "react-icons/fa";
import {FaEye} from "react-icons/fa"
import Link from "next/link";

const NewsCard = ({ n }) => {
  return (
    <div className="card bg-base-100  shadow-sm rounded-xl">
      <div className="card-body">
        {/* Aouther info */}
        <div className="flex justify-between items-center gap-4 bg-slate-100 p-2 rounded-2xl">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              <Image
                className="rounded-full"
                src={n.author?.img}
                alt={n.author?.name}
                height={40}
                width={40}
              />
            </div>
            <div>
              <h2 className="font-semibold">{n.author?.name}</h2>
              <h2 className="text-xs">{n.author?.published_date}</h2>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <CiBookmark className="text-xl" />
            <CiShare2 className="text-xl" />
          </div>
        </div>

        <h2 className="card-title">{n.title}</h2>

        <figure>
          <Image
            src={n.image_url}
            alt={n.title}
            height={300}
            width={400}
            className="w-full"
          />
        </figure>
        <p className="p-2 line-clamp-3">{n.details}</p>
        <div className = "flex justify-between items-center mt-2 gap-2">
          <div className="flex items-center gap-4">
            <h2 className="flex items-center gap-2"><FaStar  className="text-lg text-yellow-400" /> {n.rating.number}</h2>
            <h2 className="flex items-center gap-2"> <FaEye className="text-lg" /> {n.total_view}</h2>
          </div>
          <Link href={`/news/${n._id}`}>
            <button className="font-semibold">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

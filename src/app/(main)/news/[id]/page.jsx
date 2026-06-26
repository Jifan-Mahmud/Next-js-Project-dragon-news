import { getNewsById } from "@/lib/dataFatch";
import Image from "next/image";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export async function generateMetadata ({params}){
    const {id} = await params;
    const n = await getNewsById(id);
    return{
        title:n.title,
        description:n.details

    }
}

const newsIdPage = async ({ params }) => {
  const { id } = await params;
  const n = await getNewsById(id);
  return (
    <div className="max-w-4xl mx-auto">
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
          <p className="mt-2">{n.details}</p>
          <div className="flex justify-between items-center mt-2 gap-2">
            
            <Link href={`/ctagories/${n.category_id}`}>
              <button className="font-semibold flex items-center gap-3 text-white bg-red-500 px-4 py-2">See other news in this category <BsArrowRight /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsIdPage;

import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCtagories } from "@/lib/dataFatch";
import { getNewsByCategoryId } from "@/lib/dataFatch";

export const metadata = {
  title: "Dragon News - Home",
  description: "That is a the Ctagories in Dragon News",
};



const ctagoriesIdPage = async ({ params }) => {
  const { id } = await params;
  const ctagories = await getCtagories();
  const news = await getNewsByCategoryId(id);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-4 my-14">
        <div className=" col-span-3">
          <LeftSidebar ctagories={ctagories} activeId={id} />
        </div>
        <div className="col-span-6 ">
          <h2 className="font-bold text-lg ">Ctagory by News</h2>
          <div className="space-y-3 mt-6">
            {news.length === 0 ? (
              <h2 className="text-4xl font-bold text-center my-7">
                No news found{" "}
              </h2>
            ) : (
              news.map((n) => (
                <NewsCard n={n} key={n._id}/>
              ))
            )}
          </div>
        </div>
        <div className=" col-span-3 ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default ctagoriesIdPage;

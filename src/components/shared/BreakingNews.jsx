import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    { id: "1", title: " Bangladesh Announces New Tech Policy " },
    { id: "2", title: " Brazil National Team Appoints New Coach" },
    { id: "3", title: " International Trade Fair Begins in Dhaka" },
    {
      id: "4",
      title: " New Initiative for Digital Transformation in Education",
    },
    { id: "5", title: " Cricket World Cup Schedule Released" },
    { id: "6", title: " Government Grant Announced for New Startups" },
    { id: "7", title: " Met Office Issues Heavy Rain Warning" },
    { id: "8", title: " Export Growth Boosts National Economy" },
    { id: "9", title: " Freelancing Gains Popularity Among Youth" },
    { id: "10", title: " New Metro Rail Line Inaugurated" },
  ];

  return (
    <div className="flex justify-between items-center gap-4 bg-gray-200  container mx-auto ">
      <button className=" btn btn-error bg-red-500 text-white rounded-none">
        {" "}
        Latest
      </button>
      <Marquee pauseOnHover={true} className="font-bold">
        {news.map((n) => (
          <span className="mx-4" key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;

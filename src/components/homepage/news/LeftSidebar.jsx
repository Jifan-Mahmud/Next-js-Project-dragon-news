import Link from "next/link";

const leftSidebar = ({ ctagories,activeId }) => {
    console.log("I am the Ca",ctagories);
  return (
    <div>
      <h2 className="font-bold text-lg"> All ctagories</h2>
      <ul className="flex flex-col gap-3 mt-6 ">
        {ctagories.news_category.map((ctagory) => (
          <li
            className={`${activeId === ctagory.category_id && "bg-slate-100"} cursor-pointer p-2 rounded-md text-center text-md`}
            key={ctagory.category_id}
          >
            <Link className="block p-2" href={`/ctagories/${ctagory.category_id}`}>
            {ctagory.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default leftSidebar;

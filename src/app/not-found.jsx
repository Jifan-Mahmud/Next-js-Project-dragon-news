import Link from "next/link";
const NotFoundPage = () => {
    return (
        <div className=" h-[80vh] text-center py-8 flex flex-col justify-center   items-center gap-4">
            <h1 className="text-red-800 text-5xl font-bold">Page Not Founded Error 404 </h1>
         <Link href="/">
        <button className="btn btn-warning mt-8">Go Home</button> 
         </Link>   
        </div>
    );
};

export default NotFoundPage;
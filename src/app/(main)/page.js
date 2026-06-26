import { redirect } from "next/navigation";

const default_catagories_id = "01";

export default async function Home() {

  redirect(`/ctagories/${default_catagories_id}`)

}

/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import RestoList from "../../components/RestoList/RestoList";

const RestoPage = () => {

  const router = useRouter();
  const id = router.query.id;

  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <div className="w-full items-center justify-center mb-14">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recommended Restaurants
        </p>
      </div>

      <div className="lg:flex mt-8 gap-8 lg:pl-20">
        {id ? <RestoList id={id} /> : <p>Loading...</p>}
      </div>
    </Layout>
  );
};

export default RestoPage;

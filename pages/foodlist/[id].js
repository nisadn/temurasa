/* eslint-disable @next/next/no-img-element */
import {
  Input,
  InputGroup,
  InputRightElement,
  Box
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";
import { useQuery } from 'react-query';
import { useRouter } from "next/router";
import { foodApi } from "../../config/services/foodApi";
import Post from "../../components/FoodList/Post";
import Layout from "../../components/Layout/Layout";

const Foods = ({ id }) => {
  const getFoods = async () => {
    console.log("masuk")
    const res = await foodApi.getFood(id);
    return res.data;
    console.log(res.data)
  }

  const { status, data, error } = useQuery("foods", getFoods);

  // if(status === 'success') {
  //   console.log(data);
  // }

  return status === 'success' && <>
    {data.data.map((val) => (
      <Post val={val} key={val.id} />
    ))} </>
}

const FoodPage = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id)

  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <div className="w-full items-center justify-center">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recomended Food in{" "}
          <span className="font-semibold text-primary lg:text-5xl text-2xl text-center">
            Madura
          </span>
        </p>
      </div>

      <div className="w-full flex items-center justify-center mt-8">
        <InputGroup width={"550px"}>
          <Input
            placeholder="Search"
            borderRadius={"3xl"}
            borderColor={"#D6D6D6"}
            borderWidth={"2px"}
            backgroundColor={"#FFFFFF"}
          />
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<Box as={HiSearch} color="#000000" size={24} />}
          ></InputRightElement>
        </InputGroup>
      </div>
      {/* <Post /> */}
      <Foods id={id} />
    </Layout>
  );
};

export default FoodPage;
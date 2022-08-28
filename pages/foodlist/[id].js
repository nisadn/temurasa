/* eslint-disable @next/next/no-img-element */
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  Select,
  Text,
  Stack,
  Checkbox
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";
import { useQuery } from 'react-query';
import { useRouter } from "next/router";
import { foodApi } from "../../config/services/foodApi";
import Post from "../../components/FoodList/Post";
import Layout from "../../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Foods = ({ id }) => {
  const getFoods = async () => {
    const res = await foodApi.getFood(id);
    return res.data;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const { status, data, error } = useQuery("foods", getFoods);

  if(status === 'success') {
    console.log(data);
  }

  return status === 'success' && data && <>
    <div className="w-full items-center justify-center">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recommended Food in{" "}
          <span className="font-semibold text-primary lg:text-5xl text-2xl text-center">
            {data.location.name}
          </span>
        </p>
      </div>
      
    <div className="lg:flex mt-8">
      {data.data.length > 0 ? 
        <Post foods={data.data} />
      : <p>No foods</p>}
      </div>
      </>
}

const FoodPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      {id ? <Foods id={id} /> : <p>Loading...</p>}
    </Layout>
  );
};

export default FoodPage;


const locations = [
  {
    id: "1",
    name: "Madura",
  },
  {
    id: "2",
    name: "Palembang",
  },
  {
    id: "3",
    name: "Bali",
  },
];

const filters = [
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Sweet",
  },
  {
    id: "3",
    name: "Savory",
  },
];

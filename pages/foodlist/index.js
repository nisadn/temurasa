/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout/Layout";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Stack,
  Checkbox,
  Badge,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";
import Post from "../../components/FoodList/Post";
import { useState } from "react";

const AllFoodPage = (props) => {
  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <div className="w-full items-center justify-center">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recommended Food in{" "}
          <span className="font-semibold text-primary lg:text-5xl text-2xl text-center">
            Indonesia
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
      <Post isAllFoods />
    </Layout>
  );
};

export default AllFoodPage;
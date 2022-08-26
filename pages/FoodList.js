/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Stack,
  Checkbox,
  Badge,
} from "@chakra-ui/react";
import { HiSearch, HiHeart } from "react-icons/hi";
import Image from "next/image";

export default function FoodListPage() {
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
      <div className="lg:flex mt-8">
        <div className="lg:w-2/12 w-full">
          <p className="font-semibold text-black text-xl mb-2">Filters</p>
          <Stack spacing={2} direction="column">
            <Checkbox
              colorScheme="blue"
              className="font-medium text-black text-xl"
              defaultChecked
            >
              Checkbox
            </Checkbox>
            <Checkbox
              colorScheme="blue"
              className="font-medium text-black text-xl"
              defaultChecked
            >
              Checkbox
            </Checkbox>
          </Stack>
        </div>
        <div className="lg:w-10/12 w-full lg:flex lg:flex-wrap gap-4">
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken from the Madurese regional language which means
                mouth. This food has a salty taste, and is served with a
                variety of ingredients such as cucumber, jicama, young mango,
                plus rice cake, tofu, tempe, cingur, sprouts, water spinach, and
                long beans.
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken from the Madurese regional language which means
                mouth. 
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken from the Madurese regional language which means
                mouth. This food has a salty taste, and is served with a
                variety of ingredients such as cucumber, jicama
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken from the Madurese regional language which means
                mouth. This food has a salty taste, and is served with a
                variety of ingredients such as cucumber, jicama
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 pt-3 mb-4">
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                Rujak Cingur
              </p>
              <Stack direction="row" className="mt-2">
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Food
                </Badge>
                <Badge
                  variant="subtle"
                  rounded="xl"
                  className="lg:px-8 lg:text-lg text-sm"
                  colorScheme="blue"
                >
                  Spicy
                </Badge>
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart
                  color="#e11d48
"
                  borderColor="#000000"
                  size={20}
                />
                <p className="font-medium text-white-400 text-sm ml-1">
                  100 likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                Cingur is taken
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

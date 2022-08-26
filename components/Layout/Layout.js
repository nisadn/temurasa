import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Menu/Navbar";

const Layout = ({ title, desc, children }) => {
  return (
    <div className="bg-white-200 min-h-screen">
      <Head>
        <title>{title ? title : "TemuRasa"}</title>
        <meta
          name="description"
          content={desc ? desc : "TemuRasa: Find Your Taste in Indonesia"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Box py='20' px={[5,10,20]}>{children}</Box>
    </div>
  );
};

export default Layout;

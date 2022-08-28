import { Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import ReviewContainer from "../../components/Container/Reviews";

const ReviewPage = () => {
    const router = useRouter();
    const id = router.query.id;
    
    return (
        <Layout
            title="Detail Review"
            desc="Showing user reviews regarding certain resto"
        >
            <Flex direction='column' w='full' align='center'>
                <Flex direction='column' w={['95%','90%','80%']} gap='10'>
                {id ? <ReviewContainer id={id} /> : <p>Loading...</p>}
                </Flex>
            </Flex>
        </Layout>
    )
}

export default ReviewPage;
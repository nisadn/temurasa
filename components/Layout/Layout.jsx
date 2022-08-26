import { Flex } from '@chakra-ui/react';
import Head from 'next/head'

const Layout = ({ title, desc, children }) =>  {
    return (
        <div>
            <Head>
                <title>{title ? title : 'Create Next App'}</title>
                <meta name="description" content={desc ? desc : "Generated by create next app"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex px='4' py='6'>
                { children }
            </Flex>
        </div>
    )
}

export default Layout;
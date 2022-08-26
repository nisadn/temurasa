import { Flex, Text } from "@chakra-ui/react";

const NavbarMenu = ({ children, href, isActive, page }) => {

    return (
        <Flex
            as='a'
            direction='column'
            href={href}
            fontWeight='semibold'
            px={2}
            pb='1%'
            pt='2%'
            color='custom.400'
            bg={isActive ? 'custom.200' : 'none'}
            transition='0.3s'
            borderRadius='lg'
            align='center'
            _hover={{
                transition: '0.3s',
                bg: `${!isActive && (page === 'home' ? 'gray.600' : 'blue.100')}`,
            }}
        >
            <Text align='center' w='100%' px={2}>
                {children}
            </Text>
        </Flex>
    )
}

export default NavbarMenu;
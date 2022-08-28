import { HiMenu } from "react-icons/hi";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Flex, IconButton, useDisclosure, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { useSelector } from 'react-redux';
import { logout } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Navbar = ({page}) => {

    // src: https://stackoverflow.com/questions/60906086/changing-css-of-element-on-page-scroll
    
    // Store a bool that determines if the border is visible
    const [isShadowVisible, setIsShadowVisible] = useState(false);

    useEffect(() => {
        // Define a function that is called when the scroll event fires
        const handleScroll = (e) => {
            const scrollTop = e.target.documentElement.scrollTop;
            if (scrollTop > 50) {
                setIsShadowVisible(true);
            } else {
                setIsShadowVisible(false);
            }
        };

        // Add the event listener inside a useEffect
        if (document) {
            document.addEventListener("scroll", handleScroll);
        }

        // Remove the event listener on unmount
        return () => {
            if (document) {
                document.removeEventListener("scroll", handleScroll);
            }
        };
    }, [setIsShadowVisible]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const dispatch = useDispatch();

    const handleClick = () => {
        onOpen()
    }

    const isLogin = useSelector((state) => state.auth.isLogin);
    const account = useSelector((state) => state.auth.account);

    return (
        <Flex direction='column'>
        <Flex
            position='fixed' 
            w='100%' 
            zIndex={3} 
            backdropFilter={isShadowVisible ? 'blur(8px)' : undefined}
            gap={4}
            boxShadow={isShadowVisible ? 'md' : undefined}
            transition='0.3s'
            px={4} py={3}
            color={page === 'home' ? 'white' : 'black'}
        >
            <Flex gap={2} align='center' w='full' px={[0,0,4]} >
                <Flex w='full' fontWeight='bold' fontSize='3xl' pl={[2,2,4]}>
                    <p className="tracking-widest">TemuRasa</p>
                </Flex>
                {isLogin && 
                    <Box w='15%' px='4' py='2'
                        borderColor='white'
                        border='1px'
                        fontWeight='bold'
                        mr='2'
                        textAlign='center'
                        display={['none','none','block']}
                    >
                        Hi, {account.user.name.split(' ')[0]}
                    </Box>
                }
                <Flex display={['none', 'none', 'flex']} gap={2} >
                <NavbarMenu page={page} href='/' isActive={page === 'home'}>Home</NavbarMenu>
                {isLogin ? 
                    <NavbarMenu page={page} onClick={() => {
                        dispatch(logout());
                        toast({
                          title: "Successfully logged out",
                          status: 'success',
                          variant: 'left-accent',
                          position: 'top',
                          duration: 3000,
                          isClosable: true,
                        })
                    }} >Logout</NavbarMenu>
                : 
                    <NavbarMenu page={page} href='/login' >Login</NavbarMenu>
                }
                </Flex>
                <IconButton 
                    aria-label="open-menu" 
                    size='lg' 
                    mr='2' 
                    icon={<HiMenu color={page === 'home' ? "white" : 'black'} />} 
                    display={['flex', 'flex', 'none']}
                    onClick={handleClick}
                    variant='ghost'
                />
            </Flex>


        </Flex>
        <Drawer onClose={onClose} isOpen={isOpen} size='full' placement="top">
            <DrawerContent>
            <DrawerCloseButton mt='4' mr='5' />
            <DrawerBody>
                    <Flex direction='column' gap={5} my='15%' mx='10%' align='center'>   
                    {isLogin && 
                        <Box w='fit-content' px='4' py='2'
                            borderColor='white'
                            border='1px'
                            fontWeight='bold'
                            textAlign='center'
                        >
                            Hi, {account.user.name.split(' ')[0]}
                        </Box>
                    }
                    <NavbarMenu page={page} href='/' isActive={page === 'home'}>Home</NavbarMenu>
                    {isLogin ? 
                        <NavbarMenu page={page} onClick={() => {
                            dispatch(logout());
                            toast({
                              title: "Successfully logged out",
                              status: 'success',
                              variant: 'left-accent',
                              position: 'top',
                              duration: 3000,
                              isClosable: true,
                            })
                        }} >Logout</NavbarMenu>
                    : 
                        <NavbarMenu page={page} href='/login' >Login</NavbarMenu>
                    }
                    </Flex>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Flex>
    )
}

export default Navbar;
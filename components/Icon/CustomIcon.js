import { Icon } from "@chakra-ui/react"

const CustomIcon = (props) => {
    const { as, color, activeCol, onClick, ml } = props;

    return (
        <Icon 
            as={as} 
            _hover={{
                color: 'gray.100',
                transition: '0.3s',
                cursor: 'pointer',
                bg: `${color}`
            }} 
            _active={{
                color: 'white',
                bg: `${activeCol}`
            }}
            w='7' h='7' color={color} 
            p={1}
            ml={ml}
            borderRadius='full'
            transition= '0.3s'
            aria-label='custom-icon'
            onClick={onClick} />
    )
}

export default CustomIcon;
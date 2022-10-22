import { Heading, HStack, Image } from '@chakra-ui/react';
const MenuOption = ({ imgUrl, altIcon, titleOption }) => {
	return (
		<HStack>
			<Image src={imgUrl} alt={altIcon} />
			<Heading as='h4'>{titleOption}</Heading>
		</HStack>
	);
};

export default MenuOption;

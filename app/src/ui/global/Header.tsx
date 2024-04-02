import { Button, Flex, useColorMode } from "@nacho-ui/react";

export default function Header() {
	const { toggleColorMode } = useColorMode();

	return (
		<Flex full>
			<Button onClick={toggleColorMode}>toggle color mode</Button>
		</Flex>
	);
}

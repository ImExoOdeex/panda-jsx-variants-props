import { Flex } from "@nacho-ui/react";
import Header from "~/src/ui/global/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<Flex flexDir={"column"}>
			<Header />
			{children}
		</Flex>
	);
}

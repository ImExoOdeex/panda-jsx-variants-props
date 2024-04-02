import type { MetaFunction } from "@remix-run/node";
import { flex } from "styled-system/patterns";
import { nachoFlex } from "styled-system/recipes";
import { NachoFlex, StyledFlex } from "~/src/ui/global/Flex";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" }
	];
};

export default function Index() {
	return (
		<div
			className={flex({
				backgroundColor: "black",
				minH: "100vh",
				color: "white",
				flexDir: "row",
				justifyContent: "space-evenly"
			})}
		>
			<div
				className={nachoFlex({
					// fancy: true
				})}
			>
				<h1>Styled Flex</h1>
			</div>

			{/* it will be fancy only when component above is */}
			<StyledFlex fancy>
				<h1>Styled Flex</h1>
			</StyledFlex>

			<NachoFlex center>
				<h1>Nacho Flex</h1>
				<h1>Nacho Flex</h1>
				<h1>Nacho Flex</h1>
			</NachoFlex>
		</div>
	);
}

import { forwardRef } from "react";
import { styled } from "styled-system/jsx";
import { nachoFlex } from "styled-system/recipes";

export const StyledFlex = styled("div", nachoFlex);

export const NachoFlex = forwardRef<HTMLDivElement, Record<string, unknown>>(
	(props, ref) => {
		return <StyledFlex ref={ref} {...props} />;
	}
);

NachoFlex.displayName = "NachoFlex";

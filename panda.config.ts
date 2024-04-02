import { defineConfig, defineRecipe } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
	preflight: true,
	watch: true,
	jsxFramework: "react",
	jsxStyleProps: "all",
	outExtension: "js",
	include: ["./app/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	outdir: "styled-system",
	theme: {
		extend: {
			recipes: {
				nachoFlex: defineRecipe({
					className: "nacho-flex",
					base: {
						display: "flex"
					},
					variants: {
						fancy: {
							true: {
								backgroundColor: "pink.400",
								color: "white"
							}
						},
						center: {
							true: {
								justifyContent: "center",
								alignItems: "center"
							}
						}
					}
				})
			}
		}
	},
	presets: [pandaPreset]
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react(), tsConfigPaths()],
	preview: {
		port: 3000,
		strictPort: true,
	},
});

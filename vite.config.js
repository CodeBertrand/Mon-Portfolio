import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to your repo name if deploying to https://<user>.github.io/<repo>/
// If your repo is named CodeBertrand.github.io, set base to "/"
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});

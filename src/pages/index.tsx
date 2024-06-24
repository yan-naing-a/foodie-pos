import Features from "@/component/Features";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Testimonials from "@/component/Testimonials";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FoodiePOS() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflowY: "auto",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          maxWidth: { md: "100%", lg: "1280px" },
          m: "0 auto",
          px: { xs: "10px", md: "15px" },
        }}
      >
        <Hero />
        <Features />
        <Testimonials />
      </Box>
      <Footer />
    </Box>
  );
}

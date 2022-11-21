import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <AnimatePresence>{children}</AnimatePresence>
    </>
  );
}

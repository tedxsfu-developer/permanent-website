import React from "react";
import { AnimatePresence } from "framer-motion";

const PageWrapper = ({ children }) => {
    return (
        // <motion.div
        //     className="bg-black font-NeueHaas w-screen h-full flex"
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        // >
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        // </motion.div>
    );
};

export default PageWrapper;
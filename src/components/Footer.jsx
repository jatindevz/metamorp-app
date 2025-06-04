import React from "react";

const Footer = () => {
    return (
        <div className="flex  items-center justify-around h-10 bg-black  ">
        <p className=" text-xs text-gray-500">
        Made by <a href="https://x.com/jatinnvw" className=" hover:text-[#0FA4AF]" target="_blank"> <span className="text-[#AFDDA5]">Jatin</span> </a>•{" "}
        <a href="#" className=" hover:text-[#0FA4AF]">Terms</a> •{" "}
        <a href="#" className=" hover:text-[#0FA4AF]">Privacy</a>
      </p>
            <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Promptopia. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
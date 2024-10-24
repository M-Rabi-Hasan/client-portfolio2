// src/components/Navbar.jsx
import logo from "../assets/images/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaUpwork } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link"; // Ensure Link is imported
import Image from "next/Image"; // Ensure Link is imported

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2 
    border mt-4 border-slate-700 rounded-2xl">
      <div className="flex flex-shrink-0 items-center">
        <Image className="mx-2 w-10 ml-4" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abdul-rafay-bakhai-/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01c6c5b2e93e49b136?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpwork />
        </a>
        <a
          href="https://www.instagram.com/abdul_.rafay_2005?igsh=MWxqdm1wdnNwbmM2eQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://www.behance.net/abdulrafaybakhai" target="_blank" rel="noopener noreferrer">
          <CgWebsite />
        </a>
      </div>
      {/* <div>
        <Link href="/contact">
          <span className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-4">
            Contact Us
          </span>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;

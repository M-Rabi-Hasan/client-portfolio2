// import logo from "../assets/images/kevinRushLogo.png"
import logo from "../assets/images/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
          <img className="mx-2 w-10" src={logo} alt="Logo"/>
      </div>
      <div className=" m-8 flex justify-center items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abdul-rafay-bakhai-/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a> 
        <a href="https://www.upwork.com/freelancers/~01c6c5b2e93e49b136?mp_source=share" target="_blank" rel="noopener noreferrer">
        <FaUpwork />
        </a>
        <a href="https://www.instagram.com/abdul_.rafay_2005?igsh=MWxqdm1wdnNwbmM2eQ==" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
        </a>
        <a href="https://www.behance.net/abdulrafaybakhai" target="_blank" rel="noopener noreferrer">
        <CgWebsite/>
        </a>
      </div>
  </nav>
  )
}

export default Navbar
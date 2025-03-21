import Image from "next/image";
import logo from "@/assets/logo/dating-logo.png";
import { FaLinkedinIn, } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5]   py-8 mt-5 z-[99999]">
      <div className="w-full md:container mx-auto px-8 md:px-12  grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-16">
        {/* Logo and Description */}
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={230} height={80} />
          </Link>
          <p className="mt-4 text-sm text-gray-700">
            Finding your dream job starts with understanding your passion, skills, and career goals. In today&apos;s competitive job market, it&apos;s essential to tailor your resume, build a strong professional network, and stay updated with industry trends. Start your journey today and take the next step toward your dream career!
          </p>
        </div>

        {/* User Navigation */}
        <div className="lg:ml-12">
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">All Links</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                New Jobs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                browser-job
              </Link>
            </li>

            <li>
              <Link href="/terms-of-condition" className="hover:underline">
                Terms of Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-700 space-y-4">

            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Button */}

          <div className="mt-2 md:mt-10 flex ">
            {/* <a
              href="https://www.facebook.com/"
              className="text-blue-600 hover:text-blue-700 text-3xl px-3"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a> */}
            <a
              href="https://www.linkedin.com/"
              className="text-[#063B9D] hover:text-blue-600 text-3xl "
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://mail.google.com/"
              className="text-[#063B9D] hover:text-blue-600 text-3xl px-5"
              aria-label="YouTube"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        ©2025 Werkstekkie. All rights reserved.
      </div>
      <br /><br />
    </footer>
  );
};

export default Footer;

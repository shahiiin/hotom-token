import { LogoSquare } from "../../Assets/Images";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative pt-6 bg-[#031222] text-indigo-400 mx-auto dark:border-t-[1.7px] dark:border-indigo-900">
      <div className="flex">
        <div className="flex-auto px-8">
          <img src={LogoSquare} className="h-8" />
        </div>
        <div className="flex-auto">
          <ul className="text-xs space-y-5 px-3">
            <li className="capitalize text-sm text-white cursor-none pointer-events-none">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Protocol
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Markets
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Price
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Blog
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Doc
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-auto">
          <ul className="text-xs space-y-5 px-3">
            <li className="capitalize text-sm text-white cursor-none pointer-events-none">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Governance
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Overview
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Hatom token
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-auto">
          <ul className="text-xs space-y-5 px-3">
            <li className="capitalize text-sm text-white cursor-none pointer-events-none">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Security
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Audits
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Formal verification
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Economic security
                </span>
              </a>
            </li>
            <li className="capitalize false">
              <a href="#">
                <span className="hover:text-indigo-200 transition-colors">
                  Bug bounty
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-row-reverse tablet:flex-row">
        <div>
          <ul className="flex items-center gap-4 text-[#8493B5]">
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <FaTelegramPlane />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <BsGithub />
            </li>
          </ul>
        </div>
        <div>
          <span>© 2022 Hatom Labs, LLC.</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;

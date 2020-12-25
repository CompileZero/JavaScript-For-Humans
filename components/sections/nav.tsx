import Logo from "../../assets/svgs/logo.svg";
import Link from "next/link";

export const Nav: React.FC = () => (
  <div className="">
    <nav className="flex justify-between items-center my-4 container">
      {/* <Link href="/">
        <a>
          <Logo className="w-8" />
        </a>
      </Link> */}
      <Link href="/">
        <a className="text-green-600 text-md font-semibold mx-1 md:mx-2 py-1 px-2 rounded-md bg-green-300 hover:bg-green-500 text-gray-100">
          Home
        </a>
      </Link>
      <ul className="flex">
        {/* <li>
        <Link href="/blog">
          <a className="text-blue-600 mr-2 px-2 py-1 rounded-md">Blog</a>
        </Link>
      </li> */}
        {/* <li>
          <Link href="/work">
            <a className="text-red-200 text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Resume
            </a>
          </Link>
          <Link href="/work">
            <a className="text-teal-200 text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Work
            </a>
          </Link>
          <Link href="/work">
            <a className="text- text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Blog
            </a>
          </Link>
          
        </li> */}
        <div className="max-w-sm my-6 -ml-2">
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded text-md font-semibold bg-blue-200 hover:bg-blue-300 text-blue-800"
            data-splitbee-event="Open Linkedin"
            href="https://www.linkedin.com/in/atharva-kulkarni-96602a108/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-gray-300 hover:bg-gray-400 text-gray-800"
            data-splitbee-event="Open GitHub"
            href="https://github.com/compilezero"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-pink-200 hover:bg-pink-300 text-pink-800"
            data-splitbee-event="Open Website"
            href="https://compilezero.com"
            target="_blank"
          >
            CompileZero
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-pink-200 hover:bg-pink-300 text-pink-800"
            data-splitbee-event="Open Website"
            href="https://atharvak.ml"
            target="_blank"
          >
            Author
          </a>
        </div>
      </ul>
    </nav>
  </div>
);

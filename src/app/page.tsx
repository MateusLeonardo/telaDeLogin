import { LoginCreateWithSocials } from "@/components/LoginRedes";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="font-sans antialiased max-w-7xl h-screen m-auto flex items-center">
      <div className="flex h-screen md:h-3/5 w-full flex-col md:flex-row ">
        <div className="bg-green-900 py-8 md:py-0 px-4 lg:px-16 flex flex-col gap-3 items-center justify-center md:rounded-l-2xl">
          <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
          <p className="text-white text-lg text-center">
            To keep connected with us <br /> please login with your personal
            info
          </p>
          <button className="text-white text-xl border border-white px-14 py-1 rounded-3xl uppercase w-max mt-3">
            Sign in
          </button>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center bg-slate-200 px-5 flex-1 md:rounded-r-2xl">
          <h1 className="text-green-800 text-4xl md:text-5xl font-bold">
            Create Account
          </h1>
          <div className="flex gap-5 text-2xl mt-4 text-gray-500">
            <LoginCreateWithSocials children={<FaFacebook />} />
            <LoginCreateWithSocials children={<FaGoogle />} />
            <LoginCreateWithSocials children={<FaLinkedinIn />} />
          </div>
          <p className="text-gray-400 text-xl">
            or use your email from registration:
          </p>
          <form className="flex flex-col gap-3 w-full lg:w-96">
            <input type="text" className="p-2 rounded-md" placeholder="Name" />
            <input
              type="email"
              className="p-2 rounded-md"
              placeholder="Email"
            />
            <input
              type="password"
              className="p-2 rounded-md"
              placeholder="Password"
            />
            <button className="bg-green-700 max-w-max m-auto px-14 py-1.5 rounded-xl text-white uppercase">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

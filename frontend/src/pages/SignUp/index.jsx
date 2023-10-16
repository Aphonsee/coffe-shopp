import { Link } from "react-router-dom";
import SignupForm from "./Form/SignupForm";

export default function Signup() {
  return (
    <>
      <div className="flex">
        <img
          className="h-screen w-[45%] object-center"
          loading="lazy"
          src="https://images2.thanhnien.vn/528068263637045248/2023/6/26/1-16877379377471288584933.jpg"
        />
        
        <div className="w-full flex items-center">
          <Link to="/signin">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent bg-slate-50 hover:bg-gray-600 h-9 px-4 py-2 absolute md:right-8 md:top-6">
              Đăng nhập
            </button>
          </Link>
          <div className="lg:p-8 m-auto">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Tạo tài khoản
                </h1>
                <p className="text-sm text-slate-600">
                  Nhập vào thông tin của bạn để tạo tài khoản
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-[9px]">
              <SignupForm />
              <a href="/signin" class="flex mt-5 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

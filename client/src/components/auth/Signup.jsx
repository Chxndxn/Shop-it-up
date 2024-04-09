import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-full md:max-w-md px-6 py-12 lg:px-8">
          <div className="ring-2 rounded-xl ring-gray-200 shadow px-6 py-1 bg-white">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="mt-8 lg:text-4xl text-2xl leading-9 tracking-tight text-black font-medium">
                Create account
              </h1>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-950"
                  >
                    Your name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="First and last name"
                      className="block w-full rounded-md ring-2 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-950"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email address"
                      className="block w-full rounded-md ring-2 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium leading-6 text-gray-950"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="text"
                      required
                      placeholder="Mobile number"
                      className="block w-full rounded-md ring-2 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-950"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="At least 8 characters"
                      className="block w-full rounded-md ring-2 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-10 mb-5 text-center text-sm font-medium text-gray-950">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-blue-600 hover:text-blue-700"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

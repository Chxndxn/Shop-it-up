import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShopItUp from "../../assets/Shopitup-svg.svg";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-full md:max-w-md px-6 py-4 lg:px-8">
          <div>
            <img src={ShopItUp} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="ring-2 rounded-xl ring-gray-200 shadow px-6 py-1 bg-white">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="mt-8 lg:text-4xl text-2xl leading-9 tracking-tight text-black font-medium">
                Create account
              </h1>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                noValidate
                className="space-y-3"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                      {...register("name", {
                        required: `First and last name is required`,
                      })}
                      type="text"
                      placeholder={
                        errors.name
                          ? errors.name.message
                          : "First and last name"
                      }
                      className={`block w-full rounded-md ring-1 ring-inset py-2 px-3 text-gray-900 shadow-sm ${
                        errors.name
                          ? `placeholder:text-red-500 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
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
                      {...register("email", {
                        required: `Email address is required`,
                      })}
                      type="email"
                      autoComplete="email"
                      placeholder={
                        errors.email ? errors.email.message : "Email address"
                      }
                      className={`block w-full rounded-md ring-1 ring-inset py-2 px-3 text-gray-900 shadow-sm ${
                        errors.email
                          ? `placeholder:text-red-500 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
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
                      {...register("mobileNumber", {
                        required: `Mobile number is required`,
                      })}
                      type="text"
                      placeholder={
                        errors.mobileNumber
                          ? errors.mobileNumber.message
                          : "Email address"
                      }
                      className={`block w-full rounded-md ring-1 ring-inset py-2 px-3 text-gray-900 shadow-sm ${
                        errors.mobileNumber
                          ? `placeholder:text-red-500 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
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
                      {...register("password", {
                        required: `Password is required`,
                      })}
                      type="password"
                      autoComplete="current-password"
                      placeholder={
                        errors.password
                          ? errors.password.message
                          : "Email address"
                      }
                      className={`block w-full rounded-md ring-1 ring-inset  py-2 px-3 text-gray-900 shadow-sm ${
                        errors.password
                          ? `placeholder:text-red-500 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
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

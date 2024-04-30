/* eslint-disable react/jsx-key */
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShopItUp from "../../../assets/Shopitup-svg.svg";
import { useDispatch, useSelector } from "react-redux";
import { createUser, selectLoggedInUser } from "../authSlice";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../constants/constants";
const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupUser = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
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
                onSubmit={handleSubmit(signupUser)}
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
                        required: `First and last name is required.`,
                        maxLength: 30,
                      })}
                      type="text"
                      placeholder="First and last name"
                      className={`block w-full rounded-md ring-1 ring-inset py-2 px-3 text-gray-900 shadow-sm ${
                        errors.name ? `ring-red-300` : `ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {errors.name && errors.name.type === "required" && (
                    <p className="text-xs text-red-500 p-1">
                      {errors.name.message}
                    </p>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <p className="text-xs text-red-500 p-1">
                      `Name should be within 30 characters only.`
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-950"
                  >
                    Email Address
                  </label>
                  <div className="flex flex-col-2 gap-x-4 mt-2">
                    <input
                      id="email"
                      {...register("email", {
                        required: `Email Address is required.`,
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email address.",
                        },
                      })}
                      type="text"
                      autoComplete="email"
                      placeholder="xyz@email.com"
                      className={`block w-full rounded-md ring-1 ring-inset py-2 px-3 text-gray-900 shadow-sm ${
                        errors.email ? `ring-red-300` : `ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 p-1">
                      {errors.email.message}
                    </p>
                  )}
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
                        required: `Password is required.`,
                        pattern: {
                          value: PASSWORD_REGEX,
                          message: `- at least 8 characters\n
                          - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                          - Can contain special characters`,
                        },
                      })}
                      type="password"
                      autoComplete="current-password"
                      placeholder="At least 8 characters"
                      className={`block w-full rounded-md ring-1 ring-inset  py-2 px-3 text-gray-900 shadow-sm ${
                        errors.password ? `ring-red-300` : `ring-gray-300`
                      }  sm:text-sm sm:leading-6`}
                    />
                    {errors.password && (
                      <p className="text-xs text-red-500 p-1">
                        {errors.password.message}
                      </p>
                    )}
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

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShopItUp from "../../assets/Shopitup-svg.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-full md:max-w-md px-6 py-12 lg:px-8">
          <div>
            <img src={ShopItUp} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="ring-2 rounded-xl ring-gray-200 shadow px-6 py-1 bg-white">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="mt-8 lg:text-4xl text-2xl leading-9 tracking-tight text-black font-medium">
                Log in
              </h1>
            </div>

            <div className="m-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-950"
                  >
                    Email or Mobile number
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register("email", {
                        required: "Email or mobile number is required",
                      })}
                      type="email"
                      autoComplete="email"
                      placeholder={errors.email ? errors.email.message : ""}
                      className={`block w-full rounded-md ring-1 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm ${
                        errors.password
                          ? `placeholder:text-red-400 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      } sm:text-sm sm:leading-6`}
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
                        required: "Password is required",
                      })}
                      type="password"
                      autoComplete="current-password"
                      placeholder={
                        errors.password ? errors.password.message : ""
                      }
                      className={`block w-full rounded-md ring-1 ring-inset ring-gray-300 py-2 px-3 text-gray-900 shadow-sm ${
                        errors.password
                          ? `placeholder:text-red-400 ring-red-300`
                          : `placeholder:text-gray-400 ring-gray-300`
                      } sm:text-sm sm:leading-6`}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <div className="mb-5">
                <p className="mt-10 mb-5 text-center text-sm font-medium text-gray-950">
                  Do not have an account?{" "}
                </p>
                <Link to="/signup">
                  <button className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm leading-6 text-white shadow-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Create an account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import Heading from "@/website/components/Heading/Heading";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { SignInProps } from "@/website/lib/types/teetagTypes";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import SecondaryLayout from "module/website/layout/SecondaryLayout";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { login, updateCart } from "store/features/auth/authSlice";

const validate = (values: SignInProps) => {
  const errors: FormikValues = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;

  if (!values.login) {
    errors.login = "Email or Phone is Required";
  } else if (!emailRegex.test(values.login) && !phoneRegex.test(values.login)) {
    errors.login =
      "Please enter a valid phone number with the country code, including the '+' sign, and a valid email address in the format 'username@example.com'.";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }

  return errors;
};

const SignIn = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const initialValues: SignInProps = {
    login: "",
    password: "",
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <TitleHead
        title="Sign In"
        metaTitle="Sign In"
        metaDesc="AMERICA'S LARGEST GAME OF TAG For a Greater Cause!"
      />
      <section>
        <div className="container">
          <div className="login__box">
            <Heading title="Sign In" />
            <div className="relative grid grid-cols-1 gap-24 py-4 overflow-hidden lg:gap-56 lg:items-center lg:grid-cols-2">
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(false);
                  const response = await dispatch(
                    login({
                      loginOption: values.login,
                      password: values.password,
                    }),
                  );
                  if (response.type === "auth/login/fulfilled") {
                    dispatch(updateCart(response.payload.user.cart));
                  } else {
                    toast.error(response.payload);
                  }
                }}
              >
                <Form className="flex flex-col justify-center gap-10 ">
                  <div className="teetag__input">
                    <label
                      htmlFor="login"
                      className="block mb-6 capitalize font-fugaz"
                    >
                      Email/Phone Number
                    </label>
                    <Field
                      type="text"
                      name="login"
                      id="login"
                      placeholder="Enter Email or Phone Number"
                    />
                    <ErrorMessage
                      name="login"
                      component="p"
                      className="label-error mt-6"
                    />
                  </div>
                  <div className="teetag__input">
                    <label
                      htmlFor="password"
                      className="block mb-6 capitalize font-fugaz"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="label-error mt-6"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-xl  hover:text-green-light"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button className="btn-teetag yellow m-0">Sign In</button>
                </Form>
              </Formik>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <Link
                    href={
                      process.env.NEXT_PUBLIC_STAGING_SERVER_URL +
                      "/auth/facebook"
                    }
                    className="mb-12 btn__teetag_secondary"
                  >
                    <FaFacebookF />
                    Sign in with Facebook
                  </Link>
                  <Link
                    href={
                      process.env.NEXT_PUBLIC_STAGING_SERVER_URL +
                      "/auth/google"
                    }
                    className="btn__teetag_secondary"
                  >
                    <FaGoogle />
                    Sign in with Google
                  </Link>
                  <p className="flex items-center justify-center gap-5 mt-28 text-xl text-center">
                    Don't Have an Account?
                    <Link href="/signup" className="text-green-light">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              <div className="Login__box-center">
                <p className="text-xl uppercase">OR</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex justify-center items-center gap-5 mt-20 text-xl text-center hover:text-green-light"
            >
              <Image
                src="/assets/left_arrow.png"
                width={24}
                height={24}
                alt="left_arrow"
              />
              Back to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

SignIn.getLayout = function (page: React.ReactElement) {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};

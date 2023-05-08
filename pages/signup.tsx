import Heading from "@/website/components/Heading/Heading";
import Heading3 from "@/website/components/Heading3/Heading3";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { SignUpProps } from "@/website/lib/types/teetagTypes";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import SecondaryLayout from "module/website/layout/SecondaryLayout";
import Image from "next/image";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { register, updateCart } from "store/features/auth/authSlice";
import { RootState } from "store/store";

const validate = (values: SignUpProps) => {
  let errors: FormikValues = {};
  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/.test(
      values.password,
    )
  ) {
    errors.password =
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character";
  }

  if (!values.phone) {
    errors.phone = "Phone is Required";
  } else if (!/^\+(?:[0-9]●?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone =
      "Please enter a valid phone number with the country code, including the '+' sign. For example, '+1234567890'.";
  }

  return errors;
};

const SignUp = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const error = useSelector((state: RootState) => state.auth.error);
  const initialValues: SignUpProps = {
    email: "",
    phone: "",
    name: "",
    password: "",
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <TitleHead
        title="Sign Up"
        metaTitle="Sign Up"
        metaDesc="AMERICA'S LARGEST GAME OF TAG For a Greater Cause!"
      />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-40">
            <div className="pt-32 lg:pt-64 order-2 lg:order-1">
              <div className="lg:max-w-2xl">
                <Heading3 title="What is TEETAG?" />
              </div>
              <p className="h7 mt-16 lg:mt-36">
                TeeTag is simple… It’s TAG! America’s LARGEST game of tag
                through the use of custom t-shirts in order to help raise money
                for children who’ve lost a parent to Cancer. TeeTag spans across
                all 50 states of America and is meant to be a fun, interactive,
                pay-it-forward game to raise money for a greater cause.
              </p>
              <Link href="/story" className="btn-teetag yellow">
                View My Story
              </Link>
            </div>
            <div className="signup__box order-1 lg:order-2">
              <Heading title="Sign Up" />
              <div className="relative">
                <Formik
                  initialValues={initialValues}
                  validate={validate}
                  onSubmit={async (
                    values: SignUpProps,
                    actions: FormikHelpers<SignUpProps>,
                  ) => {
                    actions.setSubmitting(false);
                    const response = await dispatch(
                      register({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        phone: values.phone,
                      }),
                    );
                    if (response.type === "auth/register/rejected") {
                      toast.error(response.payload);
                    } else {
                      dispatch(updateCart(response.payload.user.cart));
                    }
                  }}
                >
                  <Form className="flex flex-col justify-center gap-10">
                    <div className="teetag__input">
                      <label
                        htmlFor="name"
                        className="block mb-4 capitalize font-fugaz"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="label-error mt-6"
                      />
                    </div>
                    <div className="teetag__input">
                      <label
                        htmlFor="email"
                        className="block mb-4 capitalize font-fugaz"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="label-error mt-6"
                      />
                    </div>
                    <div className="teetag__input">
                      <label
                        htmlFor="phone"
                        className="block mb-4 capitalize font-fugaz"
                      >
                        Phone Number
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter Your Phone Number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="label-error mt-6"
                      />
                    </div>
                    <div className="teetag__input">
                      <label
                        htmlFor="password"
                        className="block mb-4 capitalize font-fugaz"
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
                    <button className="btn-teetag yellow" type="submit">
                      Sign Up
                    </button>
                  </Form>
                </Formik>
                <div className="signup__box-center py-16">
                  <p className="text-xl uppercase">OR</p>
                </div>
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
                      Sign Up with Facebook
                    </Link>
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_STAGING_SERVER_URL +
                        "/auth/google"
                      }
                      className="btn__teetag_secondary"
                    >
                      <FaGoogle />
                      Sign Up with Google
                    </Link>
                    <p className="block mt-24 text-xl text-center">
                      Already have an account
                      <Link href="/signin" className="ml-3 text-green-light">
                        Sign in
                      </Link>
                    </p>
                  </div>
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
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

SignUp.getLayout = function (page: React.ReactElement) {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};

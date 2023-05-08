import ImageUploader from "@/dashboard/components/ImageUploader/ImageUploader";
import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { handleStatus } from "@/website/lib/networkCalls/authFunctions";
import { createInfluencer } from "@/website/lib/networkCalls/dashboard/userDetails";
import { uploadFile } from "@/website/lib/networkCalls/formFunctions";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useState } from "react";
import { FileWithPath } from "react-dropzone";
import toast from "react-hot-toast";

const validate = (values: any) => {
  let errors: FormikValues = {};
  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.state) {
    errors.state = "State is Required";
  }

  if (!values.age) {
    errors.age = "Age is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone is Required";
  } else if (!/^\+(?:[0-9]●?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone =
      "Please enter a valid phone number with the country code, including the '+' sign. For example, '+1234567890'.";
  }

  return errors;
};
const CreateInfleuncer = () => {
  const [imagefile, setImagefile] = useState<FileWithPath | null>(null);

  const initialValues: any = {};
  return (
    <div>
      <InnerHeader title="Create Influencer" />
      <div className="container">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={async (values: any, actions: FormikHelpers<any>) => {
            event.preventDefault();
            actions.setSubmitting(false);

            const socialLinks = [
              values.facebook,
              values.instagram,
              values.twitter,
              values.tiktok,
              values.other,
            ].filter((link) => link);
            if (socialLinks.length > 0) {
              const fileResponse = await uploadFile(imagefile);
              if (fileResponse.status === 200 && socialLinks.length > 0) {
                const response = await createInfluencer({
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  image: fileResponse.result.url,
                  social_links: socialLinks,
                  influencer_code: values.code,
                  reason: values.loss || "none",
                  age: values.age,
                  state: values.state,
                });
                handleStatus(response);
              }
            } else toast.error("Please enter atleast one social link");
          }}
        >
          <Form>
            <div className="grid gap-10 mt-12 grid-cols-12">
              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4">
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
                  placeholder="Enter name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="label-error mt-6"
                />
              </div>
              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4">
                <label
                  htmlFor="email"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="label-error mt-6"
                />
              </div>
              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4">
                <label
                  htmlFor="phone"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Phone
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="label-error mt-6"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="email"
                  className="block mb-4 capitalize font-fugaz"
                >
                  State
                </label>
                <Field as="select" name="state" id="state">
                  <option value="">Select</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Field>
                <ErrorMessage
                  name="state"
                  component="p"
                  className="label-error mt-6"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="age"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Age
                </label>
                <Field
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter Age"
                />
                <ErrorMessage
                  name="age"
                  component="p"
                  className="label-error mt-6"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="Loss"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Loss (optional)
                </label>
                <Field
                  type="text"
                  name="loss"
                  id="loss"
                  placeholder="Enter here"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="code"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Influencer Code
                </label>
                <Field
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Enter here"
                />
                <ErrorMessage
                  name="code"
                  component="p"
                  className="label-error mt-6"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="facebook"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Facebook
                </label>
                <Field
                  type="text"
                  name="facebook"
                  id="facebook"
                  placeholder="Enter here"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="instagram"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Instagram
                </label>
                <Field
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Enter here"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="twitter"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Twitter
                </label>
                <Field
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Enter here"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="tiktok"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Tiktok
                </label>
                <Field
                  type="text"
                  name="tiktok"
                  id="tiktok"
                  placeholder="Enter here"
                />
              </div>

              <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
                <label
                  htmlFor="other"
                  className="block mb-4 capitalize font-fugaz"
                >
                  Other
                </label>
                <Field
                  type="text"
                  name="other"
                  id="other"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="teetag__textareasc col-span-12 sm:col-span-6 lg:col-span-6 mt-10">
              <ImageUploader
                name="image"
                label="image*"
                image={imagefile}
                setImage={setImagefile}
              />
            </div>
            <div className="grid gap-12 mt-12 grid-cols-12">
              <button
                type="submit"
                className="btn-teetag yellow text-center col-span-12 sm:col-span-6 lg:col-span-3"
              >
                Save
              </button>
              <button
                type="button"
                className="btn-teetag green text-center col-span-12 sm:col-span-6 lg:col-span-3"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateInfleuncer;

CreateInfleuncer.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Minion } from "@/dashboard/lib/types/dashboardTypes";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { handleStatus } from "@/website/lib/networkCalls/authFunctions";
import {
  getAllMinions,
  getMinionInfo,
  updateMinion,
} from "@/website/lib/networkCalls/dashboard/userDetails";

import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Toaster } from "react-hot-toast";

interface IParams extends ParsedUrlQuery {
  minionId: string;
}

interface minionInfoProps {
  minion: Minion;
}

const stateOptions = [
  { value: "", label: "Select" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const Editminion = ({ minion }: minionInfoProps) => {
  const [formValues, setformValues] = useState({
    name: minion?.name,
    email: minion?.email,
    phone: minion?.phone,
    state: minion?.state,
    age: minion?.age,
    loss: minion?.loss,
  });
  function handleChange(e: any): void {
    e.target.value;
    setformValues({
      name: e.target.name == "name" ? e.target.value : formValues.name,
      email: e.target.name == "email" ? e.target.value : formValues.email,
      phone: e.target.name == "phone" ? e.target.value : formValues.phone,
      state: e.target.name == "state" ? e.target.value : formValues.state,
      age: e.target.name == "age" ? e.target.value : formValues.age,
      loss: e.target.name == "loss" ? e.target.value : formValues.loss,
    });
  }
  function updateData() {
    const updatedData = {
      name: formValues.name,
      state: formValues.state,
      image: file,
    };
    const response = updateMinion(minion.id, updatedData);
    response.then((res) => {
      handleStatus(res);
    });
  }

  const [file, setFile] = useState<FileWithPath | null>(null);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (acceptedFiles.length > 0) {
      const fileWithPath = acceptedFiles[0];
      setFile(fileWithPath);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
    },
  });
  return (
    <>
      <Toaster />
      <TitleHead
        title="minion Info"
        metaTitle="minion info"
        metaDesc="minions"
      />
      <InnerHeader title="Edit minion" />
      <div className="grid gap-10 mt-12 grid-cols-12">
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name here"
            defaultValue={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={formValues.email}
            readOnly
          />
        </div>
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            value={formValues.phone}
            readOnly
          />
        </div>
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            State
          </label>
          <select
            name="state"
            id="state"
            defaultValue={
              stateOptions.find((s) => s.label == formValues.state)?.value
            }
            onChange={handleChange}
          >
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
          </select>
        </div>
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="Enter Age"
            defaultValue={formValues.age}
            onChange={handleChange}
          />
        </div>
        <div className="teetag__input col-span-12 sm:col-span-6 lg:col-span-4 mr-12">
          <label htmlFor="email" className="block mb-4 capitalize font-fugaz">
            Loss
          </label>
          <input
            type="text"
            name="loss"
            id="loss"
            placeholder="Enter Loss"
            defaultValue={formValues.loss}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p className="mt-10 mb-6 capitalize h8 font-fugaz text-green-light">
            Upload Image
          </p>
          <div {...getRootProps({ className: "teetag__dropzone " })}>
            <input {...getInputProps()} />
            {file ? (
              <p className="h8">{file.name}</p>
            ) : (
              <p className="h8 cursor-pointer">Drag & drop or upload</p>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-12 mt-12 grid-cols-12">
        <button
          type="submit"
          className="btn-teetag yellow text-center col-span-12 sm:col-span-6 lg:col-span-3"
          onClick={() => {
            updateData();
          }}
        >
          Save
        </button>
        <button
          type="submit"
          className="btn-teetag green text-center col-span-12 sm:col-span-6 lg:col-span-3"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Editminion;

Editminion.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const minions: any = await getAllMinions();
  const paths = minions?.result.minions.map((category) => {
    return {
      params: {
        minionId: `${category.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { minionId } = context.params as IParams;
  console.log(minionId);
  try {
    const minion = await getMinionInfo(minionId);
    return {
      props: {
        minion: minion.data.result.minion,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface CreateModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StepContainerProps {
  step: number;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

type CategoryItem = {
  text: string;
  value: string;
};

type Data = {
  region: string;
  categories: CategoryItem[];
  title: string;
  desc: string;
  date: number;
  bounty: number;
};

export const CreateModal: React.FC<CreateModalProps> = ({ open, setOpen }) => {
  if (!open) return null;

  const [step, setStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  let [data, setData] = useState<Data>({
    region: "us",
    categories: [],
    title: "",
    desc: "",
    date: Date.now(),
    bounty: 0,
  });

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-screen h-screen bg-overlay flex items-center justify-center`}
    >
      <div
        className={`bg-secondary flex-grow h-full max-w-lg max-h-128 rounded-3xl flex flex-col p-5`}
      >
        <div className={`flex-col leading-3`}>
          <h1 className={`font-bold text-xl mb-0`}>Create Proposal</h1>
          <span className={`text-gray-400 text-sm mt-0 font-mono`}>
            Step {step + 1}
          </span>
        </div>
        <div className={`mt-4 w-full h-full flex flex-col`}>
          <StepContainer step={step} data={data} setData={setData} />
          <div className="flex-grow"></div>
          <div className="flex">
            <div className="flex-grow"></div>
            {!isProcessing && (
              <button
                className="bg-red-500 py-2 px-4 rounded-full mr-2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </button>
            )}

            {step > 0 && !isProcessing && (
              <button
                className="bg-yellow-500 py-2 px-4 rounded-full mr-2"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}
            <button
              className="bg-blue py-2 px-4 rounded-full flex items-center"
              onClick={async () => {
                if (step < 2) return setStep(step + 1);
                setIsProcessing(true);
                // TODO: send api request
                await new Promise((r) => setTimeout(r, 5000));
                setIsProcessing(false);
                setOpen(false);
              }}
            >
              {!isProcessing ? (
                step < 2 ? (
                  "Next"
                ) : (
                  "Submit"
                )
              ) : (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepContainer: React.FC<StepContainerProps> = ({
  step,
  data,
  setData,
}) => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryItem[]>(data.categories);
  const [availableCategories, setAvailableCategories] = useState<
    CategoryItem[]
  >([
    { text: "Science", value: "science" },
    { text: "Maths", value: "maths" },
    { text: "English", value: "english" },
  ]);

  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    setData((data: Data) => {
      return { ...data, categories: categories.map((e) => e) };
    });

    setAvailableCategories((i) => i.filter((e) => !categories.includes(e)));
    console.log(data);
  }, [categories]);

  switch (step) {
    case 0:
      return (
        <>
          <span className={`text-gray-200 font-medium`}>
            Please select your region:
          </span>
          <select
            className="bg-gray-700 py-2 px-4 rounded-md my-2 border-2 border-gray-600"
            defaultValue={data.region}
            onChange={(e) => {
              setData((data: Data) => {
                return { ...data, region: e.target.value };
              });
            }}
          >
            <option value="us">United States</option>
            <option value="in">India</option>
            <option value="uk">United Kingdom</option>
          </select>
        </>
      );

    case 1:
      return (
        <>
          <span className={`text-gray-200 font-medium`}>
            Please enter the information for your proposal:
          </span>
          <input
            className="bg-gray-700 py-2 px-4 rounded-md my-2 border-2 border-gray-600"
            placeholder="Proposal Title"
            onChange={(e) => {
              setData((data: Data) => {
                return { ...data, title: e.target.value };
              });
              console.log(data);
            }}
            defaultValue={data.title}
          ></input>
          <textarea
            className="bg-gray-700 py-2 px-4 rounded-md my-2 border-2 border-gray-600 h-24 min-h-24 max-h-32"
            placeholder="Proposal Description"
            onChange={(e) => {
              setData((data: Data) => {
                return { ...data, desc: e.target.value };
              });
              console.log(data);
            }}
          ></textarea>
          <div
            className={`bg-gray-700 py-2 ${
              categories.length ? "px-2 text-white" : "px-4 text-gray-500"
            } rounded-md my-2 border-2 border-gray-600 flex items-center `}
          >
            {!categories.length
              ? "Categories"
              : categories.map((e) => (
                  <div
                    key={e.value}
                    onClick={() => {
                      setCategories((arr) =>
                        arr.filter((i) => i.value !== e.value)
                      );
                      console.log(availableCategories);
                      setCategoryDropdownOpen(false);
                    }}
                    className="inline-block bg-green-500 hover:bg-red-500 rounded-md mx-0.5 py-1 mb-0.5 px-2"
                  >
                    {e.text}
                  </div>
                ))}
            <div className="flex-grow"></div>
            <div onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}>
              {availableCategories.length ? (
                categoryDropdownOpen ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )
              ) : null}
            </div>
          </div>
          {categoryDropdownOpen && availableCategories.length > 0 && (
            <div className="bg-overlay py-2 px-2 rounded-md mt-1 overflow-auto max-h-24">
              {availableCategories.map((e) => {
                if (categories.includes(e)) return null;
                return (
                  <div
                    className="bg-gray-600 rounded-md px-4 py-2 m-1 inline-block"
                    onClick={() => {
                      setCategories((arr) => [...arr, e]);
                      setAvailableCategories((arr) =>
                        arr.filter((i) => i !== e)
                      );
                    }}
                    key={e.value}
                  >
                    {e.text}
                  </div>
                );
              })}
            </div>
          )}
        </>
      );

    case 2:
      return (
        <>
          <span className={`text-gray-200 font-medium`}>
            Please select a payment option for your proposal:{" "}
          </span>
          <fieldset>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="free"
                  name="pay"
                  onChange={(e) => setIsPaid(e.currentTarget.checked && false)}
                  className="focus:outline-none h-4 w-4 text-blue border-gray-300"
                  checked={!isPaid}
                />
                <label
                  htmlFor="free"
                  className="ml-3 block text-sm font-medium text-gray-200"
                >
                  Free
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paid"
                  name="pay"
                  onChange={(e) => setIsPaid(e.currentTarget.checked && true)}
                  className="focus:outline-none h-4 w-4 text-blue border-gray-300"
                  checked={isPaid}
                />
                <label
                  htmlFor="paid"
                  className="ml-3 block text-sm font-medium text-gray-200"
                >
                  Custom Amount
                </label>
              </div>
            </div>
          </fieldset>
          {isPaid && (
            <div className="mt-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-100"
              >
                Bounty
              </label>
              <div className="mt-1 relative rounded-md shadow-sm bg-gray-700">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    {data.region == "us"
                      ? "$"
                      : data.region == "uk"
                      ? "£"
                      : "₹"}
                  </span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full pl-7 pr-12 sm:text-sm border-2 border-gray-600 rounded-md bg-gray-700"
                  placeholder="0.00"
                  onChange={(e) =>
                    setData((data: Data) => {
                      return { ...data, bounty: e.target.value };
                    })
                  }
                />
              </div>
            </div>
          )}
        </>
      );
    default:
      return <div></div>;
  }
};

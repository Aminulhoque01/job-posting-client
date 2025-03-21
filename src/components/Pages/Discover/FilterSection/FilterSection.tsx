"use client";
import { Collapse, Checkbox, Input } from "antd";
import { HiOutlineXMark } from "react-icons/hi2";

interface IFilterSectionProps {
  addFilter: boolean;
  setAddFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSection = ({ addFilter, setAddFilter }: IFilterSectionProps) => {
  const collapseItems = [
    {
      key: "1",
      label: <h1 className="text-lg text-gray-600">Gender</h1>,
      children: (
        <div className="flex flex-col gap-3">
          <Checkbox>Male</Checkbox>
          <Checkbox>Female</Checkbox>
          <Checkbox>Other</Checkbox>
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 className="text-lg text-gray-600">Age Group</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["18 - 23", "24 - 34", "35 - 44", "45 - 54", "55 - Above"].map(
            (age) => (
              <Checkbox key={age}>{age}</Checkbox>
            )
          )}
        </div>
      ),
    },
    {
      key: "3",
      label: <h1 className="text-lg text-gray-600">Continent</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "Asia",
            "Africa",
            "Europe",
            "North America",
            "South America",
            "Australia",
            "Antarctica",
          ].map((continent) => (
            <Checkbox key={continent}>{continent}</Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: <h1 className="text-lg text-gray-600">Country</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "United States",
            "India",
            "China",
            "Brazil",
            "Australia",
            "South Africa",
            "Canada",
          ].map((country) => (
            <Checkbox key={country}>{country}</Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "5",
      label: <h1 className="text-lg text-gray-600">State/Province</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "California",
            "New York",
            "Ontario",
            "Queensland",
            "Maharashtra",
            "Gauteng",
          ].map((state) => (
            <Checkbox key={state}>{state}</Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "6",
      label: <h1 className="text-lg text-gray-600">City/Town</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "Los Angeles",
            "Mumbai",
            "Toronto",
            "Sydney",
            "Cape Town",
            "Beijing",
          ].map((city) => (
            <Checkbox key={city}>{city}</Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "7",
      label: <h1 className="text-lg text-gray-600">Distance Within</h1>,
      children: (
        <div className="space-y-2">
          <Input
            type="number"
            min="1"
            max="500"
            defaultValue="1"
            addonAfter="kms"
          />
        </div>
      ),
    },
    {
      key: "8",
      label: <h1 className="text-lg text-gray-600">Ethnicity</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Asian", "Caucasian", "African", "Hispanic", "Other"].map(
            (ethnicity) => (
              <Checkbox key={ethnicity}>{ethnicity}</Checkbox>
            )
          )}
        </div>
      ),
    },
    {
      key: "9",
      label: <h1 className="text-lg text-gray-600">Denomination</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Christian", "Muslim", "Hindu", "Jewish", "Buddhist", "Other"].map(
            (denomination) => (
              <Checkbox key={denomination}>{denomination}</Checkbox>
            )
          )}
        </div>
      ),
    },
  ];

  return (
    <section
      className={`w-full col-span-full md:col-span-3 ${
        addFilter ? "block" : "hidden"
      }`}
    >
      <div className="shadow-md rounded-lg bg-white">
        <div className="w-full p-5">
          {/* x mark */}
          <div className="flex justify-end">
            <button onClick={() => setAddFilter(false)}>
              <HiOutlineXMark className="size-6 text-gray-500" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-lg text-gray-600">Advance Filters</h1>
            <h1 className="text-primary font-semibold">Reset All</h1>
          </div>
        </div>
        <Collapse
          defaultActiveKey={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          expandIconPosition="start"
          ghost
          items={collapseItems}
          className="pb-10"
        />
      </div>
    </section>
  );
};

export default FilterSection;

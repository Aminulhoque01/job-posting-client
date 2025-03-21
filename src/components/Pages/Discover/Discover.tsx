"use client";
import { useState } from "react";
import DiscoverContent from "./DiscoverContent/DiscoverContent";
import FilterSection from "./FilterSection/FilterSection";
const Discover = () => {
  const [addFilter, setAddFilter] = useState<boolean>(false);
  return (
    <section className="w-full px-5  py-36 bg-[#F5F9FF] ">
      <div className="w-full md:container grid grid-cols-1 md:grid-cols-12 gap-10">
        <FilterSection  addFilter={addFilter} setAddFilter={setAddFilter} />
        <DiscoverContent addFilter={addFilter} setAddFilter={setAddFilter} />
      </div>
    </section>
  );
};

export default Discover;

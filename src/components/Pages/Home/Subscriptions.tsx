


export default function Subscribe() {
  return (
    <div className="md:px-8">
      {/* Wrapper container with relative positioning to position the circles inside */}
      <div className="w-full md:container bg-[#063B9D] h-full md:h-[160px]  md:px-6 py-5 mx-auto rounded-lg relative">
       
        {/* Content Section */}
        <div className="md:flex-row w-full max-w-md md:max-w-full  px-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Subscribe to get the  latest jobs
          </h2>
          <form className="flex flex-col md:flex-row w-full max-w-md md:max-w-full">
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="lg:flex-1 p-3 rounded-l-md text-gray-800"
            />
            <button className="bg-[#0741AD] hover:bg-blue-500 text-white px-6 py-3 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}





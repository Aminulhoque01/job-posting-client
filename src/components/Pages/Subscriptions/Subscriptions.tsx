import React from "react";

const Subscriptions = () => {
  const pricingPlans = [
    {
      title: "Free Trial",
      price: "£0",
      duration: "User/1 Day",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      buttonText: "Upgrade Now",
    },
    {
      title: "VIP",
      price: "£153",
      duration: "User/12 Month",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      buttonText: "Upgrade Now",
    },
    {
      title: "Standard",
      price: "£55",
      duration: "User/12 Month",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      buttonText: "Upgrade Now",
    },
  ];
  return (
    <section className="w-full px-5  py-36 bg-[#F5F9FF] ">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 ">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-5 text-center shadow-lg  odd:bg-[#E6EDFA] even:bg-[#C2D3F4] ${
              index === 1 && " mt-0 md:-mt-16"
            }`}
          >
            <h2 className="text-xl  mb-2">{plan.title}</h2>
            <p className="text-2xl md:text-4xl font-bold mb-2">{plan.price}</p>
            <p className="even:text-primary mb-4">{plan.duration}</p>
            <ul className="text-gray-600 mb-6 flex flex-col gap-2">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="size-[22px] border-2 border-primary rounded-full flex items-center justify-center p-1 ">
                    <span className="text-primary">✔</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;

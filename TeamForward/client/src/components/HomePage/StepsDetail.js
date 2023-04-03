const StepsDetail = (props) => {
    const {title, description, icon} = props;

  return (
    <div className="mb-12 lg:mb-0">
      <div className="rounded-lg shadow-lg h-full block bg-white">
        <div className="flex justify-center">
          <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
            <svg
              clasName="h-10 w-10 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              {icon}
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-semibold mb-4">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsDetail;

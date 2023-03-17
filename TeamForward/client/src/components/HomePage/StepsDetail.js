const StepsDetail = (props) => {
    const {title, description, icon} = props;

  return (
    <div class="mb-12 lg:mb-0">
      <div class="rounded-lg shadow-lg h-full block bg-white">
        <div class="flex justify-center">
          <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
            <svg
              class="h-10 w-10 text-white"
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
        <div class="p-6">
          <h5 class="text-lg font-semibold mb-4">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsDetail;

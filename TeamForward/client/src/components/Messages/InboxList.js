const InboxList = () => {
  return (
    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center">
        <img
          className="rounded-full items-start flex-shrink-0 mr-3"
          src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
          width="32"
          height="32"
          alt="Nhu Cassel"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
          <div className="text-[13px]">Hello Lauren 👋, · 24 Mar</div>
        </div>
      </div>
    </button>
  );
};
export default InboxList;

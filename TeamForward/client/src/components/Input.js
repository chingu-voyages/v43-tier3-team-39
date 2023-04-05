import React from 'react';

const defaultClass = "peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

const Input = ({ type, name, title, onChange, id, placeholder }) => {
    return <div className="w-full">
        <label
            htmlFor="{id}"
            className="block mb-2 text-sm font-medium text-gray-900"
        >{title}
        </label>
        <input
            type={type}
            name={name}
            id={id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            onChange={onChange}
            placeholder={placeholder}
            required=""
        />
    </div>

    // <input
    //     type={type}
    //     name={name}
    //     onChange={onChange}
    //     className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    //     id={id}
    //     placeholder={placeholder}
    // />;
}

export default Input;

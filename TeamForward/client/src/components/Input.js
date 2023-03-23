import React from 'react';

const defaultClass = "peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

const Input = ({ type, name, onChange, id, placeholder }) => {
    return <input
        type={type}
        name={password}
        onChange={onChange}
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={id}
        placeholder={placeholder}
    />;
}

export const BlueInput = ({}) => {
    return <input
    type={type}
    name={password}
    onChange={onChange}
    class={`${defaultClass} blue`}
    id={id}
    placeholder={placeholder}
/>;
}

export default Input;

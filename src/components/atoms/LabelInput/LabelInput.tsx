import * as React from 'react';

type LabelInputProps = {
    label: string;
    id?: string;
    name?: string;
    type?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelInput = (props:LabelInputProps) => {
    return (
        <div className='flex flex-col gap-4'>
            <label
              htmlFor={props.id}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                {props.label}
            </label>
            <div className="mt-2">
              <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>
    );
};
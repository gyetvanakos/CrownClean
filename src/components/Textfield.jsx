import React  from "react";

export default function TextField({ value, label, type, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="flex item-center text-white">
        {label}
      </label>
      <input
        className="bg-[#505050] border border-black-600 rounded-lg relative p-2"
        type={type}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    </div>
  );
}
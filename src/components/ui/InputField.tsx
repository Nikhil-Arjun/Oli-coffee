"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  prefix?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  prefix,
  value,
  onChange,
  error,
}: InputFieldProps) {
  const baseClasses =
    "w-full rounded-xl border bg-white text-sm text-[#1E1E1E] placeholder:text-[#B5ADA4] transition-all focus:outline-none focus:ring-2 focus:ring-[#A6452F] focus:border-transparent";
  const borderClass = error ? "border-red-400" : "border-[#E4DACB]";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
        {label}
        {required && <span className="text-[#A6452F] ml-0.5">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${baseClasses} ${borderClass} px-4 py-3 resize-none`}
        />
      ) : (
        <div className="relative">
          {prefix && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9A9188] font-medium select-none">
              {prefix}
            </span>
          )}
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseClasses} ${borderClass} ${prefix ? "pl-12" : "pl-4"} pr-4 py-3 h-[52px]`}
          />
        </div>
      )}

      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

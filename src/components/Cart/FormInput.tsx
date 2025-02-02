import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export const FormInput = ({ label, type = 'text', placeholder, required }: FormInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#ffce79] mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50 focus:border-transparent 
          transition-all duration-300 text-white placeholder-white/40"
      />
    </div>
  );
};
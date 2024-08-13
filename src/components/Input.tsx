type inputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-gray-600 placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default Input;
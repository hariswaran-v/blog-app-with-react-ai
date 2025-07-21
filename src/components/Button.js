const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

// components/ModernButton.js
export default function ModernButton({ children, ...props }) {
  return (
    <button className="primaryBtn" {...props}>
      {children}
    </button>
  );
}

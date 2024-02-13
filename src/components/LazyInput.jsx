import { useEffect, useState } from "react";

export function LazyInput({ value, onChange, ...props }) {
  const [innerValue, setInnerValue] = useState(value);

  function handleChange() {
    onChange(innerValue);
  }

  function handlePress(key) {
    if (key === "Enter") {
      onChange(innerValue);
    }
  }

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  return (
    <>
      <input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        onBlur={handleChange}
        onKeyDown={(e) => handlePress(e.key)}
        {...props}
      />
      

    </>
  );
}

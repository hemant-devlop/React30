import React from "react";
const useDebounce = (value,delay) => {
  const [debounceVal, setDebounceVal] = React.useState(value)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(value)
    }, delay);

    return () => {
      clearTimeout(timer)
    }
  }, [value,delay])
  return debounceVal
}

export default useDebounce

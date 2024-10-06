export const useLocalStorage = () => {
  const getItem = (key) => localStorage.getItem(key)
  const setItem = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value))
  return { getItem, setItem }
}

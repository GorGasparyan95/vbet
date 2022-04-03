export default function useLocalStorage() {
  const put = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const get = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
  const clear = (key) => {
    localStorage.removeItem(key)
  }

  const getLng = (key) => {
    return localStorage.getItem(key)
  }

  return {
    put,
    get,
    clear,
    getLng
  }
}

export function setStorage(key: string, value: any): void {
  const jsonVal = JSON.stringify({value: value});
  localStorage.setItem(key, jsonVal);
};

export function getStorage(key: string): any {
  let jsonVal = <string>localStorage.getItem(key);
  switch (jsonVal) {
    case null:
      return null;
    default:
      const jsonObj = JSON.parse(jsonVal);
      return jsonObj.value;
  }
};


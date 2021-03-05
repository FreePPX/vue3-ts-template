function setStorage(key: string, value: any) {
  const jsonVal = JSON.stringify({value: value});
  localStorage.setItem(key, jsonVal);
};

function getStorage(key: string): any {
  let jsonVal = <string>localStorage.getItem(key);
  switch (jsonVal) {
    case null:
      return null;
    default:
      const jsonObj = JSON.parse(jsonVal);
      return jsonObj.value;
  }
};

window.setStorage = setStorage;
window.getStorage = getStorage;
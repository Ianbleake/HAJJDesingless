
export function replacePropertyValue(obj, mapping, targetKey ) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        replacePropertyValue(obj[key], mapping, targetKey);
      }
      if (key === targetKey && mapping[obj[key]]) {
        obj[key] = mapping[obj[key]];
      }
    }
  }
}

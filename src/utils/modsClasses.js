const modsClasses = (styles, mods) => (
  Object.keys(mods).map(key => styles[`${key}-${mods[key]}`])
);

export default modsClasses;

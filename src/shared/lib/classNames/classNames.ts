type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: []) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([classNames, value]) => value),
  ].join(" ");
};

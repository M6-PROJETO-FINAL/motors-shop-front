import { FieldValues } from "react-hook-form";

export const checkInfos = (obj: FieldValues, userObj: any) => {
  const newData = {} as FieldValues;

  for (const key in obj) {
    if (obj[key] !== userObj[key]) {
      newData[key] = obj[key];
    }
  }
  return newData;
};

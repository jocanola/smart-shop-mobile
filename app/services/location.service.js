import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    if (!mocks) {
      reject("not found");
    }
    resolve(mocks[location]);
  });
};

restaurantsRequest().then((result) => {
  console.log(camelize(result));
});

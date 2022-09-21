export const importFolder = (r: any) => {
  let images: any = {};
  r.keys().forEach((item: string, index: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};
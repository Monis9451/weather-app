export const preLoadImages = (imageNames) => {
    imageNames.forEach(name => {
      const img = new Image();
      img.src = `/${name}.jpg`;
    });
  };
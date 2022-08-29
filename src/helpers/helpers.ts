export const getLocation = (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve([lat, lon]);
      },
      (err) => {
        reject(err.message);
      }
    );
  });
};

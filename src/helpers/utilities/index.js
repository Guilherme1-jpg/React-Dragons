export const filterDragon = (dragon) => {
  let dragons = dragon.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return dragons;
};

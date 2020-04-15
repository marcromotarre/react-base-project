export const getUsersByName = (users, name) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getUsersByProfession = (users, profession) => {
  return users.filter((user) => user.professions.includes(profession));
};

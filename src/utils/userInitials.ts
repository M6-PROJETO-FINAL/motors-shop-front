export const userInitials = (userName: string) => {
  const nameArr = userName.split(" ");

  const initials = `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`;

  return initials;
};

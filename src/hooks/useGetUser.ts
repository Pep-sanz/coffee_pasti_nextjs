import { getDataById } from "@/lib/firebase/firebase.service";

export const useGetUser = async (id: string) => {
  const user = await getDataById("users", id);

  console.log(user);

  return {
    fullName: user?.fullName,
    email: user?.email,
    role: user?.role,
  };
};

import { setUserProfile } from "@/redux/authSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetUserProfile = (userId) => {
  const dispatch = useDispatch();
  //   const [ userProfile,setUserProfile] = useState(null)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `https://insta-clone-vjfh.onrender.com/api/v1/user/${userId}/profile`,
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          dispatch(setUserProfile(response.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, [userId]);
};
export default useGetUserProfile;

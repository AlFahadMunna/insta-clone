import { setSuggestedUsers } from "@/redux/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetSuggestedUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      try {
        const response = await axios.get(
          "https://insta-clone-vjfh.onrender.com/api/v1/user/suggested",
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          dispatch(setSuggestedUsers(response.data.users));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSuggestedUsers();
  }, []);
};
export default useGetSuggestedUsers;

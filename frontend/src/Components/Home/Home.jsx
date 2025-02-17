import React, {useEffect } from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../Actions/User";
import Loader from "../Loader/Loader";
import { Typography } from "@mui/material";
// import { useAlert } from "react-alert";

const Home = () => {
  const dispatch = useDispatch();
    

//   const alert = useAlert();

  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

//   const { users, loading: usersLoading } = useSelector(
//     (state) => state.allUsers
//   );

//   const { error: likeError, message } = useSelector((state) => state.like);

  useEffect(() => {
    dispatch(getFollowingPosts());
//     dispatch(getAllUsers());
  }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch({ type: "clearErrors" });
//     }

//     if (likeError) {
//       alert.error(likeError);
//       dispatch({ type: "clearErrors" });
//     }
//     if (message) {
//       alert.success(message);
//       dispatch({ type: "clearMessage" });
//     }
//   }, [alert, error, message, likeError, dispatch]);

//   return loading === true || usersLoading === true ? (
//     <Loader />
//   ) :
 
 return (
   loading ?<Loader/> :(
    <div className="home">
    <div className="homeleft">
      {posts && posts.lenght > 0 ? (
        posts.map((post)=>(
      <Post 
       key={post._id}
      postImage ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxoyQI6_NadGWQSKcFXq8NgWhcms96p0SKw&s"
        ownerName= {"Amit"}
        caption= {" this is first post"}
        postId={post._id}
        caption={post.caption}
        postImage={post.image.url}
        />
        ))
      ): (
        <Typography variant="h6"> No post yet</Typography>
      )}
     
    </div>
    <div className="homeright">
   <User
         userId ={User._id}
         name ={"Amit"}
         avatar ={"https://www.carwale.com/mahindra-cars/xuv-3xo/images/xuvxo-right-front-three-quarter-590855/"}
         />

    </div>

  </div>
   )
  );
};

export default Home;
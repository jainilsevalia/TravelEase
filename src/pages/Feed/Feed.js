import React from "react";
import { LiveUpdateImage } from "../../components";
import { RecentExpense } from "../../components";
import { Button } from "../../components";
import { Post } from "../../layouts";
import "./feed.css";
import Path from "../../constants/Path";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Feed = () => {
  const post = useSelector((state) => state.post);
  const recentTrip = useSelector((store) => store.tripDetails);

  return (
    <div className="feed_container">
      <div className="live_update_div_in_home">
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/1.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">Shanikachhadiya</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/2.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">jay ramani</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/3.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">Jainil Sevalia</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/4.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">Shvet Anaghan</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/5.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">Shivam Patel</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/6.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/7.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/8.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/9.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/10.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
        <div className="live_update_and_user_name">
          <div className="live_update_in_feed">
            <LiveUpdateImage live_update_url="./Images/11.jpg"></LiveUpdateImage>
          </div>
          <span className="userName_in_live_update">UserName</span>
        </div>
      </div>
      <div className="feed_container-post_div">
        {post.postData.map((post) => (
          <Post
            // post={post}
            type="feed_post"
            userName={post.userName}
            location={post.location}
            image={post.image}
            description={post.description}
          />
        ))}
      </div>
      <div className="feed_container-latest_trip_div">
        <div className="feed_container-latest_trip_div-heading">
          Recent trips
        </div>
        {recentTrip.map((trip) => (
          <RecentExpense
            className="recent_expense_in_feed"
            tripName={trip.tripName}
            tripTime={trip.tripDate}
            tripExpense={trip.totalExpense}
          ></RecentExpense>
        ))}

        <div className="feed_container-latest_trip_div-button">
          <Link to={Path.MANAGE_EXPENSES}>
            <Button variant="blue" name="SEE ALL EXPENSES" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;

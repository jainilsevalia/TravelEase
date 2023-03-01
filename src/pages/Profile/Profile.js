import React, { useState } from 'react';
import { ProfilePic } from '../../components';
import { LiveUpdate } from '../../layouts';
import { Post } from '../../layouts';
import { useSelector } from 'react-redux';
import { Button } from '../../components';
import EditProfilePopup from '../../components/PopUp/EditProfilePopup';

import './Profile.css';

const Profile = () => {
	const post = useSelector((state) => state.post);
	const [popup, setPopup] = useState(false);
	const popupFunction = () => {
		setPopup(true);
		console.log(popup);
	};

	return (
		<div className="profile_page_div">
			<div className="profile_container">
				<div className="profile_pic_and_userName">
					<div className="profile_pic_in_profile_page">
						<ProfilePic
							size="large"
							image_url="/Images/shani.jpg"
						/>
					</div>
					{/* <div className="userName_in_profile_page_and_edit_btn"> */}
					<div className="userName_in_profile_page">
						<h1 className="userName">Shani Kachhadiya</h1>
						<div className="location_img_and_location">
							<img
								className="location_image"
								src="./Images/location.jpg"
								alt="location"
							/>
							<span className="location">Halifax, NS</span>
						</div>
						<div className="instagram_img_and_userName">
							<img
								className="instagram_image"
								src="./Images/instagram.png"
								alt="instagram"
							/>
							<span className="insta_userName">shani.kachhadiya</span>
						</div>
						<div className="bio">
							<span className="bio_text">
								Leaving a bit of sparkle everywhere I go ✨
							</span>
						</div>
					</div>
					<div className="profile_edit_button_in_profile_page">
						<Button
							type="submit"
							onClick={popupFunction}
							variant="transparent"
							name="Edit Profile"
						/>
						<EditProfilePopup
							trigger={popup}
							setTrigger={setPopup}
						></EditProfilePopup>
					</div>
					{/* </div> */}
				</div>
				<div className="live_updates_div">
					<LiveUpdate type="horizontal"></LiveUpdate>
				</div>

				<div className="user_posts_div">
					{post.postData.map((post) => {
						// console.log(post);
						return (
							// <div
							// 	className="user_posts_div"
							// 	// onClick={() => handlePostClick(post.postId)}
							// >
							<Post
								type="user_post"
								postId={post.postId}
								userName={post.userName}
								location={post.location}
								image={post.image}
								description={post.description}
							/>
						);
					})}
				</div>

				{/* <Post
						type="user_post"
						userName="Shani kachhadiya"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
						postUrl="/Images/s4.jpeg"
					></Post>
					<Post
						type="user_post"
						userName="Shani kachhadiya"
						description="orem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
						postUrl="/Images/s1.jpeg"
					></Post>
					<Post
						type="user_post"
						userName="Shani kachhadiya"
						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int"
						postUrl="/Images/s5.jpeg"
					></Post>
					<Post
						type="user_post"
						userName="Shani kachhadiya"
						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book"
						postUrl="/Images/s1.jpeg"
					></Post>
					<Post
						type="user_post"
						userName="Shani kachhadiya"
						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book"
						postUrl="/Images/s3.jpeg"
					></Post> */}
				{/* <Post
						type="feed_post"
						userName="Shani kachhadiya"
						description="askdjfbskjhd Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
						postUrl="/Images/instagram.png"
					></Post> */}
			</div>
		</div>
		// </div>
	);
};

export default Profile;

// import React from "react";
// import { ProfilePic } from "../../components";
// import { LiveUpdate } from "../../layouts";
// import { Post } from "../../layouts";

// import "./Profile.css";

// const Profile = () => {
// 	return (
// 		<div className="profile_page_div">
// 			<div className="profile_container">
// 				<div className="profile_pic_and_userName">
// 					<div className="profile_pic_in_profile_page">
// 						<ProfilePic
// 							size="large"
// 							image_url="/Images/shani.jpg"
// 						/>
// 					</div>
// 					<div className="userName_in_profile_page">
// 						<h1 className="userName">Shani Kachhadiya</h1>
// 						<div className="location_img_and_location">
// 							<img
// 								className="location_image"
// 								src="./Images/location.jpg"
// 								alt="location"
// 							/>
// 							<h6 className="location">Halifax, NS</h6>
// 						</div>
// 						<div className="instagram_img_and_userName">
// 							<img
// 								className="instagram_image"
// 								src="./Images/instagram.png"
// 								alt="instagram"
// 							/>
// 							<h6 className="insta_userName">shani.kachhadiya</h6>
// 						</div>
// 						<div className="bio">
// 							<h6 className="bio_text">This is bio section.</h6>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="live_updates_div">
// 					<LiveUpdate type="horizontal"></LiveUpdate>
// 					{/* <h6>Halifax</h6> */}
// 				</div>
// 				<div className="user_posts_div">
// 					<Post
// 						type="user_post"
// 						userName="Shani kachhadiya"
// 						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
// 						postUrl="/Images/s4.jpeg"
// 					></Post>
// 					<Post
// 						type="user_post"
// 						userName="Shani kachhadiya"
// 						description="orem Ipsum has been the industry's standard dummy text ever si Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
// 						postUrl="/Images/s1.jpeg"
// 					></Post>
// 					<Post
// 						type="user_post"
// 						userName="Shani kachhadiya"
// 						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int"
// 						postUrl="/Images/s5.jpeg"
// 					></Post>
// 					<Post
// 						type="user_post"
// 						userName="Shani kachhadiya"
// 						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book"
// 						postUrl="/Images/s1.jpeg"
// 					></Post>
// 					<Post
// 						type="user_post"
// 						userName="Shani kachhadiya"
// 						description="hen an unknown printer took a galley of type and scrambled it to make a type specimen book"
// 						postUrl="/Images/s3.jpeg"
// 					></Post>
// 					{/* <Post
// 						type="feed_post"
// 						userName="Shani kachhadiya"
// 						description="askdjfbskjhd Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
// 						postUrl="/Images/instagram.png"
// 					></Post> */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Profile;

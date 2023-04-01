//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

import React, { useState, useEffect } from 'react';
import { ProfilePic } from '../../components';
import { LiveUpdateImage } from '../../components';
import { Post } from '../../layouts';
import { IconComponent } from '../../components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../redux/postReducer';
import { createLiveUpdate } from '../../redux/liveUpdate.reducer';

import { Button } from '../../components';
import EditProfilePopup from '../../components/PopUp/EditProfilePopup';

import './Profile.css';

const Profile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get(`https://trip-ease-server.onrender.com/post/view/${123}`)
			// .get(`https://trip-ease-server.onrender.com/post/view/${props.userId}`)
			.then(function (response) {
				dispatch(createPost(response.data));
			});
		axios
			.get(`https://trip-ease-server.onrender.com/liveupdate/view/${123}`)
			// .get(`https://trip-ease-server.onrender.com/liveupdate/view/${props.userId}`)
			.then(function (response) {
				dispatch(createLiveUpdate(response.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	const post = useSelector((state) => state.post);
	const liveUpdates = useSelector((state) => state.liveUpdate);
	const [popup, setPopup] = useState(false);
	const popupFunction = () => {
		setPopup(true);
	};

	const settingButtonClick = () => {
		toast.success('Settings!!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	return (
		<div className="profile_page_div">
			<div className="profile_container">
				<div className="profile_pic_and_userName">
					<div className="profile_pic_in_profile_page">
						<ProfilePic
							size="large"
							image_url="/Images/shani.jpg"
							// image_url={props.userProfileImage}
						/>
					</div>
					<div className="userName_in_profile_page">
						<h1 className="userName">Shani Kachhadiya</h1>
						{/* <h1 className="userName">{props.UserName}</h1> */}
						<div className="location_img_and_location">
							<img
								className="location_image"
								src="./Images/location.jpg"
								alt="location"
							/>
							<span className="location">Halifax, CA</span>
							{/* <span className="location">{props.location}</span> */}
						</div>
						<div className="instagram_img_and_userName">
							<img
								className="instagram_image"
								src="./Images/instagram.png"
								alt="instagram"
							/>
							<span className="insta_userName">shani.kachhadiya</span>
							{/* <span className="insta_userName">{props.socialMedia}</span> */}
						</div>
						<div className="bio">
							<span className="bio_text">
								Leaving a bit of sparkle everywhere I go ✨
							</span>
						</div>
					</div>
					<div className="profile_edit_button_in_profile_page">
						<div className="edit_profile_and_setting_btn_div">
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
							<IconComponent
								className="setting_img_in_profile"
								name="setting"
								onClick={settingButtonClick}
							/>
						</div>
					</div>
				</div>
				<div className="live_updates_div">
					{liveUpdates.liveUpdatesData.map((liveUpdates) => {
						return (
							<LiveUpdateImage
								type="horizontal"
								live_update_url={liveUpdates.image}
							/>
						);
					})}
				</div>

				<div className="user_posts_div">
					{post.postData.map((post) => {
						return (
							<Post
								type="user_post"
								postId={post._id}
								userId={post.userId}
								userName={post.userName}
								location={post.location}
								image={post.image}
								description={post.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;

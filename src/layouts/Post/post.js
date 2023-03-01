import React from 'react';
import './post.css';
import { IconComponent } from '../../components';
import { ProfilePic } from '../../components';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../redux/postReducer';
import { useState } from 'react';

const Post = (props) => {
	// const post = useSelector((state) => state.post);
	const dispatch = useDispatch();

	function myFunction() {
		return function () {
			console.log(props.postId);
			dispatch(deletePost({ postId: props.postId }));
			alert('Post deleted successfully!!');
		};
	}

	const [model, setModel] = useState(false);

	const toggleModel = () => {
		setModel(!model);
	};

	return (
		<>
			{props.type === 'user_post' ? (
				<div className="post">
					<div className="user_header">
						<h6 className="location_in_post">{props.location}</h6>
					</div>
					<div className="post_img_div">
						<img
							onClick={toggleModel}
							className="post_image"
							src={props.image}
							alt="Post"
						/>
					</div>

					<div className="post_description_user">
						<div className="user_name_and_description">
							<span className="description"> {props.description}</span>
						</div>
						<div className="btn_div">
							<div
								className="edit_img_div"
								onClick={() =>
									alert('Here you will be able to edit you posts.')
								}
							>
								<IconComponent
									className="edit_img"
									name="edit"
								/>
							</div>
							<div
								className="delete_img_div"
								onClick={myFunction()}
							>
								<IconComponent
									className="delete_img"
									name="delete"
								/>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="post">
					<div className="user_header">
						<div className="profile_pic_in_post">
							<ProfilePic
								size="small"
								image_url="/Images/shani.jpg"
							/>
						</div>
						<div className="user_name_and_location_in_post">
							<h4 className="post_user_name">{props.userName}</h4>
							<h6 className="post_location">{props.location}</h6>
						</div>
					</div>
					<div className="post_img_div">
						<img
							onClick={toggleModel}
							className="post_image"
							src={props.image}
							alt="Post"
						/>
					</div>
					<div className="post_description">
						<div className="user_name_and_description">
							{/* <strong className="user_name_in_description">
								{props.userName}
							</strong> */}
							<span className="description"> {props.description}</span>
						</div>
						<div className="delete_and_update_btn"></div>
					</div>
				</div>
			)}
			{model && (
				<div className="model">
					<div
						onClick={toggleModel}
						className="overlay"
					></div>
					<span onClick={toggleModel}>&times;</span>
					<img
						src={props.image}
						alt="No profile pic available"
					></img>
				</div>
			)}
		</>
	);
};

export default Post;

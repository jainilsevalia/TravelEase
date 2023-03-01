import React, { useEffect, useState } from 'react';
import { InputField } from '../../../components';
import { Button } from '../../../components';
import TextArea from '../../../components/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../../redux/postReducer';

function CreatePost() {
	const postDataArray = useSelector((store) => store.post.postData);
	const postID = postDataArray.length + 1;
	const initialValues = {
		postId: postID,
		caption: '',
		location: '',
		description: '',
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [image, setImage] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const postData = useSelector((state) => state.post.postData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formValues);
		setFormErrors(validate(formValues));

		if (
			Object.keys(formErrors).length === 0 &&
			formValues.location !== '' &&
			image
		) {
			dispatch(createPost(formValues));
			console.log(postData);

			setIsSubmit(true);
		} else {
			setIsSubmit(false);
		}
	};

	useEffect(() => {
		if (isSubmit) {
			navigate('/');
		}
	}, [isSubmit, navigate]);

	const validate = (values) => {
		const errors = {};

		if (image === null) {
			errors.photo = 'Photo is required!';
		}

		if (values.location === '') {
			errors.location = 'location is required!';
		}
		return errors;
	};

	return (
		<>
			<div className="title">New Post</div>

			<form onSubmit={handleSubmit}>
				<div className="createpost-form">
					{/* <div className="title">Create Post</div> */}

					<div className="photo-select">
						{/* <div className="input-container ic2">          */}
						<InputField
							type="file"
							name="photo"
							id="photo"
							// value={formValues.photos}
							handleChange={onImageChange}
							label="Select a photo"
						/>
						<p className="errorPost">{formErrors.photo}</p>

						{image ? (
							<img
								className="post-image"
								src={image}
								id="target"
								alt="preview"
							/>
						) : null}

						{/* </div> */}
					</div>

					<div className="post-info">
						<div className="input-container ic2">
							<InputField
								type="text"
								name="location"
								value={formValues.location}
								handleChange={handleChange}
								label="Location"
							/>
						</div>
						<p className="errorPost">{formErrors.location}</p>

						<div className="input-container ic2">
							<InputField
								type="text"
								name="caption"
								value={formValues.caption}
								handleChange={handleChange}
								label="Caption"
							/>
						</div>
						<p className="errorPost">{formErrors.caption}</p>

						<div className="input-container ic2">
							<TextArea
								row={2}
								name="description"
								value={formValues.description}
								handleChange={handleChange}
								label="Travel Description"
							/>
						</div>
						<p className="errorPost">{formErrors.description}</p>

						<div className="feed_container-latest_trip_div-button">
							<Button
								type="submit"
								onSubmit={handleSubmit}
								variant="blue"
								name="POST"
							/>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default CreatePost;

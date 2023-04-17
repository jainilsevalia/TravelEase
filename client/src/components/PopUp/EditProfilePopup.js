import React, { useState } from 'react';
import { Button, InputField } from '..';
import '../PopUp/PopUp.styles.css';

const EditProfilePopup = (props) => {
	const initialValues = {
		name: '',
		username: '',
		email: '',
	};
	const [avatar, setAvatar] = useState('');
	const [formValues, setFormValues] = useState(initialValues);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const formData = () => {
		props.setTrigger(false);
	};
	return props.trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<div className="popup-button-close">
					<div className="">
						<span className="card-trip-title__popup">Edit Profile</span>
					</div>

					<Button
						className="close-btn"
						variant="transparent"
						name="Close"
						onClick={() => props.setTrigger(false)}
					/>
				</div>
				<div className="avatar-container">
					<label htmlFor="avatar-input">
						<img
							src={avatar || '/Images/shani.jpg'}
							alt="avatar"
						/>
					</label>
					<input
						id="avatar-input"
						type="file"
						accept="image/*"
						onChange={(event) =>
							setAvatar(URL.createObjectURL(event.target.files[0]))
						}
					/>
				</div>
				<div className="popup-input-list">
					<InputField
						label="Name"
						id="name"
						type="text"
						name="name"
						handleChange={handleChange}
					/>

					<InputField
						label="Username"
						id="username"
						type="text"
						name="username"
						handleChange={handleChange}
					/>
					<InputField
						label="email"
						id="email"
						type="email"
						name="email"
						handleChange={handleChange}
					/>
				</div>
				<div className="popup-save-button">
					<Button
						variant="blue"
						name="Save"
						onClick={formData}
					/>
				</div>
				{props.children}
			</div>
		</div>
	) : (
		''
	);
};

export default EditProfilePopup;

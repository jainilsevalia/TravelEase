import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
	name: 'postReducer',
	initialState: {
		postData: [
			{
				postId: 1,
				userName: 'jainil Sevalia',
				location: 'Halifax, NS',
				image: 'Images/1.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 2,
				userName: 'Shani Kachhadiya',
				location: 'Surat, GJ',
				image: 'Images/2.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 3,
				userName: 'Jay Ramani',
				location: 'Ottawa ,ON',
				image: 'Images/3.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 4,
				userName: 'Shivam Patel',
				location: 'Paris ,FR',
				image: 'Images/4.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 5,
				userName: 'Shvet Anaghan',
				location: 'London, UK',
				image: 'Images/5.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 6,
				userName: 'Dixit Ghodadara',
				location: 'Torronto, ON',
				image: 'Images/6.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 7,
				userName: 'Deep Dave',
				location: 'Tauro, NS',
				image: 'Images/7.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
			{
				postId: 8,
				userName: 'JB Tilala',
				location: ' Halifax, NS',
				image: 'Images/8.jpg',
				description:
					'jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka jahbsdkj as iuhakj agfkbak aisgfkg iuagdk iuagehfka.',
			},
		],
	},
	reducers: {
		createPost: (state, action) => {
			state.postData.push(action.payload);
			// state.postId = action.payload.postId;
			// state.userName = action.payload.userName;
			// state.location = action.payload.location;
			// state.image = action.payload.image;
			// state.description = action.payload.description;
		},
		deletePost: (state, action) => {
			state.postData = state.postData.filter(
				({ postId }) => postId !== action.payload.postId
			);
		},
	},
});

export const { createPost, deletePost } = postSlice.actions;

export default postSlice.reducer;

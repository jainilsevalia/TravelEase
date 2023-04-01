import { createSlice } from "@reduxjs/toolkit"

export const planDataSlice = createSlice({
    name: "planInfo",
    initialState: {
        planData:[
            // {
            // planId:1,
            // firstname: "Jay", 
            // lastname:"Ramani",
            // email: "ramanijay@gmail.com", 
            // startdate: "03-03-2023",
            // enddate: "08-03-2023", 
            // destination:"Toronto",
            // expense_details: "2000", 
            // description: "Toronto is Canada's largest city and a world leader in such areas as business, finance, technology, entertainment and culture. Its large population of immigrants from all over the globe has also made Toronto one of the most multicultural cities in the world."
            // },    
            // {
            //     planId:2,
            //     firstname: "Jainil", 
            //     lastname:"Sevalia",
            //     email: "jainilsevalia@gmail.com", 
            //     startdate: "20-03-2023",
            //     enddate: "28-03-2023", 
            //     destination:"Dubai",
            //     expense_details: "4000", 
            //     description:"Dubai is located on the eastern coast of the Arabian Peninsula in the southwest corner of the Arabian Gulf. Dubai is the second largest emirate in the United Arab Emirates (UAE) sharing borders with Abu Dhabi in the south, Sharjah in the northeast, and the Sultanate of Oman in the southeast."
            //     }
        ],
    },
    reducers: {
        addPlanData:(state,action)=>{
            state.planData.push(action.payload);
        },

		// updatePost: (state, action) => {
		// 	const postId = action.payload.postId;
		// 	const { location, description } = action.payload;
		// 	const result = state.postData.map((post) => {
		// 		if (post._id === postId) {
		// 			post.location = location;
		// 			post.description = description;
		// 		}
		// 		return post;
		// 	});
		// },
        // deletePlanData:(state,action)=>{
        //     state.planData = state.planData.filter(
        //         ({})
        //     )
        // }


        // deletePost: (state, action) => {
		// 	state.postData = state.postData.filter(
		// 		({ postId }) => postId !== action.payload.postId
		// 	);
		// },


    },
});

export const {addPlanData} =  planDataSlice.actions;
export default planDataSlice.reducer;

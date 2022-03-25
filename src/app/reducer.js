import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {mockFetchData} from './api';

const initialState = {
	categories: null,
	activeTab: '',
	search: '',
	activeData: null,
	opacity: 1.0,
	loading: true,
	data: null,
};

//  async thunk to get data from data.json
export const fetchApiData = createAsyncThunk('/fetch-data', async () => {
	return fetch(
		`https://cnheat.cambiumnetworks.com/accounts/images/images.json`
	  ).then((res) => res.json())
});

export const rootSlice = createSlice({
	name: 'apiData',
	initialState,
	reducers: {
		// active tab will set a category
		setActiveTab: (state, action) => {
			if (action.payload) state.activeTab = action.payload;
		},
		// search will set a search string
		setSearchVal: (state, action) => {
			state.search = action.payload;
		},
		// active data will set the images
		setActiveData: (state, action) => {
			 if (action.payload) state.activeData = state.data[action.payload];
		},
		setOpacity: (state, action) => {
			if (action.payload >= 0 && action.payload <= 1) state.opacity = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchApiData.fulfilled, (state, action) => {
			state.categories = Object.keys(action.payload);
			state.activeTab = state.categories[0]; // set to 0th index of categories
			state.activeData = action.payload[state.activeTab]; // bracket notation to access key:value pair
			state.loading = false;
			state.data =action.payload;
		});
	},
});

export const { setActiveTab, setActiveData, setSearchVal, setOpacity } =
	rootSlice.actions;

export default rootSlice.reducer;

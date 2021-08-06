import axios from "axios";
import { error } from "@/utils/error.js";

export default {
	namespaced: true,
	actions: {
		async login({ commit, dispatch }, payload) {
			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
				const { data } = await axios.post(url, {...payload,returnSecureToken: true});
				commit("setToken", data.idToken, { root: true });
				commit("clearMessage", null, { root: true });
			} catch (e) {
				dispatch("setMessage",{
						value: error(e.response.data.error.message),
						type: "danger",
					},{ root: true });
				throw new Error();
			}
		},
	},
};

import axios from "axios"
import { API_URL } from "../../constants"
import PostType from "../../types/post"

export const getPosts = async () => {
	return await axios.get(`${API_URL}`).then(({ data }) => {
		console.log(data)
		return data
	})
}

export const getPost = async (id: number) => {
	return id
}

export const deletePost = () => {}

export const putPost = () => {}

export const addPost = () => {}

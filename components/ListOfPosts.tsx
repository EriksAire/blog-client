import BlogPosts from "./Posts/BlogPosts"
import { Wrapper } from "./Wrapper"

const ListOfPosts: React.FC<any> = () => {
	return (
		<Wrapper>
			<BlogPosts />
		</Wrapper>
	)
}

export default ListOfPosts

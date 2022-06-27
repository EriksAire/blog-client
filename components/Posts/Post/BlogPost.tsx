import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../constants';

interface BlogPostProps {
  id: number;
  title: string;
  postBody: string;
  rating: number;
}

const putData = (post: BlogPostProps) => {
  return axios.put(`${API_URL}/EditPost/` + post.id, post);
};

const fetchData = () => {
  return axios.get(`${API_URL}`).then(({ data }) => {
    return data;
  });
};

// const upVote = (isUpVote: boolean, post: BlogPostProps) => {
//   let postToVote: BlogPostProps = {
//     id: post.id,
//     title: post.title,
//     postBody: post.postBody,
//     rating: post.rating,
//   };
//   if (isUpVote) {
//     postToVote.rating++;
//   } else {
//     postToVote.rating--;
//   }
//   putData(postToVote);
// };

const BlogPost: React.FC<BlogPostProps> = (props: BlogPostProps) => {
  const [postData, setPostData] = useState<BlogPostProps>(props);

  //TODO: check if user is logged in
  const upVote = (isUpVote: boolean) => {
    let postToVote: BlogPostProps = {
      id: postData.id,
      title: postData.title,
      postBody: postData.postBody,
      rating: postData.rating,
    };
    if (isUpVote) {
      postToVote.rating++;
    } else {
      postToVote.rating--;
    }
    putData(postToVote);
    setPostData(postToVote);
  };

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    // document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <ArrowUpIcon
        onClick={() => upVote(true)}
        // className={`voteButtons hover:text-blue-400 ${vote && 'text-blue-400'}`}
        className={`voteButtons hover:text-blue-400`}
      />
      <ArrowDownIcon
        onClick={() => upVote(false)}
        className={`voteButtons hover:text-blue-400`}
      ></ArrowDownIcon>
      <div>{postData.rating}</div>
      <div>{postData.title}</div>
      <div>{postData.postBody}</div>
    </div>
  );
};

export default BlogPost;

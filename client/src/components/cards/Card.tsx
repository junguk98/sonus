import { User } from 'interfaces/user';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { IoPlaySharp } from 'react-icons/io5';
import 'styles/card.scss';

interface CardProps {
  title: string;
  albumImgUrl: string;
  user: User;
  plays: number;
  likes: number;
  comments: number;
}

const Card = ({
  title,
  albumImgUrl,
  user,
  plays,
  likes,
  comments,
}: CardProps) => {
  return (
    <div className="card">
      <img placeholder="d" className="card-thumnail" src={albumImgUrl}></img>
      <div className="card-title">{title}</div>
      <div className="card-user">{user.name}</div>
      <div className="card-plays">
        <BiCommentDetail />
        <span>{comments}</span>
      </div>
      <div className="card-plays">
        <AiFillHeart />
        <span>{likes}</span>
      </div>
      <div className="card-plays">
        <IoPlaySharp />
        <span>{plays}</span>
      </div>
    </div>
  );
};

export default Card;

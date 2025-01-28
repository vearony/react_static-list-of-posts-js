import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ commments }) => {
  return (
    <div className="CommentList">
      {commments.map(commment => (
        <CommentInfo commment={commment} key={commment.id} />
      ))}
    </div>
  );
};

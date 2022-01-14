import PropTypes from 'prop-types';
import {Fragment} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const MediaItemHeader = ({title,setLiked,liked,date,copyright}) => {
    return (
        <Fragment>
            <div>
                <h2 className="Polaris-Heading">{title}</h2>
                <span style={{color:"rgba(0, 0, 0, 0.6)"}}>Photo by {copyright} at {date}</span>
            </div>
            <div onClick={() =>{
                setLiked((l) => !l)
            }} className={"Polaris-MediaCard__LikeButton"}>
                {
                    !liked && <AiOutlineHeart />
                }
                {
                    liked &&  <AiFillHeart style={{color:"lightblue"}}/>
                }
            </div>
        </Fragment>
    )
}
MediaItemHeader.propTypes = {
    title: PropTypes.string,
    liked: PropTypes.bool,
    setLiked: PropTypes.func,
    date: PropTypes.string,
    copyright: PropTypes.string
};
export default MediaItemHeader;
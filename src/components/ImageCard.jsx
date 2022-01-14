import PropTypes from 'prop-types';
import {MediaCard} from "@shopify/polaris";
import {useState} from "react";
import MediaItemHeader from "./MediaItemHeader";

ImageCard.propTypes = {
   image: PropTypes.shape({
       title: PropTypes.string,
       explanation: PropTypes.string,
       url: PropTypes.string,
       date: PropTypes.string,
       copyright: PropTypes.string
   })
};

function ImageCard({image}) {
    const [liked,setLiked] = useState(false);
    return (
        <MediaCard
            title={<MediaItemHeader date={image.date} copyright={image.copyright} liked={liked} setLiked={setLiked} title={image.title}/>}
            description={image.explanation}
        >
            <img
                alt={image.title}
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={image.url}
            />
        </MediaCard>
    );
}

export default ImageCard;
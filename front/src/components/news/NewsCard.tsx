import React from 'react';

interface Props {
    title: string;
    key: string;
}

const NewsCard: React.FC<Props> = (props) => {
    return(
        <div>
            {props.title}
        </div>
    );
}

export default NewsCard;
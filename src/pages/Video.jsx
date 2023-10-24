import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDtail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDtail(data.items[0]);
                console.log(data);
            }); // 여기에서는 첫 번째 항목만 사용합니다.
    }, [videoId]);


    return (
        <section id='videoVeiwPage'>
            {videoDetail && (
                <div className='video__view'>
                    <div className='video__play'>
                        <ReactPlayer
                            playing={true}
                            url={`http://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                    <div className='video__info'>
                        <h2 className='video__title'>
                            {videoDetail.snippet.title}
                        </h2>
                        <div className='video__chnnel'>
                            <div className='id'>{videoDetail.id}</div>
                            <div className='count'>{videoDetail.statistics.viewCount}
                                <span className='like'>{videoDetail.statistics.viewCount}</span>
                                <span className='commet'>{videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Video
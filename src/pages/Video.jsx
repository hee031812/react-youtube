import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { BiSolidLike } from "react-icons/bi";
import { CiChat1 } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { VscThumbsup } from "react-icons/vsc";




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
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to ={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            <div className='count'>
                                <span className='View'><CiRead />조회수: {videoDetail.statistics.viewCount}</span>
                                <span className='like'><VscThumbsup />좋아요: {videoDetail.statistics.likeCount}</span>
                                <span className='commet'><CiChat1 />댓글: {videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Video
import { useParams } from 'react-router-dom';
import './VideoDetail.css';
import { useEffect, useState } from 'react';
import { videoRepository } from '../../modules/videos/video.repository';
import { Video } from '../../modules/videos/video.entity';

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState<Video>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVideo()
  }, [id])
  

  const fetchVideo = async () => {
    try {
      setIsLoading(true);
      const video = await videoRepository.findOne(id!);
      setVideo(video);
    } catch (error){
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if(isLoading) return <div>Loading...</div>
  if(video === null) return <div>Videoの取得に失敗しました</div>

  return (
    <>
      <div className="layout">
        <main className="video-detail-main">
          <div className="video-detail-container">
            <div className="video-main-content">
              <div className="video-player">
                <video
                  controls
                  poster={video?.thumbnailUrl}
                >
                  <source src={video?.url}/>
                </video>
              </div>
              <div className="video-info-section">
                <h1 className="video-detail-title">{video?.title}</h1>
                <div className="video-meta-bar">
                  <div className="video-stats">
                    <span className="upload-date">
                      {video?.createdAt.toLocaleString()} アップロード
                    </span>
                  </div>
                </div>
              </div>
              <div className="channel-info-section">
                <div className="video-detail-video-description">
                  {video?.description ?? 'なし'}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VideoDetail;

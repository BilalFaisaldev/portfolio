import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Github } from 'lucide-react';

export default function VideoModal({ video, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  // Determine embed source URL
  let embedSrc = video.embedUrl || video.videoUrl;
  if (video.videoType === 'youtube' && !embedSrc.includes('embed')) {
    const videoIdMatch = video.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : 'dQw4w9WgXcQ';
    embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  } else if (video.videoType === 'youtube' && !embedSrc.includes('autoplay=1')) {
    embedSrc += (embedSrc.includes('?') ? '&' : '?') + 'autoplay=1&rel=0';
  }

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div
        className="video-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="video-modal-header">
          <div className="video-modal-title-wrap">
            <span className="video-modal-badge">{video.category}</span>
            <h3 className="video-modal-title">{video.title}</h3>
          </div>
          <button
            type="button"
            className="video-modal-close"
            onClick={onClose}
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="video-player-wrap">
          {video.videoType === 'mp4' ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="video-html5-player"
            >
              Your browser does not support HTML5 video.
            </video>
          ) : (
            <iframe
              src={embedSrc}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-iframe-player"
            />
          )}
        </div>

        {/* Modal Footer & Details */}
        <div className="video-modal-footer">
          <p className="video-modal-desc">{video.description}</p>
          <div className="video-modal-actions">
            <div className="video-modal-tags">
              {video.tech?.map((t, idx) => (
                <span key={idx} className="video-tag-chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="video-modal-links">
              {video.githubUrl && (
                <a
                  href={video.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link-btn"
                >
                  <Github size={14} />
                  <span>Repository</span>
                </a>
              )}
              {video.liveUrl && (
                <a
                  href={video.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link-btn"
                >
                  <ExternalLink size={14} />
                  <span>Live Project</span>
                </a>
              )}
              {video.videoUrl && (
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link-btn primary"
                >
                  <Play size={14} />
                  <span>Watch on Source</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


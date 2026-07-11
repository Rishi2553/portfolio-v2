import { useEffect, useRef, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import "./VideoModal.css";

function VideoModal({
    isOpen,
    onClose,
    src,
    title,
    description,
}) {
    const videoRef = useRef(null);
    const handleClose = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }

        onClose();
    }, [onClose]);

    // Prevent background scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);

    // Close modal with Escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    return (
        <div
            className="video-modal-overlay"
            onClick={handleClose}
        >
            <div
                className="video-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="video-close-btn"
                    onClick={handleClose}
                    aria-label="Close video"
                >
                    <FaTimes />
                </button>

                {title && (
                    <h2 className="video-title">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="video-description">
                        {description}
                    </p>
                )}

                <video
                    ref={videoRef}
                    className="project-video"
                    controls
                    autoPlay
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    );
}

export default VideoModal;
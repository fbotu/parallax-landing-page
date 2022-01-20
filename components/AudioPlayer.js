import React, {useState, useRef, useEffect} from 'react'
import styles from '../styles/AudioPlayer.module.css';
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'

const AudioPlayer = () => {
    /* State */
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    /* References */
    const audioPlayer = useRef(); // Reference for audio component
    const progressBar = useRef(); // Reference to progress bar
    const animationRef = useRef(); // Reference to animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }
    
    const togglePlayPause = () => {
        // const prevValue = isPlaying;
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
            }
        }       

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
         /* onChange update track current time */
        const changeRange = () => {
            audioPlayer.current.currentTime = progressBar.current.value;
            changePlayerCurrentTime();
        }

        const changePlayerCurrentTime = () => {
            progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
            setCurrentTime(progressBar.current.value);
        }

        const backThirty = () => {
            progressBar.current.value = Number(progressBar.current.value - 30);
            changeRange();
        }

        const forwardThirty = () => {
            progressBar.current.value = Number(progressBar.current.value + 30);
            changeRange();
        }

        const track =
        "https://res.cloudinary.com/fbwebdev/video/upload/v1642294752/Pheori/Music/Make_It_Funky_LIVE10-120bpm_yuemyf.mp3"
        ;

    return (
        <div className={styles.audioPlayer}>
            <audio 
                ref={audioPlayer} 
                src={track} 
                preload="metadata">
            </audio>
            <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 30</button>
            <button onClick={togglePlayPause} className={styles.playPause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <button className={styles.forwardBackward} onClick={forwardThirty}>30 <BsArrowRightShort /></button>

            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

             {/* progress bar */}
             <div>
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
             </div>

            {/* duration */}
            <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>
    )
}

export { AudioPlayer }

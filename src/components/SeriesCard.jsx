import styles from './Netflix.module.css';
import styled from 'styled-components';

export const SeriesCard = ({ data }) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: " 1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight:"bold",
        cursor:"pointer",
    };

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            {/* <div className={styles["card-content"]}> */}
            <div className='flex flex-col py-[3.2rem] px-[1.2rem] gap-[1.2rem]'>
                <h2>Name:{name}</h2>
                <h3>
                    Rating:
                    <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
                </h3>
                <p className='text-3xl font-bold underline'>Summary:{description}</p>
                <p>Genre :{genre.join(", ")}</p>
                <p>Cast:{cast.join(", ")}</p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div >
        </li >
    );
};
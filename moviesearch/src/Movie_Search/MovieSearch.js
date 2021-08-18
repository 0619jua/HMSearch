import React from 'react';
import '../MSearch.css';

const MovieSearch = () =>{
    return(
        <>
            <div className = "MovieSearch_box1">상위 검색 결과</div>
            <div className = "MovieSearch_box2">영화</div>
            <div className = "MovieSearch_box3">TV 프로그램</div>
            <div className = "MovieSearch_box4">책</div>
            <div className = "MovieSearch_box5">사용자</div>
        </>
    );
};

export default MovieSearch;
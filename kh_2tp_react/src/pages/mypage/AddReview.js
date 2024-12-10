import { useState } from "react";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Rating } from "@mui/material";

const Container = styled.div`
    width: 50%;
    margin:100px auto;
    text-align: center;
    border: 1px solid #000;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-spacing: 15px;
    font-size: 1rem;
`
const H2 = styled.h2`margin: 20px 0;`
const ReviewUser = styled.input`
    font-size: 1rem;
    field-sizing: content;
    border: none;
    &:focus {
        outline: none;
    }
`
const ReviewForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin-top: 10px;
    }
`
const RatingBox = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
`
const ReviewRating = styled.div`
    display: flex;
    justify-content: space-between;
`
const ReviewButton = styled.button`
    margin: 20px 0;
    height: 40px;
    aspect-ratio: 9 / 4;
    border-radius: 5px; 
`

const AddReview = () => {
    const location = useLocation(); // URL에서 쿼리 파라미터 받기
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const [userId, setUserId] = useState(queryParams.get('userId'));  // 사용자 ID
    const [storeName, setStoreName] = useState(queryParams.get('storeName'));  // 매장명
    const [rSubmitTime, setRSubmitTime] = useState(queryParams.get('rSubmitTime'));  // 예약 날짜
    const [rTime, setRTime] = useState(queryParams.get('rTime'));  // 예약 시간
    const [rvPrice, setRvPrice] = useState(0); // 별점(가격)
    const [rvTaste, setRvTaste] = useState(0); // 별점(맛)
    const [rvVibe, setRvVibe] = useState(0);   // 별점(분위기)
    const [rvKind, setRvKind] = useState(0);   // 별점(친절도)
  
    const handleSubmit = async(e) => {
        e.preventDefault();

        const reviewData = {
            userId: userId,
            storeName: storeName,
            rSubmitTime: rSubmitTime,
            rTime: rTime,
            rvPrice: rvPrice,
            rvTaste: rvTaste,
            rvVibe: rvVibe,
            rvKind: rvKind
        };

        try {
            const response = await AxiosApi.reviewInsert(reviewData);
            console.log(response);
            alert(`리뷰가 추가되었습니다!`);
            navigate("/reservation"); // 추가 성공 시 리뷰 리스트 페이지로 이동
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert('리뷰 추가 중 오류가 발생했습니다: ' + error.message);
        }
    };

    return (
        <Container>
            <H2>리뷰 추가</H2>
            <ReviewForm onSubmit={handleSubmit}>
                <div>
                    <ReviewUser
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        readOnly
                    />님
                </div>
                <div>
                    <ReviewUser
                        type="text"
                        value={rSubmitTime}
                        onChange={(e) => setRSubmitTime(e.target.value)}
                        required
                        readOnly
                    />
                    &nbsp;
                    <ReviewUser
                        type="text"
                        value={rTime}
                        onChange={(e) => setRTime(e.target.value)}
                        required
                        readOnly
                    />
                    <span>:00 에 방문하신</span>
                </div>
                <div>
                    <span>'</span>
                    <ReviewUser
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        required
                        readOnly
                    />
                    <span>' 이 어떠셨는지 별점을 남겨주세요!</span>
                </div>
                <RatingBox>
                    <ReviewRating>
                        <label>가격</label>
                        <Rating
                            name="price-rating"
                            value={rvPrice}
                            onChange={(e, newValue) => setRvPrice(newValue)}
                            required
                            precision={0.5}
                        />
                    </ReviewRating>
                    <ReviewRating>
                        <label>맛</label>
                        <Rating
                            name="taste-rating"
                            value={rvTaste}
                            onChange={(e, newValue) => setRvTaste(newValue)}
                            required
                            precision={0.5}
                        />
                    </ReviewRating>
                    <ReviewRating>
                        <label>분위기</label>
                        <Rating
                            name="vibe-rating"
                            value={rvVibe}
                            onChange={(e, newValue) => setRvVibe(newValue)}
                            required
                            precision={0.5}
                        />
                    </ReviewRating>
                    <ReviewRating>
                        <label>친절도</label>
                        <Rating
                            name="kindness-rating"
                            value={rvKind}
                            onChange={(e, newValue) => setRvKind(newValue)}
                            required
                            precision={0.5}
                        />
                    </ReviewRating>
                </RatingBox>
                <ReviewButton type="submit">리뷰 추가</ReviewButton>
            </ReviewForm>
        </Container>
    );
};

export default AddReview;
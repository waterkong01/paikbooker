import { useState } from "react";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Rating } from "@mui/material";

const ReviewInput = styled.input`
    width: 50%;
    height: 30px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 5px;
`
export const ReviewEditContainer = styled.div`
    margin: 100px auto;
    width: 50%;
`
const EditReview = () => {
    const location = useLocation(); // URL에서 쿼리 파라미터 받기
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const [userId, setUserId] = useState(queryParams.get('userId'));  // 사용자 ID (기본값은 빈 문자열)
    const [storeName, setStoreName] = useState(queryParams.get('storeName'));  // 매장명 (기본값은 빈 문자열)
    const [rTime, setRTime] = useState(queryParams.get('rTime'));  // 예약 날짜/시간 (기본값은 빈 문자열)
    const [rvPrice, setRvPrice] = useState(parseFloat(queryParams.get('rvPrice'))); // 별점(가격)
    const [rvTaste, setRvTaste] = useState(parseFloat(queryParams.get('rvTaste'))); // 별점(맛)
    const [rvVibe, setRvVibe] = useState(parseFloat(queryParams.get('rvVibe')));   // 별점(분위기)
    const [rvKind, setRvKind] = useState(parseFloat(queryParams.get('rvKind')));   // 별점(친절도)
  
    const handleSubmit = async(e) => {
        e.preventDefault();

        const reviewData = {
            userId: userId,
            storeName: storeName,
            rTime: rTime,
            rvPrice: rvPrice,
            rvTaste: rvTaste,
            rvVibe: rvVibe,
            rvKind: rvKind
        };
        try {
            const response = await AxiosApi.reviewUpdate(reviewData);
            console.log(response);
            alert('리뷰가 수정되었습니다!');
            navigate("/"); // 수정 성공 시 리뷰 리스트 페이지로 이동
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert('리뷰 수정 중 오류가 발생했습니다: ' + error.message);
        }
    };

    return (
        <ReviewEditContainer>
            <h2>리뷰 수정</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>사용자 ID</label>
                    <ReviewInput
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div>
                    <label>매장명</label>
                    <ReviewInput
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div>
                    <label>방문 시간</label>
                    <ReviewInput
                        type="text"
                        value={rTime}
                        onChange={(e) => setRTime(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div>
                    <label>가격 별점</label>
                    <Rating
                        name="price-rating"
                        value={rvPrice}
                        onChange={(e, newValue) => setRvPrice(newValue)}
                        required
                        precision={0.5}
                    />
                </div>
                <div>
                    <label>맛 별점</label>
                    <Rating
                        name="taste-rating"
                        value={rvTaste}
                        onChange={(e, newValue) => setRvTaste(newValue)}
                        required
                        precision={0.5}
                    />
                </div>
                <div>
                    <label>분위기 별점</label>
                    <Rating
                        name="vibe-rating"
                        value={rvVibe}
                        onChange={(e, newValue) => setRvVibe(newValue)}
                        required
                        precision={0.5}
                    />
                </div>
                <div>
                    <label>
                        친절도 별점</label>
                    <Rating
                        name="kindness-rating"
                        value={rvKind}
                        onChange={(e, newValue) => setRvKind(newValue)}
                        required
                        precision={0.5}
                    />
                </div>
                <button type="submit">리뷰 수정</button>
            </form>
        </ReviewEditContainer>
    );
};

export default EditReview;
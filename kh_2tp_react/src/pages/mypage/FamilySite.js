import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const Container = styled.div`
    display: grid;
    gap: 2vw;
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
    /* grid-auto-rows: auto; */
    & > a:first-child {
        grid-column: span 2; /* 첫 번째 박스는 전체 너비 차지 */
        aspect-ratio: initial;
    }
`
const ReviewLink = styled(Link)`
    height: 250px;
    background-color: royalblue;
    text-decoration: none;
    color: #000;
    border-radius: 30px;
    &:active {
        color: #FFF;
    }
    aspect-ratio: 58 / 45;
`
const FamilyBox = styled.div`

`
const BrandLogo = styled.img``

const FamilySite = () => {
    const urlMap = [
        { brandName: '빽보이피자',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%b9%bd%eb%b3%b4%ec%9d%b4%ed%94%bc%ec%9e%90/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자02.png?alt=media=0ea99080-4d4e-42ae-8f6f-db36c4db3564'
        },
        { brandName: '역전우동',
            url: 'https://udon0410.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동02.png?alt=media=ec82d374-fd66-46af-9a30-b768114bafd7'
        },
        { brandName: '빽다방',
            url: 'https://paikdabang.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방02.png?alt=media=244dcfc0-98ca-473d-82dd-9e87924fb3e6'
        },
        { brandName: '홍콩반점',
            url: 'https://www.theborn.co.kr/theborn_brand/%ed%99%8d%ec%bd%a9%eb%b0%98%ec%a0%902/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점02.png?alt=media=2afc294f-e914-416b-8b78-16db2de32ee2'
        },
        { brandName: '롤링파스타',
            url: 'https://rolling-pasta.com/#kv',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타02.png?alt=media=2a7b1176-2efc-4a13-a48f-ee493472f607'
        },
        { brandName: '한신포차',
            url: 'https://hanshinpocha.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차02.png?alt=media=e73fa42f-72e6-4c4f-9321-10fae03eabca'
        },
        { brandName: '백스비어',
            url: 'https://paiksbeer.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어02.png?alt=media=ae4f1a93-e15f-4d9d-b657-ba99d77fd662'
        },
        { brandName: '새마을식당',
            url: 'https://newmaul.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당02.png?alt=media=a972c102-df25-4aa1-ae46-39b0c8e0fd04'
        },
        { brandName: '제순식당',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%a0%9c%ec%88%9c%ec%8b%9d%eb%8b%b9/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당02.png?alt=media=34cd5224-6f5e-4e27-b3a1-06401aac747b'
        },
        { brandName: '리춘시장',
            url: 'https://start.theborn.co.kr/prebrand_detail.php?bc=16',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장02.png?alt=media=7c9c6143-c7c8-464d-9402-63778ff66fa3'
        },
        { brandName: '고투웍',
            url: 'https://www.theborn.co.kr/theborn_brand/%ea%b3%a0%ed%88%ac%ec%9b%8d/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍02.png?alt=media=fe20e09d-b3ca-48d6-a72c-a09d94abb9e7'
        },
        { brandName: '홍콩분식',
            url: 'https://www.theborn.co.kr/theborn_brand/%ed%99%8d%ec%bd%a9%eb%b6%84%ec%8b%9d/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식02.png?alt=media=903fc722-45f1-4109-8300-aa9039defeb6'
        },
        { brandName: '백종원의쌈밥',
            url: 'https://ssambap.co.kr/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥02.png?alt=media=2c54579b-08d4-497b-be7b-912defbd4711'
        },
        { brandName: '본가',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%b3%b8%ea%b0%80/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가02.png?alt=media=c82e10e3-f4e7-4a90-92fe-8b122d07d95d'
        },
        { brandName: '인생설렁탕',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%9d%b8%ec%83%9d%ec%84%a4%eb%a0%81%ed%83%95/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕02.png?alt=media=7f2e9288-a6b2-48e5-83cb-f54a938d8488'
        },
        { brandName: '막이오름',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%a7%89%ec%9d%b4%ec%98%a4%eb%a6%84/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름02.png?alt=media=b50da95c-576e-442f-9582-215a23a28c95'
        },
        { brandName: '연돈볼카츠',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%97%b0%eb%8f%88%eb%b3%bc%ec%b9%b4%ec%b8%a0/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠02.png?alt=media=dae163e8-72f8-461a-9476-137fadcabd70'
        },
        { brandName: '돌배기집',
            url: 'https://dolbaegi.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집02.png?alt=media=9ee9f66b-fcbc-4331-996a-b5e959506c1b'
        },
        { brandName: '미정국수',
            url: 'https://www.0410noodle.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수02.png?alt=media=f045a3cc-d3dd-4f47-af90-7907078a4c4f'
        },
        { brandName: '백철판',
            url: 'https://www.paiks-pan.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판02.png?alt=media=7142b4ab-365b-41ad-bbe2-638199316daf'
        },
    ];

    useEffect(() => {
        const fetchBrandData = async () => {
            try {

            } catch (error) {
                console.error("Error fetching brand details: ", error); // 에러 로그 추가
            }
        };

        fetchBrandData();
    }, []);

    return (
        <Container>
            {/* 더본메인 */}
            <ReviewLink to="https://www.theborn.co.kr/">
                <FamilyBox>
                    
                </FamilyBox>
            </ReviewLink>


{/*             <ReviewLink  key={index} to={brand.url}>
                <FamilyBox>
                    <BrandLogo src={brand.imgUrl} alt={brand.brandName} />
                    <div className="searchImg"></div>
                </FamilyBox>
            </ReviewLink> */}

        </Container>
    );
};

export default FamilySite;
-- BRAND 테이블 생성
CREATE TABLE BRAND_TB(
	BRAND_NO INTEGER NOT NULL PRIMARY KEY, 							/* 브랜드번호 */
	BRAND_NAME VARCHAR2(20) NOT NULL, 								/* 브랜드명 */
    BRAND_OPEN VARCHAR2(20) NOT NULL, 								/* 영업시작시간 */
	BRAND_CLOSE VARCHAR2(20) NOT NULL,								/* 영업종료시간 */
	BRAND_FOOD VARCHAR2(20) NOT NULL,								/* 음식종류 */
	BRAND_LOGO1 VARCHAR2(500) NOT NULL,               			 	/* 브랜드 Logo 세로 이미지 URL */
	BRAND_LOGO2 VARCHAR2(500) NOT NULL,               			 	/* 브랜드 Logo 가로 이미지 URL */
	BRAND_MARKER VARCHAR2(500) NOT NULL,               				/* 브랜드 MARKER 세로 이미지 URL */
	BRAND_IMG VARCHAR2(500) NOT NULL,								/* 브랜드 지점 이미지 URL */

	--UNIQUE 제약조건
	CONSTRAINT UNIQUE_BRAND1 UNIQUE (BRAND_NAME), 					/* MENU */
	CONSTRAINT UNIQUE_BRAND2 UNIQUE (BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG) 	/* STORE */
);


-- BRAND_NO 시퀀스 생성
CREATE SEQUENCE BRAND_NO_SEQ
INCREMENT BY 1
START WITH 1
NOCYCLE
NOCACHE;


-- BRAND 더미 데이터 생성
INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '빽보이피자', '11', '22', '양식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자01.png?alt=media&token=73658b91-8b0f-4c8f-82e7-3acc11ef09ec',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자02.png?alt=media&token=0ea99080-4d4e-42ae-8f6f-db36c4db3564',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_01.png?alt=media&token=9fd6776b-f1f3-43f9-a53e-118659aea335',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F1_빽보이피자_IMG.png?alt=media&token=2417488a-4572-49b5-9efc-afb77328bc12');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '역전우동', '11', '21', '일식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동01.png?alt=media&token=0c235c92-8e33-4e42-93ff-f0cf05867bd0',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동02.png?alt=media&token=ec82d374-fd66-46af-9a30-b768114bafd7',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_02.png?alt=media&token=118e0ae0-7927-4446-bff0-e06189dfde9e',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F2_역전우동_IMG.png?alt=media&token=dcdb9dab-b32c-4d9e-9609-f68469c1efcd');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '빽다방', '07', '22', '커피',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방01.png?alt=media&token=e3682b85-0916-49d5-8366-1a0563673eb1',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방02.png?alt=media&token=244dcfc0-98ca-473d-82dd-9e87924fb3e6',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_03.png?alt=media&token=1713a25a-b06f-4368-a159-403546d148b7',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F3_빽다방_IMG.png?alt=media&token=950a7165-3df5-4c87-8a7e-4dccd7973114');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '홍콩반점', '11', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점01.png?alt=media&token=21bfafba-f254-4f97-bfe4-cf29481cc210',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점02.png?alt=media&token=2afc294f-e914-416b-8b78-16db2de32ee2',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_04.png?alt=media&token=28497125-06e8-48c1-afa8-71194456c274',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F4_홍콩반점_IMG.png?alt=media&token=13e70183-8b84-4a3a-96f8-e5da385accc9');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '롤링파스타', '11', '21', '양식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타01.png?alt=media&token=9ce4e527-f189-4a25-8e84-dca500aac097',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타02.png?alt=media&token=2a7b1176-2efc-4a13-a48f-ee493472f607',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_05.png?alt=media&token=2e7553ee-2302-4355-8c58-7ee454344bd0',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F5_롤링파스타_IMG.png?alt=media&token=9c92ba9f-5a9f-4bdc-b979-1c0f94b5791d');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '한신포차', '17', '27', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차01.png?alt=media&token=f1811a7a-92b8-4b06-aaab-b91320f6b156',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차02.png?alt=media&token=e73fa42f-72e6-4c4f-9321-10fae03eabca',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_06.png?alt=media&token=2a4eb939-131f-4449-8a17-59d004b78800',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F6_한신포차_IMG.png?alt=media&token=bad78afb-8270-4268-a312-942944349b26');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백스비어', '17', '25', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어01.png?alt=media&token=fa3f5d61-6a25-417a-98b0-fefb4acdf981',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어02.png?alt=media&token=ae4f1a93-e15f-4d9d-b657-ba99d77fd662',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_07.png?alt=media&token=0e9aac5d-1a58-4f00-894d-a1886955b03b',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F7_빽비어_IMG.png?alt=media&token=f2e878e3-58ad-46c7-b727-de04069441b2');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '새마을식당', '11', '23', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당01.png?alt=media&token=eddf31f9-0ed7-48f9-9468-97b71e920530',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당02.png?alt=media&token=a972c102-df25-4aa1-ae46-39b0c8e0fd04',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_08.png?alt=media&token=c69ce962-2d20-43b2-b46c-06eb2fbebaee',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F8_새마을식당_IMG.png?alt=media&token=b86d7f1e-fc1a-4e66-a9a0-02864d1e34d5');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '제순식당', '11', '19', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당01.png?alt=media&token=60c400f6-ce3c-40f2-bc87-99fff289b1f0',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당02.png?alt=media&token=34cd5224-6f5e-4e27-b3a1-06401aac747b',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_09.png?alt=media&token=fb47644e-3d0c-4ba2-97a8-9dbebd4b3e1b',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F9_제순식당_IMG.png?alt=media&token=b28f251d-dac0-4bbe-9b97-359db3fe1c83');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '리춘시장', '17', '24', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장01.png?alt=media&token=c852b849-de8e-4f72-ad97-31b510bdc99f',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장02.png?alt=media&token=7c9c6143-c7c8-464d-9402-63778ff66fa3',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_10.png?alt=media&token=9cf01424-e020-4303-a2d1-86ad0f90840a',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F10_리춘시장_IMG.png?alt=media&token=163b67f5-4aa9-46c3-b3aa-ba97f89155e3');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '고투웍', '10', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍01.png?alt=media&token=ccef839c-ae1d-4d8f-88e5-f2ab63ee9f67',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍02.png?alt=media&token=fe20e09d-b3ca-48d6-a72c-a09d94abb9e7',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_11.png?alt=media&token=2c123e53-4be6-4a3a-b1f3-2c33fad02503',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F11_고투웍_IMG.png?alt=media&token=b995a839-94bf-4c3e-9f3e-ed0394bdc262');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '홍콩분식', '11', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식01.png?alt=media&token=dd48f407-6319-430b-97ef-81c226f02ce5',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식02.png?alt=media&token=903fc722-45f1-4109-8300-aa9039defeb6',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_12.png?alt=media&token=e39c9e93-0ca7-468c-81b6-5ad670c702cf',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F12_홍콩분식_IMG.png?alt=media&token=2531b98f-537a-4bc6-a568-ba29ea174b92');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백종원의쌈밥', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥01.png?alt=media&token=34e41297-8b89-4e59-817f-59a1260a3eaa',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥02.png?alt=media&token=2c54579b-08d4-497b-be7b-912defbd4711',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_13.png?alt=media&token=ae61693f-6810-49b8-8067-bf338cd6e455',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F13_원조쌈밥_IMG.png?alt=media&token=ee8ece92-bb39-49ab-b3e5-d488a3935d8f');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '본가', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가01.png?alt=media&token=a88b02d1-6e75-4e10-adc2-74d056d6c83b',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가02.png?alt=media&token=c82e10e3-f4e7-4a90-92fe-8b122d07d95d',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_14.png?alt=media&token=be47ace5-be83-439f-a326-512e530d4017',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F14_본가_IMG.jpg?alt=media&token=474ff519-5a4e-42cc-9314-5331a9ccbd49');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '인생설렁탕', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕01.png?alt=media&token=a5ab642d-c6cf-48df-9c4b-4220fc3a81cb',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕02.png?alt=media&token=7f2e9288-a6b2-48e5-83cb-f54a938d8488',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_15.png?alt=media&token=b187e8ee-1f92-4ccd-9e86-208a8bf5b0bb',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F15_인생설렁탕_IMG.jpg?alt=media&token=36ea8ee1-4cd8-45d1-ba5d-d8f78f6956cf');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '막이오름', '17', '26', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름01.png?alt=media&token=dd7007af-8b39-4292-a1cd-3fdd7f0d7bf7',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름02.png?alt=media&token=b50da95c-576e-442f-9582-215a23a28c95',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_16.png?alt=media&token=f3910e03-288c-4a96-a44c-8a49bce7828e',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F16_막이오름_IMG.png?alt=media&token=9cfbac9e-5cf9-4ad0-9e88-62869d34a1d3');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '연돈볼카츠', '11', '22', '일식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠01.png?alt=media&token=0c942129-57ba-4d59-84f0-59ee82e11b3e',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠02.png?alt=media&token=dae163e8-72f8-461a-9476-137fadcabd70',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_17.png?alt=media&token=19ae41d6-b456-4dc7-97b2-2d446596fadf',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F17_연돈볼카츠_IMG.jpg?alt=media&token=f4f2723c-66a1-479a-869d-9d42e54e4d03');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '돌배기집', '08', '24', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집01.png?alt=media&token=66a0822c-e593-4c1d-bfeb-44f34f76f3a2',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집02.png?alt=media&token=9ee9f66b-fcbc-4331-996a-b5e959506c1b',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_18.png?alt=media&token=f7571884-f52f-4a00-af60-abcc85cf62af',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F18_돌배기집_IMG.png?alt=media&token=a5b44699-3920-4738-b6bc-43937e5ea7ad');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '미정국수', '08', '24', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수01.png?alt=media&token=9cf1be65-71df-42e4-995f-c16fd81e4d5e',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수02.png?alt=media&token=f045a3cc-d3dd-4f47-af90-7907078a4c4f',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_19.png?alt=media&token=7ef8f026-1ad0-4f86-9f3d-238719689b44',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F19_미정국수_IMG.png?alt=media&token=84a23cab-6c13-4d4b-9f22-62423f0b2183');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백철판', '11', '23', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판01.png?alt=media&token=67e1a85e-e2f0-4aaa-8efa-bd6f28ec7144',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판02.png?alt=media&token=7142b4ab-365b-41ad-bbe2-638199316daf',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_20.png?alt=media&token=6303b095-35e2-418e-998e-fa376bc4e845',
'https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2F20_백철판_IMG.jpg?alt=media&token=640551b2-c40a-4657-a1f5-531b8222db19');


-- BRAND 테스트용 쿼리문
SELECT * FROM BRAND_TB;							/*전체 데이터 조회*/

DELETE FROM BRAND_TB WHERE BRAND_NO = '';		/* 브랜드번호 단위로 데이터 삭제 */

DROP SEQUENCE BRAND_NO_SEQ;						/* BRAND_NO 시퀀스 삭제 */

DROP TABLE BRAND_TB;							/* BRAND 테이블 삭제 */

COMMIT;

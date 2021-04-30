import React from 'react';
import aboutImg1 from '../../../assets/img/film.jpg';
import aboutImg2 from '../../../assets/img/camera2.jpg';
import aboutImg3 from '../../../assets/img/camera3.jpg';
import aboutImg4 from '../../../assets/img/camera4.jpg';
import * as S from './AboutPage.style';

const AboutPage = () => {
    return (
        <>
            <S.AboutWrap>
                <S.SubWrap>
                    <p>Photo in a Heartbeat 사진 동호회</p>
                    <ul>
                        <li>
                            <img src={aboutImg1} />
                        </li>
                        <li>
                            저희는 서울 지역을 중심으로 한 "Photo in a Heartbeat 사진 동호회" 라는 이름으로 결성한 동호회 모임 입니다.
                            <br />
                            <br />
                            "Photo in a Heartbeat"란 순식간에 심장 고동소리 만큼 빠르게 사진을 찍는다라는 의미로 사진을 찍고 싶은 바람과 간절함을 의미합니다.
                            <br />
                            <br />
                            2021년 5월부터 사진을 좋아하는 몇몇 사람들이 모여, 좋은 동호회로 태동을 준비중입니다. 저희는 사진을
                            좋아하는 사람이면 누구나 함께 할 수 있으며, 사진이 목적이 아닌 사람을 통한 사람과 사람 사이에 커뮤니티를 만들어가는 것을 그 목적으로 하고 있습니다.
                            <br />
                            <br />
                            사진에 흥미를 가지고 있으며 종류와 상관없이 카메라를 가지고 계신 분이라면 누군든지 가입하실 수 있습니다.
                        </li>
                    </ul>
                    <p>동호회의 목적</p>
                    <ul>
                        <li>
                            <img src={aboutImg2} />
                        </li>
                        <li>
                            1. 저희 동호회는 보다 좋은 사진을 목적으로 합니다.
                            <br />
                            <br />
                            2. 일상 속에서 느끼는 자유로운 사진을 목적으로 합니다.
                            <br />
                            <br />
                            3. 사진을 통한 사람과 사람과의 커뮤니티를 목적으로 합니다.
                            <br />
                            <br />
                            4. 사진을 통한 정보 교류 및 서로의 도움을 목적으로 합니다.
                        </li>
                    </ul>
                    <p>동호회 활동</p>
                    <ul>
                        <li>
                            <img src={aboutImg3} />
                        </li>
                        <li>
                            1. 매달 2째주 일요일에 정기 모임을 가집니다.
                            <br />
                            <br />
                            2. 회원들 간의 자유로운 번개 모임을 가집니다.
                            <br />
                            <br />
                            3. 특별한 모임이 없을 시 운영진 권한으로 친목 모임을 가집니다.
                            <br />
                            <br />
                            4. 사람들의 참여도에 따라 부분적인 소모임을 가집니다.
                        </li>
                    </ul>
                    <p>동호회 규칙</p>
                    <ul>
                        <li>
                            <img src={aboutImg4} />
                        </li>
                        <li>
                            1. 동호회인들에게 물의를 일으키거나 규칙 위반한 자에 한해서 경고가 결정됩니다.
                            <br />
                            <br />
                            2. 상업적인 내용이나 음란한 내용을 게시할 시 규칙 위반 사유가 됩니다.
                            <br />
                            <br />
                            3. 남을 비방하거나 고의적으로 남의 사진을 훼손 및 삭제 시 규칙 위반 사유가 됩니다.
                            <br />
                             <br />
                            4. 규칙 위반시 경고가 누적되며 3번 이상 누적시 바로 제명 처리합니다. 규칙 위반 수위에 따라 바로 제명 처리도 가능합니다.
                        </li>
                    </ul>
                </S.SubWrap>
            </S.AboutWrap>
        </>
    );
};

export default AboutPage;

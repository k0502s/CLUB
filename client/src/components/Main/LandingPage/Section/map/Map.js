import React, { useEffect, useState } from 'react';
import * as S from './Map.style';

/*global kakao */

const Map = () => {
    const [M, setM] = useState();

    useEffect(() => {
        Maps();
    }, []);

    const Maps = () => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.56761676087724, 126.8854657260516),
            level: 3,
        };

        const map = new kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(37.56761676087724, 126.8854657260516);

        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(map);
        setM(map);

        let iwContent =
                '<div style="padding:5px 0 0 40px;">모임 장소! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도 보기</a>',
            iwPosition = new kakao.maps.LatLng(37.56761676087724, 126.8854657260516); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
        });

        infowindow.open(map, marker);
    };

    const setMapType = (maptype) => {
        var roadmapControl = document.getElementById('btnRoadmap');
        var skyviewControl = document.getElementById('btnSkyview');
        if (maptype === 'roadmap') {
            M.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            roadmapControl.className = 'selected_btn';
            skyviewControl.className = 'btn';
        } else {
            M.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            skyviewControl.className = 'selected_btn';
            roadmapControl.className = 'btn';
        }
    };

    const zoomIn = () => {
        M.setLevel(M.getLevel() - 1);
    };

    const zoomOut = () => {
        M.setLevel(M.getLevel() + 1);
    };
    return (
        <>
            <S.MapWrap>
                <div id="map"></div>
                <div class="custom_typecontrol">
                    <span id="btnRoadmap" class="selected_btn" onClick={() => setMapType('roadmap')}>
                        지도
                    </span>
                    <span id="btnSkyview" class="btn" onClick={() => setMapType('skyview')}>
                        스카이뷰
                    </span>
                </div>
                <div class="custom_zoomcontrol">
                    <span onClick={zoomIn}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
                    </span>
                    <span onClick={zoomOut}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
                    </span>
                </div>
            </S.MapWrap>
        </>
    );
};

export default Map;

import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const WorldMap = () => {
    useEffect(() => {
        // 인스턴스 생성
        let map = am4core.create("chartdiv", am4maps.MapChart);
      
        // 특정 지도 정의
        map.geodata = am4geodata_worldLow;
      
        // 투영(지도 형태) 설정
        map.projection = new am4maps.projections.Miller();
    
        // 다각형 시리즈 생성
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;
        map.series.push(polygonSeries);

        // 툴팁 및 색상 지정
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#74B266");

        // hover 이벤트
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");
    
        // 언마운트 시 인스턴스 해제
        return () => {
          map.dispose();
        };
      }, []);
    
      return (
        <div id='chartdiv' style={{ width: '1000px', height: '600px' }} />
      );
}

export default WorldMap
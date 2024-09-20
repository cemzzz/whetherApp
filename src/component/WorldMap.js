import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import capitalData from '../json/capitalData.json'

const WorldMap = ({setCity}) => {
    useEffect(() => {

        // 인스턴스 생성
        let map = am4core.create("chartdiv", am4maps.MapChart);
        map.geodata = am4geodata_worldLow;
        map.projection = new am4maps.projections.Miller();
    
        // 다각형 시리즈 생성
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;
        map.series.push(polygonSeries);

        // 툴팁 색상 지정
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#414156");

        // hover 이벤트
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#526156");
    
         // 국가 클릭 시 이벤트 핸들러
        polygonTemplate.events.on("hit", function(event) {
          const countryName = event.target.dataItem.dataContext.name;
          const countryInfo = capitalData.find(c => c.country === countryName);
          if (countryInfo) {
            setCity(countryInfo.capital);  // 해당 국가의 수도를 city로 설정
          }
        });

        return () => {
          map.dispose();
        };
      }, [setCity]);
    
      return (
        <div id='chartdiv' style={{ width: '1000px', height: '600px' }} />
      );
}

export default WorldMap
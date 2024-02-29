/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
// import "../../node_modules/ol-layerswitcher/dist/ol-layerswitcher.css";
import LayerGroup from 'ol/layer/Group';
import LayerTile from 'ol/layer/Tile';
import SourceOSM from 'ol/source/OSM';
import LayerSwitcher from 'ol-layerswitcher';
import React, { useEffect } from 'react';
import { XYZ } from 'ol/source';
import { useLocation } from 'react-router-dom';

// const mapboxOutdoors = new MapboxVector({
//   styleUrl: 'mapbox://styles/geovation/ckpicg3of094w17nyqyd2ziie',
//   accessToken: 'pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
// });
const osm = (visible) =>
  new LayerTile({
    title: 'OSM',
    type: 'base',
    visible: visible === 'osm',
    source: new SourceOSM(),
  });
const none = (visible) =>
  new LayerTile({
    title: 'None',
    type: 'base',
    visible: visible === 'none',
    source: null,
  });
const bingMaps = (visible) =>
  new LayerTile({
    title: 'Satellite',
    type: 'base',
    visible: visible === 'satellite',
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    }),
    // source: new BingMaps({
    //   key: 'AoTlmaazzog43ImdKts9HVztFzUI4PEOT0lmo2V4q7f20rfVorJGAgDREKmfQAgd',
    //   imagerySet: 'Aerial',
    //   // use maxZoom 19 to see stretched tiles instead of the BingMaps
    //   // "no photos at this zoom level" tiles
    //   maxZoom: 19,
    //   crossOrigin: 'Anonymous',
    // }),
  });
const mapboxMap = (visible) =>
  new LayerTile({
    title: 'Mapbox Light',
    type: 'base',
    visible: visible === 'mapbox',
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/nishon-naxa/ckgkuy7y08rpi19qk46sces9c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaG9uLW5heGEiLCJhIjoiY2xhYnhwbzN0MDUxYTN1bWhvcWxocWlpaSJ9.0FarR4aPxb7F9BHP31msww',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });
const mapboxOutdoors = (visible) =>
  new LayerTile({
    title: 'Mapbox Outdoors',
    type: 'base',
    visible: visible === 'outdoors',
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      // url:
      //   'https://api.mapbox.com/styles/v1/geovation/ckpicg3of094w17nyqyd2ziie/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      url: 'https://api.mapbox.com/styles/v1/nishon-naxa/ckgjcanml7alo19qki5fu694f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaG9uLW5heGEiLCJhIjoiY2xhYnhwbzN0MDUxYTN1bWhvcWxocWlpaSJ9.0FarR4aPxb7F9BHP31msww',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const topoMap = (visible = false) =>
  new LayerTile({
    title: 'Topo Map',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const monochrome = (visible = false) =>
  new LayerTile({
    title: 'Monochrome',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/geovation/ckqxdp7rd0t5d17lfuxm259c7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      layer: 'topomap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const monochromeMidNight = (visible = false) =>
  new LayerTile({
    title: 'Monochrome Midnight',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/geovation/ckqxdsqu93r0417mcbdc102nb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      layer: 'topomap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const LayerSwitcherControl = ({ map, visible = 'osm' }) => {
  useEffect(() => {
    if (!map) return;

    const baseMaps = new LayerGroup({
      title: 'Base maps',
      layers: [bingMaps(visible), osm(visible), mapboxMap(visible), mapboxOutdoors(visible), none(visible)],
    });

    const layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'group',
    });
    map.addLayer(baseMaps);
    map.addControl(layerSwitcher);
    // eslint-disable-next-line consistent-return
    return () => {
      map.removeLayer(baseMaps);
    };
  }, [map, visible]);

  const location = useLocation();
  useEffect(() => {
    const layerSwitcher = document.querySelector('.layer-switcher');
    if (layerSwitcher) {
      const layerSwitcherButton = layerSwitcher.querySelector('button');
      if (layerSwitcherButton) {
        layerSwitcherButton.style.width = '38px';
        layerSwitcherButton.style.height = '38px';
      }
      layerSwitcher.style.backgroundColor = 'white';
      layerSwitcher.style.display = 'flex';
      layerSwitcher.style.justifyContent = 'center';
      layerSwitcher.style.alignItems = 'center';
    }
    if (
      location.pathname.includes('project_details') ||
      location.pathname.includes('upload-area') ||
      location.pathname.includes('select-category') ||
      location.pathname.includes('data-extract') ||
      location.pathname.includes('split-tasks')
    ) {
      const olZoom = document.querySelector('.ol-zoom');
      if (olZoom) {
        olZoom.style.display = 'none';
      }
      if (layerSwitcher && location.pathname.includes('project_details')) {
        layerSwitcher.style.right = '14px';
        layerSwitcher.style.top = '300px';
        layerSwitcher.style.zIndex = '1000';
      }
    }
  }, [map]);

  return null;
};

export default LayerSwitcherControl;

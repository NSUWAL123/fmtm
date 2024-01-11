function checkWGS84Projection(geojson) {
  try {
    for (const feature of geojson.features) {
      const coordinates = feature.geometry.coordinates.flat(Infinity);
      if (coordinates[1] < -90 || coordinates[1] > 90 || coordinates[0] < -180 || coordinates[0] > 180) {
        return false; // Coordinates are out of WGS 84 range
      }
    }
    return true; // All coordinates are within WGS 84 range
  } catch (error) {
    return false;
  }
}

export { checkWGS84Projection };

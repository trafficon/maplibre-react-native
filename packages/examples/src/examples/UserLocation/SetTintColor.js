import MapLibreGL from "@maplibre/maplibre-react-native";
import React from "react";

import sheet from "../../styles/sheet";
import TabBarPage from "../common/TabBarPage";

const COLOR = ["red", "yellow", "green"];
const OPTIONS = [{ label: "red" }, { label: "yellow" }, { label: "green" }];

class SetTintColor extends React.Component {
  state = { tintColor: COLOR[0] };

  onTintColorChange = (index) => {
    this.setState({ tintColor: COLOR[index] });
  };

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={OPTIONS}
        onOptionPress={this.onTintColorChange}
      >
        <MapLibreGL.MapView
          style={sheet.matchParent}
          tintColor={this.state.tintColor}
        >
          <MapLibreGL.Camera
            followZoomLevel={16}
            followUserMode="compass"
            followUserLocation
          />

          <MapLibreGL.UserLocation
            renderMode="native"
            androidRenderMode="compass"
          />
        </MapLibreGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetTintColor;

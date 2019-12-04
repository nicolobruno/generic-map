import React, { Component, Fragment } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

import ButtonContainer from "./components/ButtonContainer";
import { STYLES_MAP, ZOOM } from "./constants";
import { formatNumberDecimal } from "./utils";
import "./styles.css";

class Map extends Component {
  state = { zoom: 2 };

  handleZoomChange = zoom => this.setState({ zoom });

  handleZoomIn = () => this.handleZoomChange(this.state.zoom + ZOOM);

  handleZoomOut = () => this.handleZoomChange(this.state.zoom - ZOOM);

  handleResetZoom = () => this.setState({ zoom: 2 });

  render() {
    const { width, height, center, scale, currency, map } = this.props.data;
    console.log(map);
    return (
      <Fragment>
        <ButtonContainer
          handleResetZoom={this.handleResetZoom}
          handleZoomIn={this.handleZoomIn}
          handleZoomOut={this.handleZoomOut}
        />
        <hr />
        <ComposableMap
          projectionConfig={{ scale }}
          width={width}
          height={height}
        >
          <ZoomableGroup zoom={this.state.zoom} center={center}>
            {map && (
              <Geographies geography={map}>
                {(geographies, projection) =>
                  geographies.map(geography => {
                    const geographyValue = `${currency} ${formatNumberDecimal(
                      geography.properties.VALUE
                    )}`;
                    return (
                      <Geography
                        key={geography.properties.NAME}
                        data-tip={`${
                          geography.properties.NAME
                        } ${geographyValue}`}
                        geography={geography}
                        projection={projection}
                        precision={0.5}
                        style={{
                          default: STYLES_MAP.default,
                          hover: STYLES_MAP.hover,
                          pressed: STYLES_MAP.pressed
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            )}
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip />
      </Fragment>
    );
  }
}

Map.defaultProps = {
  width: 600,
  height: 500,
  center: 0,
  scale: 350,
  zoom: 0,
  currency: ""
};

Map.propTypes = {
  data: PropTypes.object
};

export default Map;

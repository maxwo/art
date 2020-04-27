import React, { useState } from "react";
import PropTypes from "prop-types";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const range = 14;

const abs = () => Math.abs;
const regularize = (min, max) => {
  const multiplier = Math.sign(max - min);
  const range = max - min;
  return x => {
    if (x < multiplier * min) {
      return 0;
    }
    if (x > multiplier * max) {
      return 1;
    }
    return (multiplier * (x - min)) / range;
  };
};
const translate = (factor, min = factor / 2) => x => factor * x + min;
const sigmoid = () => x => 1 / (1 + Math.pow(Math.E, -x));

const FadingComponent = ({ children, fadingMethod }) => {
  const [opacity, setOpacity] = useState(1);

  useScrollPosition(
    ({ currPos }) => {
      console.log(currPos.y, fadingMethod(currPos.y));
      setOpacity(fadingMethod(currPos.y));
    },
    [opacity]
  );

  return (
    <div className="fadingcomponent" style={{ opacity }}>
      {children}
    </div>
  );
};

FadingComponent.propTypes = {
  fadingMethod: PropTypes.func
};

const defaultRegularization = regularize(-600, -100);
const defaultTranslation = translate(10, -5);
const defaultOperator = sigmoid();

FadingComponent.defaultProps = {
  fadingMethod: x =>
    defaultOperator(defaultTranslation(defaultRegularization(x)))
};

export default FadingComponent;

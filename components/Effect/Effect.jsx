import { useState, useEffect, useRef } from "react";
import "animate.css";
import { noop } from "../../src/util";

const DEFAULT_EFFECT = "headShake";
const DEFAULT_DURATION = 1122;
//
// usage
{/* <Effect 
  effect="flip" 
  isActive={flag} 
  onEnd={callback} 
  duration={1122}>
  <button>ok</button>
</Effect> */}
//
export const EFFECTS = {
  // @@Attention seekers
  // bounce
  // flash
  // pulse
  // rubberBand
  // shakeX
  // shakeY
  // headShake
  // swing
  // tada
  // wobble
  // jello
  // heartBeat
  // // @@Back entrances
  // backInDown
  // backInLeft
  // backInRight
  // backInUp
  // // @@Back exits
  // backOutDown
  // backOutLeft
  // backOutRight
  // backOutUp
  // // @@Bouncing entrances
  // bounceIn
  // bounceInDown
  // bounceInLeft
  // bounceInRight
  // bounceInUp
  // // @@Bouncing exits
  // bounceOut
  // bounceOutDown
  // bounceOutLeft
  // bounceOutRight
  // bounceOutUp
  // // @@Fading entrances
  // fadeIn
  // fadeInDown
  // fadeInDownBig
  // fadeInLeft
  // fadeInLeftBig
  // fadeInRight
  // fadeInRightBig
  // fadeInUp
  // fadeInUpBig
  // fadeInTopLeft
  // fadeInTopRight
  // fadeInBottomLeft
  // fadeInBottomRight
  // // @@Fading exits
  // fadeOut
  // fadeOutDown
  // fadeOutDownBig
  // fadeOutLeft
  // fadeOutLeftBig
  // fadeOutRight
  // fadeOutRightBig
  // fadeOutUp
  // fadeOutUpBig
  // fadeOutTopLeft
  // fadeOutTopRight
  // fadeOutBottomRight
  // fadeOutBottomLeft
  // // @@Flippers
  // flip
  // flipInX
  // flipInY
  // flipOutX
  // flipOutY
  // // @@Lightspeed
  // lightSpeedInRight
  // lightSpeedInLeft
  // lightSpeedOutRight
  // lightSpeedOutLeft
  // // @@Rotating entrances
  // rotateIn
  // rotateInDownLeft
  // rotateInDownRight
  // rotateInUpLeft
  // rotateInUpRight
  // // @@Rotating exits
  // rotateOut
  // rotateOutDownLeft
  // rotateOutDownRight
  // rotateOutUpLeft
  // rotateOutUpRight
  // // @@Specials
  // hinge
  // jackInTheBox
  // rollIn
  // rollOut
  // // @@Zooming entrances
  // zoomIn
  // zoomInDown
  // zoomInLeft
  // zoomInRight
  // zoomInUp
  // // @@Zooming exits
  // zoomOut
  // zoomOutDown
  // zoomOutLeft
  // zoomOutRight
  // zoomOutUp
  // // @@Sliding entrances
  // slideInDown
  // slideInLeft
  // slideInRight
  // slideInUp
  // // @@Sliding exits
  // slideOutDown
  // slideOutLeft
  // slideOutRight
  // slideOutUp
};

export default function Effect({
  // bool
  isActive,

  // string
  effect = DEFAULT_EFFECT,

  // [ms]
  duration = DEFAULT_DURATION,

  // callback
  onEnd = noop,

  // content
  children,

  // any
  ...rest
}) {
  //
  const [isEnded, setIsEnded] = useState(true);
  const refDiv = useRef();

  useEffect(() => {
    if (!isActive) return;
    if (!isEnded) return;

    setIsEnded(false);

    animatecss_(refDiv.current, effect, duration).then(onend_);
  }, [isActive]);

  return (
    <div ref={refDiv} {...rest}>
      {children}
    </div>
  );

  function onend_(...args) {
    setIsEnded(true);
    return onEnd.apply(this, args);
  }
}

//
// helpers
function animatecss_(node, animation, duration) {
  // We create a Promise and return it
  return new Promise((resolve, _r) => {
    const animation_ = `animate__${animation}`;
    //
    node.addEventListener("animationend", end_, { once: true });
    node.style.setProperty("--animate-duration", `${duration / 1000}s`);
    //
    // trigger animation
    node.classList.add("animate__animated", animation_);
    //
    // @cleanup
    function end_(evt) {
      evt.stopPropagation();
      node.classList.remove("animate__animated", animation_);
      resolve(evt);
    }
  });
}

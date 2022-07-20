import React, { createContext, useContext } from "react";
import { motion, useDragControls } from "framer-motion";
import { useStateSwitch } from "../../src/hooks";
import modcss from "./Drag.module.css";


const DragContext = createContext();
//
const Drag = ({ classDrag = "drag", className = "", children, ...rest }) => {
  const { isActive: isDrag$, toggle: toggleIsDrag } = useStateSwitch();
  const dragControls = useDragControls();
  return (
      <DragContext.Provider value={{ dragControls }}>
      <motion.div
        // whileDrag: VariantLabels | TargetAndTransition
        // drag: boolean | "x" | "y"
        // dragControls: DragControls
        // dragConstraints: false | Partial<BoundingBox2D> | RefObject<Element>
        // dragElastic: DragElastic 0 | 1
        // dragSnapToOrigin: boolean
        // dragMomentum: boolean
        // dragListener: boolean
        // dragTransition: InertiaOptions
        // dragPropagation: boolean
        //
        // onDrag(event, info): void
        // onDragStart(event, info): void
        // onDragEnd(event, info): void
        // onDirectionLock(axis): void
        drag
        dragListener={false}
        dragControls={dragControls}
        dragMomentum={false}
        className={`${modcss.drag} ${className} ${
          isDrag$ ? `${modcss.dragIsDragging} ${classDrag}` : ""
        }`}
        onDragStart={toggleIsDrag.on}
        onDragEnd={toggleIsDrag.off}
        // dragConstraints={null}
        {...rest}
      >
        {children}
      </motion.div>
    </DragContext.Provider>
  );
};

const DragHandle = ({ children, ...rest }) => {
  const { dragControls } = useContext(DragContext);

  return (
    <div onPointerDown={(e) => dragControls.start(e)} {...rest}>
      {children}
    </div>
  );
};

Drag.Handle = DragHandle;

//

export default Drag;

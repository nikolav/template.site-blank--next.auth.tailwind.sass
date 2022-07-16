import { useMemo, useState } from "react";
import Details from "../Details/Details";
import { filter, map, reduce } from "../../src/util";

export default function Accordion({
  //
  // open tab.key @mount
  active = null,
  //
  duration = 0.12,
  //
  // keep tabs open
  expanded = false,
  //
  // flag accordion children to render
  item = false,
  //
  children,
  //
  ...rest
}) {
  const items = filter(children, (node) => node.props.item);
  const allClosed = useMemo(
    () =>
      reduce(
        items,
        (tabs, node) => {
          tabs[node.key] = false;
          return tabs;
        },
        {}
      ),
    [items]
  );
  const [tabs, setTabs] = useState(
    reduce(
      items,
      (tabs, node, _i, _coll) => {
        const { key } = node;
        tabs[key] = active === key;
        return tabs;
      },
      {}
    )
  );
  //
  return (
    !item && (
      <section className="m-0 p-0" {...rest}>
        {map(items, (node) => (
          <Details
            header={
              <div
                onClick={() => {
                  if (expanded) {
                    setTabs((tabs) => ({
                      ...tabs,
                      [node.key]: !tabs[node.key],
                    }));
                    return;
                  }
                  //
                  setTabs({
                    ...allClosed,
                    [node.key]: !tabs[node.key],
                  });
                }}
              >
                {node.props.header}
              </div>
            }
            isActive={true === tabs[node.key]}
            key={node.key}
            durationIn={duration}
            durationOut={duration}
            spring={false}
          >
            {node.props.children}
          </Details>
        ))}
      </section>
    )
  );
}

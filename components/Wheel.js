import { useState } from "react";

export default function Wheel({ prizes, getPrizeInfo }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const spinning = selectedItem !== null ? "spinning" : "";

  const wheelVars = {
    "--nb-items": prizes.length,
    "--selected-item": selectedItem,
  };

  const selectItem = () => {
    const selectedItem = Math.floor(Math.random() * prizes.length + 1);
    setSelectedItem(selectedItem);
    getPrizeInfo(selectedItem);

    setTimeout(() => {
      setSelectedItem(null);
    }, 5700);
  };

  return (
    <div className="wheel-wrapper ">
      <div className="arrow"></div>
      <div className="wheel-container" onClick={selectItem}>
        <div className={`wheel ${spinning}`} style={wheelVars}>
          {prizes.map((item) => (
            <div
              className="wheel-segment "
              key={item.id}
              style={{ "--item-nb": item.id, "--item-color": item.color }}
            >
              <div className="rotate-180">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import React from "react";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, image } = data;
  const src = imageUrl || image;

  if (!src) return null;

  return (
    <>
      <div id="window-header">
        <WindowControlls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="preview">
        <img
          src={src}
          alt={name}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;

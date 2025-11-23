import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data;
  const imageSrc = image || imageUrl;

  return (
    <>
      <div id="window-header">
        <WindowControlls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white p-6 space-y-4">
        {imageSrc && (
          <div className="mb-4">
            <img
              src={imageSrc}
              alt={name}
              className="w-full max-h-[40vh] object-contain rounded"
            />
          </div>
        )}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {Array.isArray(description) &&
          description.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-gray-700"
            >
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

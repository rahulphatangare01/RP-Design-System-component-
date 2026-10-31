/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Typography } from "../../components/foundation/Typography";

// import { PreviewLayout } from "../layout/PreviewLayout";

// export const TypographyPreview = () => {
//   return (
//     <PreviewLayout>
//       <Typography variant="display">Display</Typography>

//       <Typography variant="h1">H1</Typography>

//       <Typography variant="h2">H2</Typography>

//       <Typography variant="h3">H3</Typography>

//       <Typography variant="body1">Body1</Typography>

//       <Typography variant="body2">Body2</Typography>
//     </PreviewLayout>
//   );
// };
import { useState } from "react";

import { Typography } from "../../components/foundation/Typography";

import { PreviewLayout } from "../layout/PreviewLayout";

export const TypographyPreview = () => {
  const [variant, setVariant] = useState("body1");

  const [color, setColor] = useState("#ffffff");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgroundColor, setBackgroundColor] = useState("");

  const [fontSize, setFontSize] = useState("");

  const [fontWeight, setFontWeight] = useState("400");

  const [lineHeight, setLineHeight] = useState("");

  const [letterSpacing, setLetterSpacing] = useState("");

  const [textTransform, setTextTransform] = useState("none");

  const [textDecoration, setTextDecoration] = useState("none");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [align, setAlign] = useState("left");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [truncate, setTruncate] = useState(false);

  return (
    <PreviewLayout>
      <Typography variant="h1">Typography Component</Typography>

      {/* ========================= */}
      {/* Variants */}
      {/* ========================= */}

      <section style={{ marginTop: "40px" }}>
        <Typography variant="h3">Variants</Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Typography variant="display">Display Variant</Typography>

          <Typography variant="h1">H1 Variant</Typography>

          <Typography variant="h2">H2 Variant</Typography>

          <Typography variant="h3">H3 Variant</Typography>

          <Typography variant="h4">H4 Variant</Typography>

          <Typography variant="h5">H5 Variant</Typography>

          <Typography variant="h6">H6 Variant</Typography>

          <Typography variant="body1">Body1 Variant</Typography>

          <Typography variant="body2">Body2 Variant</Typography>

          <Typography variant="caption">Caption Variant</Typography>

          <Typography variant="label">Label Variant</Typography>
        </div>
      </section>

      {/* ========================= */}
      {/* Colors */}
      {/* ========================= */}

      <section style={{ marginTop: "60px" }}>
        <Typography variant="h3">Color Testing</Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <Typography color="#3B82F6">Blue Text</Typography>

          <Typography color="#22C55E">Green Text</Typography>

          <Typography color="#EF4444">Red Text</Typography>

          <Typography color="#ffffff" backgroundColor="#2563EB">
            Background Color Example
          </Typography>
        </div>
      </section>

      {/* ========================= */}
      {/* Transform */}
      {/* ========================= */}

      <section style={{ marginTop: "60px" }}>
        <Typography variant="h3">Transform & Decoration</Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <Typography textTransform="uppercase">uppercase text</Typography>

          <Typography textTransform="lowercase">LOWERCASE TEXT</Typography>

          <Typography textTransform="capitalize">capitalize text</Typography>

          <Typography textDecoration="underline">Underline Text</Typography>

          <Typography textDecoration="line-through">
            Line Through Text
          </Typography>
        </div>
      </section>

      {/* ========================= */}
      {/* Alignment */}
      {/* ========================= */}

      <section style={{ marginTop: "60px" }}>
        <Typography variant="h3">Alignment</Typography>

        <Typography align="left">Left Align</Typography>

        <Typography align="center">Center Align</Typography>

        <Typography align="right">Right Align</Typography>
      </section>

      {/* ========================= */}
      {/* Truncate */}
      {/* ========================= */}

      <section style={{ marginTop: "60px" }}>
        <Typography variant="h3">Truncate</Typography>

        <div
          style={{
            width: "300px",
          }}
        >
          <Typography truncate>
            This is a very long text used to test truncate behavior inside
            Typography Component for enterprise design system.
          </Typography>
        </div>
      </section>

      {/* ========================= */}
      {/* Live Playground */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "60px",
          padding: "24px",
          border: "1px solid var(--rp-border)",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h3">Live Playground</Typography>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <div>
            <label>Variant</label>

            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
            >
              <option value="display">Display</option>

              <option value="h1">H1</option>

              <option value="h2">H2</option>

              <option value="h3">H3</option>

              <option value="h4">H4</option>

              <option value="h5">H5</option>

              <option value="h6">H6</option>

              <option value="body1">Body1</option>

              <option value="body2">Body2</option>

              <option value="caption">Caption</option>

              <option value="label">Label</option>
            </select>
          </div>

          <div>
            <label>Text Color</label>

            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div>
            <label>Font Size</label>

            <input
              placeholder="24px"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>

          <div>
            <label>Line Height</label>

            <input
              placeholder="32px"
              value={lineHeight}
              onChange={(e) => setLineHeight(e.target.value)}
            />
          </div>

          <div>
            <label>Font Weight</label>

            <input
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Letter Spacing</label>

            <input
              placeholder="2px"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(e.target.value)}
            />
          </div>

          <div>
            <label>Transform</label>

            <select
              value={textTransform}
              onChange={(e) => setTextTransform(e.target.value)}
            >
              <option value="none">None</option>

              <option value="uppercase">Uppercase</option>

              <option value="lowercase">Lowercase</option>

              <option value="capitalize">Capitalize</option>
            </select>
          </div>

          <div>
            <label>Decoration</label>

            <select
              value={textDecoration}
              onChange={(e) => setTextDecoration(e.target.value)}
            >
              <option value="none">None</option>

              <option value="underline">Underline</option>

              <option value="line-through">Line Through</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: "32px" }}>
          <Typography variant="h4">Preview</Typography>

          <div style={{ marginTop: "20px" }}>
            <Typography
              variant={variant as any}
              color={color}
              backgroundColor={backgroundColor}
              fontSize={fontSize || undefined}
              lineHeight={lineHeight || undefined}
              fontWeight={Number(fontWeight)}
              letterSpacing={letterSpacing || undefined}
              textTransform={textTransform as any}
              textDecoration={textDecoration as any}
              align={align as any}
              truncate={truncate}
            >
              Enterprise Inventory Typography Preview
            </Typography>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* Responsive */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "60px",
        }}
      >
        <Typography variant="h3">Responsive Testing</Typography>

        <Typography>Resize browser and verify:</Typography>

        <ul>
          <li>Mobile Layout</li>

          <li>Tablet Layout</li>

          <li>Desktop Layout</li>

          <li>Text Wrapping</li>

          <li>Truncate Behaviour</li>
        </ul>
      </section>
    </PreviewLayout>
  );
};

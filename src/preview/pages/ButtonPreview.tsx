import { useState } from "react";
import { Bold, Italic, Plus, Trash, Trash2, Underline } from "lucide-react";
import { Button } from "../../components/foundation/Button";
import { Typography } from "../../components/foundation/Typography";

import { PreviewLayout } from "../layout/PreviewLayout";

import styles from "../AppPreview.module.scss";
import { IconButton } from "../../components/foundation/Button/IconButton/IconButton";
import { ButtonGroup } from "../../components/foundation/Button/ButtonGroup/ButtonGroup";
import { ActionButton } from "../../components/foundation/Button/ActionButton/ActionButton";

export const ButtonPreview = () => {
  const [variant, setVariant] = useState("primary");

  const [size, setSize] = useState("md");

  const [hoverEffect, setHoverEffect] = useState("liftShadow");

  const [rounded, setRounded] = useState(false);

  const [fullWidth, setFullWidth] = useState(false);

  return (
    <PreviewLayout>
      <Typography variant="h1">Button Component</Typography>

      {/* ========================= */}
      {/* Variants */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <Typography variant="h3">Variants</Typography>

        <div
          className={styles.buttonRow}
          style={{
            marginTop: "20px",
          }}
        >
          <Button variant="primary">Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="success">Success</Button>

          <Button variant="warning">Warning</Button>

          <Button variant="danger">Danger</Button>

          <Button variant="outline">Outline</Button>

          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* ========================= */}
      {/* Sizes */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <Typography variant="h3">Sizes</Typography>

        <div
          className={styles.buttonRow}
          style={{
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Button size="xs">XS</Button>

          <Button size="sm">SM</Button>

          <Button size="md">MD</Button>

          <Button size="lg">LG</Button>

          <Button size="xl">XL</Button>
        </div>
      </section>

      {/* ========================= */}
      {/* States */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <Typography variant="h3">States</Typography>

        <div
          className={styles.buttonRow}
          style={{
            marginTop: "20px",
          }}
        >
          <Button>Default</Button>

          <Button loading>Loading</Button>

          <Button disabled>Disabled</Button>

          <Button rounded>Rounded</Button>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      {/* ========================= */}
      {/* Hover Effects */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <Typography variant="h3">Hover Effects</Typography>

        <div
          className={styles.buttonRow}
          style={{
            marginTop: "20px",
          }}
        >
          <Button hoverEffect="none">None</Button>

          <Button hoverEffect="lift">Lift</Button>

          <Button hoverEffect="scale">Scale</Button>

          <Button hoverEffect="glow">Glow</Button>

          <Button hoverEffect="shadow">Shadow</Button>

          <Button hoverEffect="liftShadow">Lift Shadow</Button>

          <Button hoverEffect="borderGlow">Border Glow</Button>

          <Button hoverEffect="press">Press</Button>
        </div>

        <div
          className={styles.buttonRow}
          style={{
            marginTop: "20px",
          }}
        >
          <Button leftIcon={<span>➕</span>}>Add Product</Button>
          <Button rightIcon={<span>➡️</span>}>Continue</Button>
          <Button iconOnly leftIcon={<span>🗑️</span>} />
          <Button leftIcon={<span>➕</span>} iconSize="24px">
            Add Product
          </Button>
          <Button leftIcon={<Plus />} variant="outline">
            Add Product
          </Button>
        </div>
        <section style={{ marginTop: 40 }}>
          <Typography variant="h3">Width System</Typography>

          <div className={styles.buttonRow} style={{ marginTop: 20 }}>
            <Button width="120px">120px</Button>

            <Button width="200px">200px</Button>

            <Button minWidth="250px">Min Width</Button>

            <Button width="100%">Full Width Custom</Button>

            <Button iconOnly ariaLabel="Delete Product" leftIcon={<Trash />} />
            <IconButton icon={<span>🗑️</span>} ariaLabel="Delete Product" />
            <ButtonGroup>
              <Button>Save</Button>

              <Button>Cancel</Button>
            </ButtonGroup>
          </div>
          <Typography variant="h2" style={{ marginTop: "20px" }}>
            {" "}
            Action Button{" "}
          </Typography>
          <div className={styles.buttonRow} style={{ marginTop: 20 }}>
            <ActionButton action="add">Product</ActionButton>
            <ActionButton action="add" variant="outline">
              Product
            </ActionButton>
            <ActionButton action="delete" variant="ghost">
              Product
            </ActionButton>
            <ActionButton action="download" rounded>
              Report
            </ActionButton>
            <ActionButton action="export" size="lg">
              Excel
            </ActionButton>
            {/* <ActionButton action="add" fullWidth>
              Add Product
            </ActionButton> */}
            {/* <ActionButton action="delete" width="200px">
              Delete Product
            </ActionButton> */}
          </div>
          <Typography variant="h2" style={{ marginTop: "20px" }}>
            {" "}
            Icon Button{" "}
          </Typography>
          <div className={styles.buttonRow} style={{ marginTop: 20 }}>
            <IconButton icon={<Trash2 />} ariaLabel="Delete" />
            <IconButton icon={<Trash2 />} variant="danger" ariaLabel="Delete" />
            <IconButton
              icon={<Trash2 />}
              variant="outline"
              ariaLabel="Delete"
            />
            <IconButton icon={<Trash2 />} variant="ghost" ariaLabel="Delete" />
            <IconButton
              icon={<Trash2 />}
              size="lg"
              variant="danger"
              ariaLabel="Delete"
            />
            <IconButton
              icon={<Trash2 />}
              hoverEffect="liftShadow"
              variant="danger"
              ariaLabel="Delete"
            />
            <IconButton
              icon={<Trash2 />}
              width="60px"
              height="60px"
              ariaLabel="Delete"
            />
            <IconButton
              icon={<Trash2 />}
              shape="square"
              variant="outline"
              ariaLabel="Delete"
            />
          </div>
          <Typography variant="h2"> Group Button </Typography>
          <div className={styles.buttonRow} style={{ marginTop: 20 }}>
            <ButtonGroup>
              <Button>Save</Button>

              <Button>Cancel</Button>
            </ButtonGroup>
            <ButtonGroup attached>
              <Button>Save</Button>

              <Button>Cancel</Button>

              <Button>Delete</Button>
            </ButtonGroup>
            <ButtonGroup attached>
              <IconButton icon={<Bold />} ariaLabel="Bold" />

              <IconButton icon={<Italic />} ariaLabel="Italic" />

              <IconButton icon={<Underline />} ariaLabel="Underline" />
            </ButtonGroup>
            <ButtonGroup wrap gap="12px">
              <ActionButton action="add">Product</ActionButton>

              <ActionButton action="export">Excel</ActionButton>

              <ActionButton action="download">PDF</ActionButton>
            </ButtonGroup>
            <ButtonGroup align="center">
              <Button>Save</Button>

              <Button>Cancel</Button>
            </ButtonGroup>
          </div>
        </section>
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

        {/* Controls */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          {/* Variant */}

          <div>
            <label>Variant</label>

            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
              }}
            >
              <option value="primary">Primary</option>

              <option value="secondary">Secondary</option>

              <option value="success">Success</option>

              <option value="warning">Warning</option>

              <option value="danger">Danger</option>

              <option value="outline">Outline</option>

              <option value="ghost">Ghost</option>
            </select>
          </div>

          {/* Size */}

          <div>
            <label>Size</label>

            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
              }}
            >
              <option value="xs">XS</option>

              <option value="sm">SM</option>

              <option value="md">MD</option>

              <option value="lg">LG</option>

              <option value="xl">XL</option>
            </select>
          </div>

          {/* Hover */}

          <div>
            <label>Hover Effect</label>

            <select
              value={hoverEffect}
              onChange={(e) => setHoverEffect(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
              }}
            >
              <option value="none">None</option>

              <option value="lift">Lift</option>

              <option value="scale">Scale</option>

              <option value="glow">Glow</option>

              <option value="shadow">Shadow</option>

              <option value="liftShadow">Lift Shadow</option>

              <option value="borderGlow">Border Glow</option>

              <option value="press">Press</option>
            </select>
          </div>
        </div>

        {/* Checkboxes */}

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <label>
            <input
              type="checkbox"
              checked={rounded}
              onChange={() => setRounded(!rounded)}
            />
            Rounded
          </label>

          <label>
            <input
              type="checkbox"
              checked={fullWidth}
              onChange={() => setFullWidth(!fullWidth)}
            />
            Full Width
          </label>
        </div>

        {/* Preview */}

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Typography variant="h4">Preview</Typography>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Button
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              variant={variant as any}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              size={size as any}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              hoverEffect={hoverEffect as any}
              rounded={rounded}
              fullWidth={fullWidth}
            >
              Playground Button
            </Button>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* Responsive Test */}
      {/* ========================= */}

      <section
        style={{
          marginTop: "60px",
        }}
      >
        <Typography variant="h3">Responsive Testing</Typography>

        <Typography
          style={{
            marginTop: "12px",
          }}
        >
          Resize browser and verify:
        </Typography>

        <ul>
          <li>Mobile Layout</li>

          <li>Tablet Layout</li>

          <li>Desktop Layout</li>

          <li>Full Width Button</li>

          <li>Wrapping Behaviour</li>
        </ul>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button fullWidth>Responsive Full Width</Button>
        </div>
      </section>
    </PreviewLayout>
  );
};

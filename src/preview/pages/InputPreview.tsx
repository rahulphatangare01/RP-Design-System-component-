import { useState } from "react";

import { Input } from "../../components/foundation/Input";

import { Typography } from "../../components/foundation/Typography";

import { PreviewLayout } from "../layout/PreviewLayout";
import { Mail, Search, User } from "lucide-react";

export const InputPreview = () => {
  const [variant, setVariant] = useState("outlined");

  const [size, setSize] = useState("md");

  const [label, setLabel] = useState("Product Name");

  const [placeholder, setPlaceholder] = useState("Enter Product Name");

  const [helperText, setHelperText] = useState("Helper Text");

  const [disabled, setDisabled] = useState(false);

  const [readOnly, setReadOnly] = useState(false);

  const [fullWidth, setFullWidth] = useState(false);
  const [value, setValue] = useState("");
  return (
    <PreviewLayout>
      <Typography variant="h1">Input Component</Typography>

      {/* ====================== */}
      {/* Variants */}
      {/* ====================== */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <Typography variant="h3">Variants</Typography>

        <div
          style={{
            display: "grid",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Input
            label="Outlined"
            variant="outlined"
            placeholder="Outlined Input"
          />

          <Input label="Filled" variant="filled" placeholder="Filled Input" />

          <Input
            label="Flushed"
            variant="flushed"
            placeholder="Flushed Input"
          />
        </div>
      </section>

      {/* ====================== */}
      {/* Sizes */}
      {/* ====================== */}

      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">Sizes</Typography>

        <div
          style={{
            display: "grid",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Input size="xs" placeholder="XS Input" />

          <Input size="sm" placeholder="SM Input" />

          <Input size="md" placeholder="MD Input" />

          <Input size="lg" placeholder="LG Input" />

          <Input size="xl" placeholder="XL Input" />
        </div>
      </section>

      {/* ====================== */}
      {/* States */}
      {/* ====================== */}

      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">States</Typography>

        <div
          style={{
            display: "grid",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Input label="Default" placeholder="Default Input" />

          <Input disabled label="Disabled" placeholder="Disabled Input" />

          <Input readOnly label="Read Only" value="Read Only Value" />

          <Input helperText="Helper Text Example" placeholder="Helper Text" />
        </div>
      </section>

      {/* ====================== */}
      {/* Full Width */}
      {/* ====================== */}

      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">Full Width</Typography>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Input fullWidth placeholder="Full Width Input" />
        </div>
      </section>

      {/*  Validation Testing  */}
      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">Validation </Typography>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Input label="Email" state="error" errorMessage="Email is required" />
          <Input
            label="Email"
            state="success"
            successMessage="Email verified"
          />
          <Input
            label="Password"
            state="warning"
            warningMessage="Weak password"
          />
          <Input label="Product Name" required />
        </div>
      </section>

      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">Input With Icon </Typography>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Input leftIcon={<Search />} placeholder="Search Product" />

          <Input rightIcon={<User />} placeholder="User" />

          <Input type="password" showPasswordToggle />

          <Input
            value={value}
            clearable
            onChange={(e) => setValue(e.target.value)}
          />

          <Input
            state="error"
            leftIcon={<Mail />}
            errorMessage="Email Required"
          />
        </div>
      </section>
      {/* ====================== */}
      {/* Live Playground */}
      {/* ====================== */}

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
              <option value="outlined">Outlined</option>

              <option value="filled">Filled</option>

              <option value="flushed">Flushed</option>
            </select>
          </div>

          <div>
            <label>Size</label>

            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="xs">XS</option>

              <option value="sm">SM</option>

              <option value="md">MD</option>

              <option value="lg">LG</option>

              <option value="xl">XL</option>
            </select>
          </div>

          <div>
            <label>Label</label>

            <input value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>

          <div>
            <label>Placeholder</label>

            <input
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </div>

          <div>
            <label>Helper Text</label>

            <input
              value={helperText}
              onChange={(e) => setHelperText(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "24px",
            flexWrap: "wrap",
          }}
        >
          <label>
            <input
              type="checkbox"
              checked={disabled}
              onChange={() => setDisabled(!disabled)}
            />
            Disabled
          </label>

          <label>
            <input
              type="checkbox"
              checked={readOnly}
              onChange={() => setReadOnly(!readOnly)}
            />
            Read Only
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
            <Input
              variant={variant as any}
              size={size as any}
              label={label}
              placeholder={placeholder}
              helperText={helperText}
              disabled={disabled}
              readOnly={readOnly}
              fullWidth={fullWidth}
            />
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* Responsive Testing */}
      {/* ====================== */}

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

          <li>Full Width Behaviour</li>

          <li>Label Alignment</li>
        </ul>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Input
            fullWidth
            label="Responsive Input"
            placeholder="Resize Browser"
          />
        </div>
      </section>
    </PreviewLayout>
  );
};

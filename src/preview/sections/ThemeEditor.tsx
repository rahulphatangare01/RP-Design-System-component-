import { useState } from "react";

import { Button } from "../../components/foundation/Button";

import { useTheme } from "../../theme/hooks/useTheme";

export const ThemeEditor = () => {
  const { theme, updateTheme } = useTheme();

  const [json, setJson] = useState(JSON.stringify(theme, null, 2));

  const applyTheme = () => {
    try {
      updateTheme(JSON.parse(json));
    } catch {
      alert("Invalid JSON");
    }
  };

  return (
    <>
      <textarea
        rows={20}
        value={json}
        onChange={(e) => setJson(e.target.value)}
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      />

      <Button fullWidth onClick={applyTheme}>
        Apply Theme
      </Button>
    </>
  );
};

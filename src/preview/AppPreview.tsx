import { PreviewRoutes } from "./routes/PreviewRoutes";
export const AppPreview = () => {
  return <PreviewRoutes />;
};

// import styles from "./AppPreview.module.scss";
// import { Typography } from "../components/foundation/Typography";

// import { useTheme } from "../theme/hooks/useTheme";
// import { Button } from "../components/foundation/Button";

// export const AppPreview = () => {
//   const { mode, setMode, theme } = useTheme();

//   const handleThemeToggle = () => {
//     setMode(mode === "light" ? "dark" : "light");
//   };

//   return (
//     <div className={styles.previewContainer}>
//       <div className={styles.header}>
//         <Typography variant="h2" weight="bold">
//           RP Design System
//         </Typography>

//         <button className={styles.themeToggle} onClick={handleThemeToggle}>
//           Switch To {mode === "light" ? "Dark" : "Light"}
//         </button>
//       </div>

//       <Typography variant="body1">
//         Current Theme : <strong>{mode.toUpperCase()}</strong>
//       </Typography>

//       <div className={styles.section}>
//         <Typography variant="h4" weight="semibold">
//           Typography Preview
//         </Typography>

//         <Typography variant="display">Display Heading</Typography>

//         <Typography variant="h1">H1 Heading</Typography>

//         <Typography variant="h2">H2 Heading</Typography>

//         <Typography variant="body1">Body1 Text</Typography>

//         <Typography variant="body2">Body2 Text</Typography>

//         <Typography variant="caption">Caption Text</Typography>
//       </div>

//       <div className={styles.section}>
//         <Typography variant="h4">Theme Colors</Typography>

//         <div className={styles.themeInfo}>
//           <div className={styles.colorRow}>
//             <div
//               className={styles.colorBox}
//               style={{
//                 background: "var(--rp-primary)",
//               }}
//             />

//             <Typography>Primary</Typography>
//           </div>

//           <div className={styles.colorRow}>
//             <div
//               className={styles.colorBox}
//               style={{
//                 background: "var(--rp-secondary)",
//               }}
//             />

//             <Typography>Secondary</Typography>
//           </div>

//           <div className={styles.colorRow}>
//             <div
//               className={styles.colorBox}
//               style={{
//                 background: "var(--rp-success)",
//               }}
//             />

//             <Typography>Success</Typography>

//             <Button variant="warning">Warning</Button>
//           </div>
//         </div>
//       </div>

//       <div className={styles.section}>
//         <Typography variant="h4">Theme Information</Typography>

//         <Typography>Brand :{theme.brandName}</Typography>
//       </div>
//     </div>
//   );
// };

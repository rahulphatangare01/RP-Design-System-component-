import type { ReactNode } from "react";

import { Link } from "react-router-dom";

import styles from "./PreviewLayout.module.scss";

import { ThemeSwitcher } from "../sections/ThemeSwitcher";

import { ThemeEditor } from "../sections/ThemeEditor";

import { ThemeInfo } from "../sections/ThemeInfo";

interface Props {
  children: ReactNode;
}

export const PreviewLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h2>RP Design System</h2>

        <nav>
          <Link to="/">Dashboard</Link>

          <Link to="/typography">Typography</Link>

          <Link to="/button">Button</Link>
          <Link to="/input">Input</Link>
        </nav>

        <ThemeSwitcher />

        <ThemeInfo />

        <ThemeEditor />
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
};

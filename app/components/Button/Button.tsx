interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  as?: "button" | "a";
  href?: string;
}

import styles from "./button.module.scss";

export default function Button({
  children,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  if (as === "a" && href) {
    return (
      <a href={href} className={styles.myButton} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.myButton} {...props}>
      {children}
    </button>
  );
}

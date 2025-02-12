import styles from "@/styles/Button.module.css";

interface Props {
  title: string;
  disabledText?: string;
  onClick: () => void;
}

export default function Button({ title, disabledText, onClick }: Props) {
  return (
    <button
      className={styles.button}
      disabled={!!disabledText}
      title={disabledText}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

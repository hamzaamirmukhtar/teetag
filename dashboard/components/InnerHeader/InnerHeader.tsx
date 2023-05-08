import styles from "./InnerHeader.module.css";

interface InnerHeaderProps {
  title: string;
}
const InnerHeader = ({ title }: InnerHeaderProps) => {
  return (
    <div className={styles.header}>
      <h4 className="font-fugaz h5 uppercase">{title}</h4>
    </div>
  );
};

export default InnerHeader;

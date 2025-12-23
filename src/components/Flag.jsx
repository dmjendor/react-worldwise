import styles from "./Flag.module.css";

function Flag({ flag, flagStyles }) {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img
      className={`${styles.flag} ${styles[flagStyles]}`}
      src={`https://flagcdn.com/24x18/${countryCode}.png`}
      alt="flag"
      style={{ height: "18px", width: "24px" }}
    />
  );
}
export default Flag;

import styles from './app-input.module.scss';

interface IAppInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export const AppInput = ({ value, setValue, placeholder }: IAppInputProps) => {
  return (
    <input
      className={styles['app-input']}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

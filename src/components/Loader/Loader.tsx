import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles['lds-spinner']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

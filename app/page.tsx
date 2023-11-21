import Link from 'next/link';
import classes from './globals.module.css';

export default function Home() {
  return (
    <div className={classes.temporary}>
      <Link href='/ankieta'>Przejdź do ankiety</Link>
      <Link href='/admin'>Przejdź do panelu admina</Link>
    </div>
  );
}

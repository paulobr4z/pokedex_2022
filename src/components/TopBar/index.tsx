import Link from 'next/link';
import { ContainerTopBar } from './styles';

export function TopBar() {
  return(
    <ContainerTopBar>
      <main>
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <nav>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/search">
            <p>Search</p>
          </Link>
        </nav>
      </main>
    </ContainerTopBar>
  )
}

import Link from  'next/link';

function Nav() {
  return (
    <div>
      <div>
        <Link href="/sell">
          <a>Sell</a>
        </Link>  
      </div>
      <div>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </div>
    </div>
  )
}

export default Nav;

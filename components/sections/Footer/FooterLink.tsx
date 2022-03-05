import Link from 'next/link';

interface LinkProps {
  title: string;
  href: string;
}
export default function FooterLink(props: LinkProps) {
  const { title, href = '/' } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}

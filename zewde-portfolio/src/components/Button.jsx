export default function Button({ href, variant = 'primary', children, ...rest }) {
  const Tag = href ? 'a' : 'button'
  return <Tag href={href} className={`btn btn-${variant}`} {...rest}>{children}</Tag>
}

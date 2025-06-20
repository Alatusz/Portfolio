type TagProps = {
    label: string
}
const Tag = ({label}: TagProps) => {
  return (
    <div className="flex items-center justify-center p-1">{label}</div>
  )
}

export default Tag
interface Props {
  title: string
}

export default function Button({ title }: Props) {
  return (
    <button>{title}</button>
  );
}

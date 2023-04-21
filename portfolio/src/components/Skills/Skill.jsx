export default function Skill({ name, icon }) {
  const Icon = icon;
  return (
    <li>
      <Icon size={50} />
      <br />
      {name}
    </li>
  );
}

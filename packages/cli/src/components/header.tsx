export default function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <ascii-font font="tiny" text="Ameer" color="gray" />
        <ascii-font font="tiny" text="Code" />
      </box>
    </box>
  );
}

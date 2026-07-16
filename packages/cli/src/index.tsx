import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import Header from "./components/header";
import InputBar from "./components/input-bar";


function App() {
  return (
    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor="0D0D12"
      gap={2}
      height="100%"
      width="100%"
    >

    <Header/>
    <box width="100%">
      <InputBar/>
    </box>

    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);

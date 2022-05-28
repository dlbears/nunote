import "./styles.css";
import SheetMusic from "@slnsw/react-sheet-music";

export default function App() {
  return (
    <>
      <SheetMusic
        onClick={(ev) => {
          console.log("Click");
          console.dir(ev);
        }}
        onBeat={(ev) => {
          console.log("Click");
          console.dir(ev);
        }}
        onEvent={(ev) => {
          console.log("Click");
          console.dir(ev);
        }}
        notation="|EGB|"
      />
    </>
  );
}

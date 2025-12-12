import { KurakFamilyWrapped } from "./components/KurakFamilyWrapped";
import { KurakFamilyPrint } from "./components/KurakFamilyPrint";

// Toggle this to switch between print and website version
const showPrintVersion = false;

export default function App() {
  return showPrintVersion ? (
    <KurakFamilyPrint />
  ) : (
    <KurakFamilyWrapped />
  );
}
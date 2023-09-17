import { useFonts } from 'expo-font';
import { FontLoader } from './src/configs/FontLoader';
import NavigationRouter from './src/navigation/NavigationRouter';

export default function App() {

  const [fontsLoaded] = useFonts(FontLoader);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationRouter/>
  );
}


import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import tailwind from 'tailwindcss-react-native';

export default function App() {
  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white')}>
      <Text style={tailwind('text-3xl')}>aura 1</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  );
}

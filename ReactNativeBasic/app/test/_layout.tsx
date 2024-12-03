import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="about" options={{ title: 'Test-About' }} />
      <Tabs.Screen name="about2" options={{ title: 'Test-About2' }} />
    </Tabs>
  );
}
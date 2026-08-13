import React from 'react';
import { Flex, Layout, Segmented } from 'antd';

const { Header } = Layout;

const App: React.FC = () => {
  const [headerTheme, setHeaderTheme] = React.useState<'light' | 'dark'>('light');

  return (
    <Flex vertical gap="middle">
      <Segmented
        options={['light', 'dark'] as const}
        value={headerTheme}
        onChange={setHeaderTheme}
      />
      <Header
        theme={headerTheme}
        style={{
          textAlign: 'center',
        }}
      >
        Header
      </Header>
    </Flex>
  );
};

export default App;

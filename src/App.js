import React, { Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './pages/Homepage';
import theme from './theme/theme'
import { UserProvider } from "./contexts"
import Download from './components/Spinner';


function App() {

  return (
    <ChakraProvider theme={theme}  >
      <Suspense fallback={<Download />}>
        <UserProvider>
          <Homepage />
        </UserProvider>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;

import '@mantine/core/styles.css';
import './App.css';

import { Container, MantineProvider } from '@mantine/core';

import { TaskGroup } from './components/task-group/TaskGroup';

function App() {
  return (
    <>
      <MantineProvider>
        <Container fluid size="xl" className='main-content'>
          <TaskGroup></TaskGroup>
        </Container>
      </MantineProvider>
    </>
  )
}

export default App

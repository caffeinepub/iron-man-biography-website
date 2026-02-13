import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <QueryClientProvider client={queryClient}>
                <HomePage />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;


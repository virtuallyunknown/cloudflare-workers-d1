import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
};

const Example = () => {
    const [time, setTime] = useState(new Date());

    const { data, isLoading, isError } = useQuery({
        queryKey: ['dbData'],
        queryFn: async () => {
            const response = await fetch('https://cloudflare-workers-d1.virtuallyunknown.workers.dev/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <h1>Greetings</h1>
                <p>Current time: {time.toLocaleTimeString()}</p>
                <p>Current date: {time.toLocaleDateString()}</p>
            </div>
            <div>
                {isLoading ? <p>Loading data...</p> : null}
                {isError ? <p>Error loading data</p> : null}
                {data
                    ? (
                        <pre>
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    )
                    : null}
            </div>
        </>
    );
};
import { ErrorBoundary } from 'react-error-boundary';

const ErrorHandler = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        console.error(error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

const ErrorFallback = ({ error }) => (
  <div>
    <p>Something went wrong 😭</p>

    {error.message && <span>Here's the error: {error.message}</span>}
  </div>
);

export default ErrorHandler;

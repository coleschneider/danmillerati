import * as React from "react";

interface State {
    error: Error | null;
}

interface Props {
    children: React.ReactElement | React.ReactFragment[];
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidCatch(error: Error) {
        this.setState({
            error
        });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        if (error) {
            return (
                <div className="section-error">
                    <h2 test-id="text-error">Oh-no! Something went wrong</h2>
                </div>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

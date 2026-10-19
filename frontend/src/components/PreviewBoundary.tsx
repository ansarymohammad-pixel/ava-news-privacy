import { Component, type ReactNode } from "react";
interface Props {
  children: ReactNode;
  message: string;
  retry: string;
}
export default class PreviewBoundary extends Component<
  Props,
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div className="signal-card chart-placeholder" role="alert">
          <div>
            <p>{this.props.message}</p>
            <button
              className="button-text"
              onClick={() => window.location.reload()}
            >
              {this.props.retry}
            </button>
          </div>
        </div>
      );
    return this.props.children;
  }
}

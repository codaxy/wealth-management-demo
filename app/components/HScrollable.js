import { VDOM, Container, CSS } from 'cx/ui';

export class HScrollable extends Container {
    render(context, instance, key) {
        let { data } = instance;
        return (
            <HScrollableCmp key={key} className={data.classNames} style={data.style}>
                {this.renderChildren(context, instance)}
            </HScrollableCmp>
        );
    }
}

HScrollable.prototype.baseClass = 'hscrollable';
HScrollable.prototype.styled = true;

class HScrollableCmp extends VDOM.Component {
    render() {
        let { style, className, children } = this.props;
        return (
            <div
                ref={el => {
                    this.el = el;
                }}
                className={CSS.expand(className, this.state && this.state.fit && 'cxs-fit')}
                style={style}
            >
                {children}
            </div>
        );
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        let fit = this.el.scrollWidth <= this.el.clientWidth;
        if (!this.state || this.state.fit != fit)
            this.setState({
                fit,
            });
    }
}

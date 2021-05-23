import React from 'react';

class SkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.cbarRef = React.createRef();
        this.state = {
            percent: 0
        };
    }

    componentDidMount() {
        const circle = this.cbarRef.current;
        const r = circle.r.baseVal.value;
        const c = Math.PI * (r * 2);
        const percent = this.props.percent;
        const cbar = (100 - percent) / 100 * c;

        this.cbarRef.current.animate(
            [{ strokeDashoffset: c }, { strokeDashoffset: cbar }], { duration: 1000, easing: 'linear' }
        );

        var current = 0;
        var counter = setInterval(
            () => {
                current += 1;
                this.setState({
                    percent: current
                });

                if (current === this.props.percent) {
                    clearInterval(counter);
                }
            }, 10
        );
    }

    render() {
        const r = 45;
        const c = Math.PI * (r * 2);
        const percent = this.props.percent;
        const cbar = (100 - percent) / 100 * c;

        return (
            <li>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={r}></circle>
                    <circle className="cbar" cx="50" cy="50" r={r} strokeDashoffset={cbar} strokeDasharray={c} ref={this.cbarRef}></circle>
                </svg>
                <span>{this.props.name}</span>
                <small>{`${this.state.percent}%`}</small>
            </li>
        );
    }
}

export default SkillBar;
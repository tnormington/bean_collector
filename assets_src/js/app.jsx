const debug = true;

console.log('test');

class ButtonOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const options = this.props.options.map((option) => {
            return (
                <span 
                    key={option.toLowerCase()}
                    className={ option.toLowerCase() + " option"}>
                    {option}
                </span>
            )
        })
        
        return ( 
            <span className="options">
                {options}
            </span>
        )
    }
}


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipShown: false,
            options: this.props.options
        };
    }
    
    classNames() {
        return this.props.classes + ' button';
    }
    
    toggleTip(e) {
        e.stopPropagation();
        this.setState((prevState) => ({
            tipShown: !prevState.tipShown
        }))
    }
    
    costClassNames() {
        if(this.props.canAfford) {
            return 'cost';
        } else {
            return 'cost cannot-afford';
        }
    }
    
    
    
    
    render() {
        return (
            <button 
                className={this.classNames()} 
                onClick={this.props.onClick}
                disabled={!this.props.canAfford}
                >
                { this.props.cost &&
                    <span className={this.costClassNames()}>{this.props.cost}</span>
                }
                {this.props.text}
                { this.props.level &&
                    <span className="level">
                        Level: {((this.props.level - 1) / 0.05).toFixed() }
                    </span>
                }
                { this.props.options && 
                    <ButtonOptions options={this.props.options} />
                }
                { this.props.tip &&
                    <Tip 
                        tip={this.props.tip}
                        tipShown={this.state.tipShown}
                        onClick={(e) => this.toggleTip(e)}
                    />
                }
            </button>
        );
    }
}


class Tip extends React.Component {
    constructor(props) {
        super(props);
    }
    
    calculateContentClass() {
        if(this.props.tipShown) {
            return 'active tip-content';
        } else {
            return 'tip-content';
        }
    }
    
    calculateIconClass() {
        if(this.props.tipShown) {
            return 'tip-toggle fa fa-close';
        } else {
            return 'tip-toggle fa fa-info-circle';
        }
    }
    
    render() {
        return (
            <span className="tip">
                <i className={this.calculateIconClass()} onClick={ this.props.onClick }></i>
                <p className={ this.calculateContentClass()}>
                    {this.props.tip}
                </p>
            </span>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        if(debug) {
            this.state = {
                beans: 10000,
                bean_plants: 10000,
                bean_plant_level: 10,
                bps: null,
                bean_extract: 10000,
                bean_potion: 10000,
            }
        } else {
            this.state = {
                beans: 0,
                bean_plants: null,
                bean_plant_level: 1,
                bps: null,
                bean_extract: null,
                bean_potion: null,
            }
        }
    }
    
    incrementValue(i, value) {
        this.setState((prevState) => ({
            [value]: prevState[value] + i
        }))
    }
    
    decrementValue(i, value) {
        this.setState((prevState) => ({
            [value]: prevState[value] - i
        }))
    }
    
    upgradeCollector(collector, rate) {
        this.setState((prevState) => ({
            [collector]: (prevState[collector] + rate)
        }))
    }
    
    calculateBps() {
        let bps = 0;
        let bean_plants = 0;
        
        if(this.state.bean_plants !== null) {
            bean_plants = this.state.bean_plants;
        }
        bps += bean_plants * this.state.bean_plant_level;
        this.setState({
            bps: bps
        });
        return bps;
    }
    
    canIAfford(cost, item) {
        if(this.state[item] >= cost) {
            return true;
        } else {
            return false;
        }
    }
    
    componentDidMount() {
        console.log('component mounted!');
        setInterval(() => {
            this.setState((prevState) => ({
            beans: prevState.beans + this.calculateBps()/10,
        }))}, 100);
    }
    
    render() {
        
        return (
            <div className="game">
                <section className="game-details">
                    <div className="beans">
                        Beans: <span className="value">{this.state.beans.toFixed(2)}</span>
                    </div>
                    { this.state.bps !== null &&
                        <div className="bps">
                            BPS: <span className="value">{this.state.bps.toFixed(2)}</span>
                        </div>
                    }
                    { this.state.bean_plants !== null && 
                        <div className="bean-plants">
                            Bean Plants: <span className="value">{this.state.bean_plants}</span>
                        </div>
                    }
                    { this.state.bean_extract !== null && 
                        <div className="bean-extract">
                            Bean Extract: <span className="value">{this.state.bean_extract}</span>
                        </div>
                    }
                    { this.state.bean_potion !== null && 
                        <div className="bean-potions">
                            Bean Potion: <span className="value">{this.state.bean_potion}</span>
                        </div>
                    }
                </section>
                <section className="game-buttons">
                    <h2>Purchases</h2>
                    <Button 
                        onClick={() => {
                            this.incrementValue(1, 'beans');
                        }} 
                        text="Collect Beans"
                        classes="beans"
                        canAfford={true}
                    />
                    { this.state.beans !== null &&
                        <Button 
                            onClick={() => {
                                this.decrementValue(10, 'beans');
                                this.incrementValue(1, 'bean_plants');
                            }} 
                            text="Plant Beans"
                            cost="10 Beans"
                            classes="bean-plants"
                            tip="Bean Plants create 1 bean per second."
                            canAfford={this.canIAfford(10, 'beans')}
                        />
                    }
                    { this.state.bean_plants !== null && 
                        <Button 
                            onClick={() => {
                                this.decrementValue(5, 'bean_plants');
                                this.incrementValue(1, 'bean_extract');
                            }} 
                            text="Create Bean Extract"
                            cost="5 Bean Plants"
                            classes="bean-extract"
                            tip="Bean Extract is harvested from 5 bean plants, and used to create various potions."
                            canAfford={this.canIAfford(5, 'bean_plants')}
                        />
                    }
                    { this.state.bean_extract !== null && 
                        <Button 
                            onClick={() => {
                                this.decrementValue(5, 'bean_extract');
                                this.incrementValue(1, 'bean_potion');
                            }} 
                            text="Create Bean Potion"
                            cost="5 Bean Extract"
                            classes="bean-potion"
                            options={['Red', 'Blue', 'Green']}
                            tip="Bean Potions can be combined to create something magical."
                            canAfford={this.canIAfford(5, 'bean_extract')}
                        />
                    }
                </section>
                <section className="upgrades">
                    { this.state.bean_plants !== null && 
                        <h2>Upgrades</h2>
                    }
                    { this.state.bean_plants !== null && 
                        <Button
                            onClick={() => {
                                this.upgradeCollector('bean_plant_level', 0.05);
                                this.decrementValue(100, 'beans');
                            }}
                            text="Upgrade Bean Plants"
                            cost="100 Beans"
                            classes="upgrade-bean-plants"
                            tip="Increase Bean Plant collection rate by 5%."
                            canAfford={this.canIAfford(100, 'beans')}
                            level={this.state.bean_plant_level}
                        />
                    }
                </section>
            </div>
        )
    }
    
}

ReactDOM.render(
    <Game />,
    document.getElementById('app')
);

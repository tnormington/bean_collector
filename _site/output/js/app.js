const debug = false;

console.log('test');

class ButtonOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const options = this.props.options.map((option) => {
            return (
                React.createElement("span", {
                    key: option.toLowerCase(), 
                    className:  option.toLowerCase() + " option"}, 
                    option
                )
            )
        })
        
        return ( 
            React.createElement("span", {className: "options"}, 
                options
            )
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
            React.createElement("button", {
                className: this.classNames(), 
                onClick: this.props.onClick, 
                disabled: !this.props.canAfford
                }, 
                 this.props.cost &&
                    React.createElement("span", {className: this.costClassNames()}, this.props.cost), 
                
                this.props.text, 
                 this.props.level &&
                    React.createElement("span", {className: "level"}, 
                        "Level: ", ((this.props.level - 1) / 0.05).toFixed() 
                    ), 
                
                 this.props.options && 
                    React.createElement(ButtonOptions, {options: this.props.options}), 
                
                 this.props.tip &&
                    React.createElement(Tip, {
                        tip: this.props.tip, 
                        tipShown: this.state.tipShown, 
                        onClick: (e) => this.toggleTip(e)}
                    )
                
            )
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
            React.createElement("span", {className: "tip"}, 
                React.createElement("i", {className: this.calculateIconClass(), onClick:  this.props.onClick}), 
                React.createElement("p", {className:  this.calculateContentClass()}, 
                    this.props.tip
                )
            )
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
            React.createElement("div", {className: "game"}, 
                React.createElement("section", {className: "game-details"}, 
                    React.createElement("div", {className: "beans"}, 
                        "Beans: ", React.createElement("span", {className: "value"}, this.state.beans.toFixed(2))
                    ), 
                     this.state.bps !== null &&
                        React.createElement("div", {className: "bps"}, 
                            "BPS: ", React.createElement("span", {className: "value"}, this.state.bps.toFixed(2))
                        ), 
                    
                     this.state.bean_plants !== null && 
                        React.createElement("div", {className: "bean-plants"}, 
                            "Bean Plants: ", React.createElement("span", {className: "value"}, this.state.bean_plants)
                        ), 
                    
                     this.state.bean_extract !== null && 
                        React.createElement("div", {className: "bean-extract"}, 
                            "Bean Extract: ", React.createElement("span", {className: "value"}, this.state.bean_extract)
                        ), 
                    
                     this.state.bean_potion !== null && 
                        React.createElement("div", {className: "bean-potions"}, 
                            "Bean Potion: ", React.createElement("span", {className: "value"}, this.state.bean_potion)
                        )
                    
                ), 
                React.createElement("section", {className: "game-buttons"}, 
                    React.createElement("h2", null, "Purchases"), 
                    React.createElement(Button, {
                        onClick: () => {
                            this.incrementValue(1, 'beans');
                        }, 
                        text: "Collect Beans", 
                        classes: "beans", 
                        canAfford: true}
                    ), 
                     this.state.beans !== null &&
                        React.createElement(Button, {
                            onClick: () => {
                                this.decrementValue(10, 'beans');
                                this.incrementValue(1, 'bean_plants');
                            }, 
                            text: "Plant Beans", 
                            cost: "10 Beans", 
                            classes: "bean-plants", 
                            tip: "Bean Plants create 1 bean per second.", 
                            canAfford: this.canIAfford(10, 'beans')}
                        ), 
                    
                     this.state.bean_plants !== null && 
                        React.createElement(Button, {
                            onClick: () => {
                                this.decrementValue(5, 'bean_plants');
                                this.incrementValue(1, 'bean_extract');
                            }, 
                            text: "Create Bean Extract", 
                            cost: "5 Bean Plants", 
                            classes: "bean-extract", 
                            tip: "Bean Extract is harvested from 5 bean plants, and used to create various potions.", 
                            canAfford: this.canIAfford(5, 'bean_plants')}
                        ), 
                    
                     this.state.bean_extract !== null && 
                        React.createElement(Button, {
                            onClick: () => {
                                this.decrementValue(5, 'bean_extract');
                                this.incrementValue(1, 'bean_potion');
                            }, 
                            text: "Create Bean Potion", 
                            cost: "5 Bean Extract", 
                            classes: "bean-potion", 
                            options: ['Red', 'Blue', 'Green'], 
                            tip: "Bean Potions can be combined to create something magical.", 
                            canAfford: this.canIAfford(5, 'bean_extract')}
                        )
                    
                ), 
                React.createElement("section", {className: "upgrades"}, 
                     this.state.bean_plants !== null && 
                        React.createElement("h2", null, "Upgrades"), 
                    
                     this.state.bean_plants !== null && 
                        React.createElement(Button, {
                            onClick: () => {
                                this.upgradeCollector('bean_plant_level', 0.05);
                                this.decrementValue(100, 'beans');
                            }, 
                            text: "Upgrade Bean Plants", 
                            cost: "100 Beans", 
                            classes: "upgrade-bean-plants", 
                            tip: "Increase Bean Plant collection rate by 5%.", 
                            canAfford: this.canIAfford(100, 'beans'), 
                            level: this.state.bean_plant_level}
                        )
                    
                )
            )
        )
    }
    
}

ReactDOM.render(
    React.createElement(Game, null),
    document.getElementById('app')
);

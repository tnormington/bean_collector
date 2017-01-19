import React from 'react';
import Button from './Button.jsx';
import TriButton from './TriButton.jsx';
import Model from './Model.jsx';

const debug = false;



export default class Game extends React.Component {
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
                red_bean_potions: 1000,
                green_bean_potions: 1000,
                blue_bean_potions: 1000,
                black_bean_potions: 1000,
            }
        } else {
            this.state = {
                beans: 0,
                bean_plants: null,
                bean_plant_level: 1,
                bps: null,
                bean_extract: null,
                bean_potion: null,
                red_bean_potions: null,
                green_bean_potions: null,
                blue_bean_potions: null,
                black_bean_potions: null,
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

    toggleHelpMessages() {
        $('.tip-content').toggle();
    }

    render() {



        let mystery_bean_potion_available = false;
        if(
            this.state.red_bean_potions !== null
            && this.state.blue_bean_potions !== null
            && this.state.green_bean_potions !== null
            && this.state.black_bean_potions !== null
        ) {
            mystery_bean_potion_available = true;
        }

        return (
            <div className="game container">
                <section className="game_settings">
                  <Button
                    classes="button-icon-only"
                    icon="question-circle-o"
                    onClick={() => {
                        this.toggleHelpMessages()
                    }}
                    canAfford={true}
                  />
                </section>
                <section className="game-details">
                    <div className="beans detail">
                        Beans: <span className="value">{this.state.beans.toFixed(2)}</span>
                    </div>
                    { this.state.bps !== null &&
                        <div className="bps detail">
                            BPS: <span className="value">{this.state.bps.toFixed(2)}</span>
                        </div>
                    }
                    { this.state.bean_plants !== null &&
                        <div className="bean-plants detail">
                            Bean Plants: <span className="value">{this.state.bean_plants}</span>
                        </div>
                    }
                    { this.state.bean_extract !== null &&
                        <div className="bean-extract detail">
                            Bean Extract: <span className="value">{this.state.bean_extract}</span>
                        </div>
                    }
                    <h4>Potions</h4>
                    <div className="grid-4">
                        { this.state.red_bean_potions !== null &&
                            <div className="red-bean-potions">
                                Red: <span className="value">{this.state.red_bean_potions}</span>
                            </div>
                        }
                        { this.state.green_bean_potions !== null &&
                            <div className="green-bean-potions">
                                Green: <span className="value">{this.state.green_bean_potions}</span>
                            </div>
                        }
                        { this.state.blue_bean_potions !== null &&
                            <div className="blue-bean-potions">
                                Blue: <span className="value">{this.state.blue_bean_potions}</span>
                            </div>
                        }
                        { this.state.black_bean_potions !== null &&
                            <div className="black-bean-potions">
                                Black: <span className="value">{this.state.black_bean_potions}</span>
                            </div>
                        }
                    </div>
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
                        <section>
                            <h2>Potions</h2>
                            <div className="potions grid">
                            { this.state.bean_extract !== null &&
                                <Button
                                onClick={() => {
                                    this.decrementValue(5, 'bean_extract');
                                    this.incrementValue(1, 'red_bean_potions');
                                }}
                                text="Red"
                                classes="bean-potion button-small bean-potion--red"
                                tip="Red potions harness the power of the angry bean."
                                canAfford={this.canIAfford(5, 'bean_extract')}
                                />
                            }
                            { this.state.bean_extract !== null &&
                                <Button
                                onClick={() => {
                                    this.decrementValue(5, 'bean_extract');
                                    this.incrementValue(1, 'green_bean_potions');
                                }}
                                text="Green"
                                classes="bean-potion button-small bean-potion--green"
                                tip="Green potions harness the power of the mellow bean."
                                canAfford={this.canIAfford(5, 'bean_extract')}
                                />
                            }
                            { this.state.bean_extract !== null &&
                                <Button
                                onClick={() => {
                                    this.decrementValue(5, 'bean_extract');
                                    this.incrementValue(1, 'blue_bean_potions');
                                }}
                                text="Blue"
                                classes="bean-potion button-small bean-potion--blue"
                                tip="Blue potions harness the power of the magic bean."
                                canAfford={this.canIAfford(5, 'bean_extract')}
                                />
                            }
                            { this.state.bean_extract !== null &&
                                <Button
                                onClick={() => {
                                    this.decrementValue(5, 'bean_extract');
                                    this.incrementValue(1, 'black_bean_potions');
                                }}
                                text="Black"
                                classes="bean-potion button-small bean-potion--black"
                                tip="Black potions harness the power of the dark bean."
                                canAfford={this.canIAfford(5, 'bean_extract')}
                                />
                            }
                            { mystery_bean_potion_available &&
                                <Button
                                onClick={() => {
                                    this.decrementValue(5, 'bean_extract');
                                    this.incrementValue(1, 'mystery_bean_potion');
                                }}
                                text="Mystery"
                                classes="bean-potion button-small bean-potion--mystery"
                                tip="Mystery potions harness the power of the unknown."
                                canAfford={this.canIAfford(5, 'bean_extract')}
                                />
                            }
                            </div>
                        </section>
                    }
                </section>
                <section className="upgrades">
                    { this.state.bean_plants !== null &&
                        <div>
                            <h2>Upgrades</h2>
                            <div className="upgrade-group">
                                <section className="upgrade-group_controls">
                                    <Button
                                        onClick={() => {
                                            this.upgradeCollector('bean_plant_level', 0.05);
                                            this.decrementValue(100, 'beans');
                                        }}
                                        icon="plus"
                                        classes="button-icon-only"
                                        canAfford={this.canIAfford(100, 'beans')}
                                    />
                                    <Button
                                        onClick={() => {
                                            this.upgradeCollector('bean_plant_level', 0.05);
                                            this.decrementValue(100, 'beans');
                                        }}
                                        icon="minus"
                                        classes="button-icon-only"
                                        canAfford={this.canIAfford(100, 'beans')}
                                    />
                                </section>
                                <section className="upgrade-group_details">
                                    <div className="upgrade-group_details_desc">Upgrade Bean Plant Collection Rate by 5%</div>
                                    <div className="upgrade-group_details_cost">Cost 100 Beans</div>
                                    <div className="upgrade-group_details_level">
                                        Level
                                        <span className="value">
                                            {((this.state.bean_plant_level - 1) / 0.05).toFixed() }
                                        </span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    }
                </section>
            </div>
        )
    }

}

import React from 'react';
import Button from './Button.jsx';
import Model from './Model.jsx';
import UpgradeGroup from './UpgradeGroup.jsx';
import Accordion from './Accordion.jsx';
import Action from './Action.jsx';
import Detail from './Detail.jsx';
import ProgressBar from './ProgressBar.jsx';
import Modal from './Modal.jsx';

const debug = false;



export default class Game extends React.Component {
  constructor(props) {
    super(props);
    if(debug) {
      this.state = Model.stats_debug;
    } else {
      this.state = Model.stats_production;
    }
    window.onbeforeunload = () => {
      this.saveGame();
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

  upgradeCollector(rate, collector) {
    this.setState((prevState) => ({
      [collector]: (prevState[collector] + rate)
    }))
  }
  downgradeCollector(rate, collector) {
    this.setState((prevState) => ({
      [collector]: (prevState[collector] - rate)
    }))
  }

  calculateBps() {
    let bps = 0;
    let bean_plants = 0;

    // Currently the only thing pulling in beans are the bean plants
    if(this.state.bean_plants !== null) {
      bean_plants = this.state.bean_plants;
    }

    // Decrease bean collection rate in the winter
    if(this.state.season === 'Winter') {
      bean_plants = bean_plants/2;
    }


    bps += Math.floor(bean_plants) * this.state.bean_plant_level - (this.state.bean_planters * 5);
    this.setState({
      bps: bps
    });
    return bps;
  }


  canIAffordThese(items) {
    let canAfford = true;
    for(let item of items) {
      if(!this.canIAffordThis(item.cost, item.item)) {
        canAfford = false;
      }
    }

    return canAfford;
  }

  canIAffordThis(cost, item) {
    if(this.state[item] >= cost) {
      return true;
    } else {
      return false;
    }
  }


  // // Return the amount of beans for each render
  // calculateBeans(currentBeans) {
  //   let beans = beans + this.
  // }

  componentWillMount() {
    this.loadGame();
  }

  componentDidMount() {
    setInterval(() => {
      // console.log(this.state.bean_plants + this.state.bean_planters / 20);
      this.setState((prevState) => ({
        beans: prevState.beans + this.calculateBps()/10,
        bean_plants: (this.state.bean_plants) ? prevState.bean_plants + this.state.bean_planters / 200 : null,
        time: this.passTime(),
        season: this.getSeason(),
      }))
    }, Model.gameSettings.intervalTick);

  }

  // Return the current season as a string
  // Example: if time = 300, this would return "Summer"
  getSeason() {
    let season = 'Spring';
    const t = this.state.time;
    if (t >= 0 && t <= 250) {
      season = 'Spring';
      $('body').removeClass('summer fall winter').addClass('spring');
    } else if (t > 250 && t <= 500) {
      season = 'Summer';
      $('body').removeClass('spring fall winter').addClass('summer');
    } else if (t > 500 && t <= 750) {
      season = 'Fall';
      $('body').removeClass('summer spring winter').addClass('fall');
    } else if (t > 750 && t <= 1000) {
      season = 'Winter';
      $('body').removeClass('summer fall spring').addClass('winter');
    }
    return season;
  }

  // Returns the new time based on the intervalTick,
  // also starts a new year when needed
  passTime() {
    const time = this.state.time;
    const tick = Model.gameSettings.intervalTick;
    const newTime = Number(time + tick / 250);
    if(newTime > 1000) {
      return 0;
    } else {
      return newTime;
    }
  }
  //
  // toggleHelpMessages() {
  //   $('.tip-content').toggle();
  // }


  // Show information modal
  showInfo() {
    $('.modal.info').fadeIn('fast');
  }
  saveGame() {
    var gameStateObject = this.state;
    localStorage.setItem( 'gbc-save-01', JSON.stringify(gameStateObject) );
  }
  loadGame() {
    var savedGameState = JSON.parse(localStorage.getItem('gbc-save-01'));
    if(savedGameState) {
      this.setState(savedGameState);
    }
  }
  restartGame() {
    localStorage.removeItem('gbc-save-01');
    if(debug) {
      this.setState(Model.stats_debug);
    } else {
      this.setState(Model.stats_production);
    }
  }

  render() {
    let mystery_bean_potion_visible = false;
    let can_afford_mystery_bean_potion = false;
    if(
      this.state.red_bean_potions !== null
      || this.state.blue_bean_potions !== null
      || this.state.green_bean_potions !== null
      || this.state.black_bean_potions !== null
    ) {
      mystery_bean_potion_visible = true;
      if(
        this.state.red_bean_potions >= 1
        && this.state.blue_bean_potions >= 1
        && this.state.green_bean_potions >= 1
        && this.state.black_bean_potions >= 1
      ) {
        can_afford_mystery_bean_potion = true;
      }
    }

    return (
      <div className="game container">
        <Modal classes="info">
          <i className="fa fa-info-circle info-icon"></i><h3>The Great Bean Collector</h3>
          <p>
            This is a game about resource collection and management. The game is saved automatically in your browser cache, which means you will lose your save data if you clear it.
            <br/>
            <br/>
            Bean Plants are half as effective during the Winter season. Plan for this by stockpiling Beans near the end of Fall.
          </p>
        </Modal>
        <section className="game_settings">
          <Button
            classes="button-with-icon"
            icon="info"
            onClick={() =>{
              this.showInfo();
            }}
            canAfford={true}
            text="Info"
            />
          <Button
            classes="button-with-icon"
            icon="close"
            onClick={() =>{
              this.restartGame()
            }}
            canAfford={true}
            text="Restart"
            />
        </section>
        <Accordion
          open={true}
          headerText="Stats"
          hint="">
          <section className="game-details">
            <ProgressBar
              value={this.state.time}
              max="1000"
              tag={this.state.season}
              classes={this.state.season.toLowerCase().replace(' ', '-')}
              label="Progress through the year"
              />
            { this.state.beans !== null &&
              <Detail
                label="Beans"
                value={this.state.beans.toFixed(2)}
                />
            }
            { this.state.bps !== null &&
              <Detail
                label="Beans/Sec"
                value={this.state.bps.toFixed(2)}
                />
            }
            { this.state.bean_plants !== null &&
              <Detail
                label="Bean Plants"
                value={Math.floor(this.state.bean_plants)}
                />
            }
            { this.state.bean_planters !== null &&
              <Detail
                label="Bean Planters"
                value={this.state.bean_planters}
                />
            }
            { this.state.bean_extract !== null &&
              <Detail
                label="Bean Extract"
                value={this.state.bean_extract}
                />
            }
            { this.state.mystery_bean_plants !== null &&
              <Detail
                label="Mystery Bean Plants"
                value={this.state.mystery_bean_plants}
                />
            }
            { mystery_bean_potion_visible &&
              <div className="potions">
                <h4>Potions</h4>
                <div className="grid-4">
                  { this.state.red_bean_potions !== null &&
                    <div className="red-bean-potions">
                      Red: <span className="value">{this.state.red_bean_potions}</span>
                  </div>
                }
                { this.state.green_bean_potions !== null &&
                  <div className="green-bean-potions">
                    Green: <span className="value">
                    {this.state.green_bean_potions}
                  </span>
                </div>
              }
              { this.state.blue_bean_potions !== null &&
                <div className="blue-bean-potions">
                  Blue: <span className="value">
                  {this.state.blue_bean_potions}
                </span>
              </div>
            }
            { this.state.black_bean_potions !== null &&
              <div className="black-bean-potions">
                Black: <span className="value">
                {this.state.black_bean_potions}
              </span>
            </div>
          }
          { this.state.mystery_bean_potions !== null &&
            <div className="black-bean-potions">
              Mystery: <span className="value">
              {this.state.mystery_bean_potions}
            </span>
          </div>
        }
      </div>
    </div>
            }
  </section>
</Accordion>
<Accordion
  open={true}
  headerText="Actions"
  hint="">
    <Action
      onClick={() => {
        this.incrementValue(1, 'beans');
      }}
      title="Collect A Bean"
      buttonText="Collect"
      desc="Collect a single bean, every bean counts."
      classes="beans"
      canAfford={true}
      key='beans_action'
      />
    { this.state.beans !== null &&
      <Action
        onClick={() => {
          this.decrementValue(10, 'beans');
          this.incrementValue(1, 'bean_plants');
        }}
        title="Plant A Bean Plant"
        cost="10 Beans"
        classes="bean-plants"
        desc="Bean Plants create 1 bean per second."
        canAfford={this.canIAffordThis(10, 'beans')}
        key="bean_plant_action"
        />
    }
    { this.state.bean_plants !== null &&
      <div>
        <Action
          onClick={() => {
            this.decrementValue(5, 'bean_plants');
            this.incrementValue(1, 'bean_extract');
          }}
          title="Create Bean Extract"
          cost="5 Bean Plants"
          classes="bean-extract"
          desc="Bean Extract is harvested from 5 bean plants, and used to create various potions."
          canAfford={this.canIAffordThis(5, 'bean_plants')}
          key="bean_extract_action"
          />
        <Action
          onClick={() => {
            this.incrementValue(1, 'bean_planters');
            this.decrementValue(100, 'beans');
          }}
          title="Hire A Bean Planter"
          cost="100 Beans"
          upkeep="5 Beans/Sec"
          desc="Hire a Bean Planter to continuously plant Bean Plants, with an upkeep cost."
          canAfford={this.canIAffordThese([{cost:100, item:'beans'}, {cost:5, item:'bps'}])}
          key="bean_planter_action"
          />
      </div>
    }
    { this.state.mystery_bean_potions &&
      <Action
        onClick={() => {
          this.incrementValue(1, 'mystery_bean_plant');
          this.decrementValue(1, 'mystery_bean_potions');
          this.decrementValue(1000, 'beans');
        }}
        title="Plant a Mystery Bean Plant"
        classes="plant-mystery-bean-plant"
        desc="Mystery Bean Plants are only harvested once a year, but their fruit is very valuable."
        cost="1 Mystery Potion + 1000 Beans"
        canAfford={this.canIAffordThese([{cost:1, item:'mystery_bean_potions'}, {cost:1000, item:'beans'}])}
        />
    }
</Accordion>
{ this.state.bean_extract !== null &&
  <Accordion
    className="potions"
    open={false}
    headerText="Potions"
    hint="">
    { this.state.bean_extract !== null &&
      <Action
        onClick={() => {
          this.decrementValue(5, 'bean_extract');
          this.incrementValue(1, 'red_bean_potions');
        }}
        title="Red"
        classes="bean-potion bean-potion--red"
        desc="Red potions harness the power of the angry bean."
        cost="5 Bean Extract"
        canAfford={this.canIAffordThis(5, 'bean_extract')}
        />
    }
    { this.state.bean_extract !== null &&
      <Action
        onClick={() => {
          this.decrementValue(5, 'bean_extract');
          this.incrementValue(1, 'green_bean_potions');
        }}
        title="Green"
        classes="bean-potion button-small bean-potion--green"
        desc="Green potions harness the power of the mellow bean."
        cost="5 Bean Extract"
        canAfford={this.canIAffordThis(5, 'bean_extract')}
        />
    }
    { this.state.bean_extract !== null &&
      <Action
        onClick={() => {
          this.decrementValue(5, 'bean_extract');
          this.incrementValue(1, 'blue_bean_potions');
        }}
        title="Blue"
        classes="bean-potion button-small bean-potion--blue"
        desc="Blue potions harness the power of the magic bean."
        cost="5 Bean Extract"
        canAfford={this.canIAffordThis(5, 'bean_extract')}
        />
    }
    { this.state.bean_extract !== null &&
      <Action
        onClick={() => {
          this.decrementValue(5, 'bean_extract');
          this.incrementValue(1, 'black_bean_potions');
        }}
        title="Black"
        classes="bean-potion button-small bean-potion--black"
        desc="Black potions harness the power of the dark bean."
        cost="5 Bean Extract"
        canAfford={this.canIAffordThis(5, 'bean_extract')}
        />
    }
    { mystery_bean_potion_visible &&
      <Action
        onClick={() => {
          this.decrementValue(1, 'red_bean_potions');
          this.decrementValue(1, 'blue_bean_potions');
          this.decrementValue(1, 'green_bean_potions');
          this.decrementValue(1, 'black_bean_potions');
          this.incrementValue(1, 'mystery_bean_potions');
        }}
        title="Mystery"
        classes="bean-potion button-small bean-potion--mystery"
        desc="Mystery potions harness the power of the unknown."
        cost="1 Red + 1 Blue + 1 Green + 1 Black Potion"
        canAfford={can_afford_mystery_bean_potion}
        />
    }
  </Accordion>
}
{ this.state.bean_plants !== null &&
  <Accordion
    className="upgrades"
    open={false}
    headerText="Upgrades"
    hint="Downgrade for 50% cost return">
    <UpgradeGroup
      title="Bean Plants"
      upgrade={() => {
        this.upgradeCollector(0.05, 'bean_plant_level');
        this.decrementValue(100, 'beans');
      }}
      downgrade={() => {
        this.downgradeCollector(0.05, 'bean_plant_level');
        this.incrementValue(50, 'beans');
      }}
      canUpgrade={this.canIAffordThis(100, 'beans')}
      canDowngrade={(this.state.bean_plant_level > 1)}
      desc = 'Upgrade Bean Plant Collection Rate by 5%'
      cost = 'Cost 100 Beans'
      level = {((this.state.bean_plant_level - 1) / 0.05).toFixed() }
      beanPlantLevel = {this.state.bean_plant_level}
      />
  </Accordion>
}
</div>
)
}

}

import React from 'react';
import Button from './Button.jsx';
import Model from './Model.jsx';
import UpgradeGroup from './UpgradeGroup.jsx';
import Accordion from './Accordion.jsx';
import Action from './Action.jsx';
import Detail from './Detail.jsx';
import ProgressBar from './ProgressBar.jsx';

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


  // // Return the amount of beans for each render
  // calculateBeans(currentBeans) {
  //   let beans = beans + this.
  // }

  componentWillMount() {
    this.loadGame();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        beans: prevState.beans + this.calculateBps()/10,
        bean_plants: prevState.bean_plants + this.state.bean_planters / 200,
        time: this.passTime(),
      }))
    }, Model.gameSettings.intervalTick);

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

  toggleHelpMessages() {
    $('.tip-content').toggle();
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
    let mystery_bean_potion_available = false;
    let can_afford_mystery_bean_potion = false;
    if(
      this.state.red_bean_potions !== null
      || this.state.blue_bean_potions !== null
      || this.state.green_bean_potions !== null
      || this.state.black_bean_potions !== null
    ) {
      mystery_bean_potion_available = true;
      if(
        this.state.red_bean_potions >= 1
        && this.state.blue_bean_potions >= 1
        && this.state.green_bean_potions >= 1
        && this.state.black_bean_potions >= 1
      ) {
        can_afford_mystery_bean_potion = true;
      }
    }


    let season = 'spring';
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

    return (
      <div className="game container">
        <section className="game_settings">
          <Button
            classes="button-with-icon"
            icon="window-close"
            onClick={() =>{
              this.restartGame()
            }}
            canAfford={true}
            text="Restart"
            />
        </section>
        <section className="game-details">
          <ProgressBar
            value={this.state.time}
            max="1000"
            />
          <Detail
            label="Season"
            value={season}
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
</section>
<Accordion
  className="actions"
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
      canAfford={this.canIAfford(10, 'beans')}
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
        canAfford={this.canIAfford(5, 'bean_plants')}
        />
      <Action
        onClick={() => {
          this.incrementValue(1, 'bean_planters');
          console.log('bean planter hired');
        }}
        title="Hire A Bean Planter"
        cost="100 Beans"
        upkeep="5 Beans/Sec"
        desc="Hire a Bean Planter to continuously plant Bean Plants, with an upkeep cost."
        canAfford={this.canIAfford(100, 'beans')}
        />
    </div>
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
        canAfford={this.canIAfford(5, 'bean_extract')}
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
        canAfford={this.canIAfford(5, 'bean_extract')}
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
        canAfford={this.canIAfford(5, 'bean_extract')}
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
        canAfford={this.canIAfford(5, 'bean_extract')}
        />
    }
    { mystery_bean_potion_available &&
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
        cost="1 Red / 1 Blue / 1 Green / 1 Black Potion"
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
      canUpgrade={this.canIAfford(100, 'beans')}
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

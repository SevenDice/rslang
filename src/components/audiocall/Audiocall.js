import React, { Component } from 'react';
import Game from './components/Game';
import LevelSelector from './components/LevelSelector';

const DEFAULT_LEVEL = 1;

class Audiocall extends Component {
  constructor(props) {
    super(props);

    this.handleGame = this.handleGame.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);

    this.state = {
      level: DEFAULT_LEVEL,
      hasStarted: false,
    };
  }

  handleGame() {
    this.setState({hasStarted: !this.state.hasStarted});
  }

  handleLevel(value) {
    this.setState({hasStarted: false}, () => {
      this.setState({level: value, hasStarted: true});
    });
  }

  handleLevelChange(event) {
    this.setState({level: event.target.value});
  }

  render() {
    return (
      <>
        <section className="wrapper style5 audiocall">
          <div className="inner">
            <h1 className="large text-primary">Аудиовызов</h1>

            {this.state.hasStarted === false &&
              <LevelSelector level={this.state.level}
                             handleLevelChange={this.handleLevelChange}
                             handleGame={this.handleGame} />
            }

            {this.state.hasStarted &&
              <Game level={this.state.level}
                    handleGame={this.handleGame}
                    handleLevel={this.handleLevel} />
            }
          </div>
        </section>
      </>
    );
  }
}

export default Audiocall;

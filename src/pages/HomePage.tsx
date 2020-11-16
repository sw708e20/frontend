import React from 'react';
import logo from '../img/logo-header-med.png';
import breen from '../img/breen.jpg';
import { RouteComponentProps, withRouter } from "react-router"
import { Translation } from "react-i18next";
import EventListener from "react-event-listener";

interface IIndexState {
  easterBreen: string;
  logo: string;
  logoClass: string;
}

class Index extends React.Component<RouteComponentProps, IIndexState> {
    constructor(props:any) {
        super(props);

        this.state = {
            easterBreen: '',
            logo: logo,
            logoClass: ''
        }
    }

  renderButton(text_key: string, routeTo: string) {
    return (
      <button className={"btn btn-primary edu-btn next-btn"} onClick={() =>
        {
          const { history } = this.props;
            history.push("/quiz/", {routeTo: routeTo, state: {routeTo: routeTo, answers: [], question: undefined}})
          }}>
          <Translation>
              {
                  t => <span>{t(text_key)}</span>
              }
          </Translation>
      </button>
    )
  }

  renderLogo() {
      return (
        <img alt={'EduFinder'} className={'header-logo img-fluid ' + this.state.logoClass} src={this.state.logo}/>
      )
  }

  deployTheBreen = () => {
        this.setState({
            easterBreen: this.state.easterBreen,
            logo: breen,
            logoClass: 'App-logo'
        })
  }

  detectEasterBreen = (e: KeyboardEvent) => {
      this.setState({
          easterBreen: this.state.easterBreen + e.key,
          logo: this.state.logo,
          logoClass: this.state.logoClass
      })
      if (this.state.easterBreen === 'breen') this.deployTheBreen();
  }

  render() {
    return (
        <div className={'container'}>
            <EventListener target={"window"} onKeyPress={this.detectEasterBreen}/>
            <div className={'row div-spacing justify-content-center'}>
              {this.renderLogo()}
            </div>

            <div className="row align-items-start">
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
            
            <div className="row align-items-center">
              <div className="col">
                One of three columns
              </div>
              <div className="col">
                
            <div className={'row justify-content-center'}>
              {this.renderButton('index.rec_btn', "/results/")}
            </div>
            <div className={'row justify-content-center'}>
              {this.renderButton('index.guess_btn', "/guess/")}
            </div>
              </div>
              <div className="col">
                One of three columns
              </div>
            </div>
        </div>
    )
  }
}

export default withRouter(Index);

import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { fontSize, fontFamily, fontColor } = this.props;
    return (
      <div className="textContainer">
        <textarea
          style={ {fontFamily: fontFamily, fontSize: fontSize, color: fontColor}  }
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}

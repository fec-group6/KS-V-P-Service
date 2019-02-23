import React from "react";
import VideoPlayer from './components/VideoPlayer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      search: ''
    };
  }

  formatLikesAndDislikesCount(num) {
    if (num > 999999) {
      return (num / 1000000).toFixed(1) + 'm'
    } else if (num > 999) {
      return (num / 1000).toFixed(1) + 'k'
    } else {
      return num
    }
  }

  componentDidMount() {
    window.handleVideoListItemClick = function (result) {
      this.setState({
        video: result
      })
    }.bind(this);

    fetch('/video-player-service/api/get-video')
      .then(res => res.json())
      .then(
        (result) => {
          result.numberOfDislikes = this.formatLikesAndDislikesCount(result.numberOfDislikes)
          result.numberOfLikes = this.formatLikesAndDislikesCount(result.numberOfLikes)
          result.viewCount = Number(result.viewCount).toLocaleString()
          this.setState({
            video: result
          });
        }
      )
  }

  handleSearchInput(event) {
    event.preventDefault();
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return <VideoPlayer video={this.state.video} />
  }
}

export default App;

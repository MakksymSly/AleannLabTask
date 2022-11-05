import React from 'react';
import axios from 'axios';
import JobPage from './JobPage';
import { useParams } from 'react-router-dom';


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}



class JobPageApiComponent extends React.Component {
  componentDidMount() {
    let id = Object.values(this.props.params);
    axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu').then(response => {
      this.props.setCurrentJob(response.data[id[0] - 1])
    });
  }

  render() {
    if (this.props.currentJob.length != []) {
      return (
        <JobPage currentJob={this.props.currentJob} />
      )
    }
  }
}

export default withParams(JobPageApiComponent);

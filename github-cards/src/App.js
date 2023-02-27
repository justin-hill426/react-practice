import React from 'react';
import axios from 'axios';

const testData = [
  {
    name: "Justin Hill",
    avatar_url: "https://avatars.githubusercontent.com/u/75545008?v=4",
    company: "Figma",
    id: 1,
  },
  {
    name: "Thomas Stansel",
    avatar_url: "https://avatars.githubusercontent.com/u/17548212?v=4",
    company: "Lucid Software",
    id: 2,
  },
  {
    name: "Clay Coleman",
    avatar_url: "https://avatars.githubusercontent.com/u/14222277?v=4",
    company: "Biodock",
    id: 3,
  }
];

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt="Placeholder" />
        <div className='info'>
          <div className="name">
            {profile.name}
          </div>
          <div className="company">
            {profile.company}
          </div>
        </div>
      </div>
    )
  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(res.data);
    this.setState({ userName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='GitHub username' onChange={event => this.setState({userName: event.target.value})} value={this.state.userName} required/>
        <button>Add card here</button>
      </form>
    )
  }
}

const CardList = (props) => (
  <div>
    {
      props.profiles.map(cardData => (<Card key={cardData.id} {...cardData}/>))
    }
  </div>
);
  

class App extends React.Component {
  // initialize state using constructor
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    };
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;
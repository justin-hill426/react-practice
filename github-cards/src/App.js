import React from 'react'

const testData = [
  {
    name: "Justin Hill",
    avatar_url: "https://avatars.githubusercontent.com/u/75545008?v=4",
    company: "Figma",
  },
  {
    name: "Thomas Stansel",
    avatar_url: "https://avatars.githubusercontent.com/u/17548212?v=4",
    company: "Lucid Software",
  },
  {
    name: "Clay Coleman",
    avatar_url: "https://avatars.githubusercontent.com/u/14222277?v=4",
    company: "Biodock",
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
  render() {
    return (
      <form action="">
        <input type="text" placeholder='GitHub username' />
        <button>Add card here</button>
      </form>
    )
  }
}

const CardList = (props) => (
  <div>
    {
      testData.map(cardData => (<Card {...cardData}/>))
    }
  </div>
);
  

class App extends React.Component {
  // constructor
  // this

  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <CardList />
      </div>
    )
  }
}

export default App;
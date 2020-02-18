import React from 'react';

import API from '../../../utils/API';
import InterestsForm from './InterestsForm';
import InterestsInfo from './InterestsInfo';


const sports = [
  { value: 'football', label: 'Football' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'baseball', label: 'Baseball' }
];

const hobbies = [
  { value: 'hiking', label: 'Hiking' },
  { value: 'baking', label: 'Baking' },
  { value: 'music', label: 'Music' },
  { value: 'pets', label: 'Pets' },
  { value: 'movies', label: 'Movies' }
];

class EditInterests extends React.Component {
  state = {
    dontWantToEditInterests: true,
    selectedOptions: []
  };

  addSelectedOption = (name, options) => {
    this.setState(({ selectedOptions }) => ({
      selectedOptions: {
        ...selectedOptions,
        [name]: options
      }
    }), () => {
      API.updatePlayer(this.props.user.email, { interests: this.state.selectedOptions })
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));
  });


  };

  render() {
    if (this.props.dontWantToEditInterests) {
      return (
        <InterestsInfo user={this.props.user} />
      )
    } else {
      return (
        <form className="input-custom">
          <div>Sports</div>
          <InterestsForm
            name="sports"
            addSelectedOption={this.addSelectedOption}
            user={this.props.user}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            options={sports}
            {...this.state} />

          <div>Hobbieas</div>
          <InterestsForm
            name="hobbies"
            addSelectedOption={this.addSelectedOption}
            user={this.props.user}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            options={hobbies}
            {...this.state} />
        </form>
      )
    }
  }
}

export default EditInterests;
import { Component } from 'react';

interface SearchFormProps {
  searchString: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface SearchFormState {
  error: boolean;
}

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  throwError = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Oops');
    }

    return (
      <div className="search-section">
        <form className="search-section-form" onSubmit={this.props.onSubmit}>
          <input
            className="search-section-input"
            type="text"
            placeholder="Search..."
            value={this.props.searchString}
            onChange={this.props.onChange}
          ></input>
          <button className="search-section-button" type="submit">
            Search
          </button>
          <button
            className="error-button"
            type="button"
            onClick={this.throwError}
          >
            Error
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

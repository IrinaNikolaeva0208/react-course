import { Component, ReactNode } from 'react';
import './App.css';
import SearchForm from './search-component';
import ResultsSection from './result-component';
import { fetchPokemons } from './js/fetchPokemons';
import ErrorBoundary from './errorBoundary';

interface AppState {
  searchString: string;
  dataList: { name: string; url: string }[];
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchString: '',
      dataList: [],
    };
  }

  async componentDidMount() {
    await this.fetchDataList();
  }

  async fetchDataList() {
    const list = await fetchPokemons(this.state.searchString);
    this.setState({ dataList: list });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.fetchDataList();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: event.target.value.trim() });
  };

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <>
          <SearchForm
            searchString={this.state.searchString}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <ResultsSection dataList={this.state.dataList} />
        </>
      </ErrorBoundary>
    );
  }
}

export default App;

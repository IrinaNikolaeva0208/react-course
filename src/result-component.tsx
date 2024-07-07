import { Component } from "react";

interface ResultsComponentProps {
    dataList: {name: string, url: string}[];
}

class ResultsSection extends Component<ResultsComponentProps> {
      render() {
        return (
            <div className="results-section">
                {this.props.dataList.length === 0 ? (
                    <div className="not-found-block">
                        <p>Not Found</p>
                    </div>
                ) : (
                    this.props.dataList.map((item, index) => (
                        <div className="results-section-item" key={index}>
                            <h3>{item.name}</h3>
                            <a href={item.url}>Click here to view description</a>
                        </div>
                    ))
                )}
            </div>
        )
    }
}

export default ResultsSection;
import React, { Component } from 'react';
import { TablePagination } from 'react-pagination-table';

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: ["Id", "Genus", "Name", "isHungry", "lastFedDate"],
            data: [],
            debugInfo: "debiginfo",
            catName: "abc"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8080/api/Cats')
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            }
            );
    }
    handleClick() {
        fetch('http://127.0.0.1:8080/api/Cats', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            },
            body: "name=" + this.state.catName
        });
    };

    render() {
        return (
            <div>
                <h1>Cats</h1>
                <TablePagination
                    headers={this.state.header}
                    data={this.state.data}
                    columns="_id.genus.name.isHungry.lastFedDate"
                    perPageItemCount={5}
                    totalCount={this.state.data.length}
                    arrayOption={[["size", 'all', ' ']]}
                />

                <p>Cat Name:
                    <input type="text" value={this.state.catName} placeholder="Cat Name" onChange={(ev) => this.setState({ catName: ev.target.value })} />
                    <button onClick={this.handleClick}>Add Cat</button>
                    <span style={{ color: 'red' }}>Cat Name is required.</span>
                </p>

                <hr />
                <div>Debug
                    <pre>{this.state.debugInfo}</pre>
                </div>
            </div>

        );
    }
}
export default Cats;
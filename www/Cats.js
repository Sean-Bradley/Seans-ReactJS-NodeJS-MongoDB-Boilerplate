import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class Cats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debugInfo: "debiginfo",
            catName: "abc",
            columns: [{
                Header: 'Id',
                accessor: '_id' // String-based value accessors!
            }, {
                Header: 'Genus',
                accessor: 'genus',
                //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
                Header: 'Name',
                accessor: 'name',
                //accessor: d => d.friend.name // Custom value accessors!
            }, {
                //Header: props => <span>Friend Age</span>, // Custom header components!
                Header: 'isHungry',
                id: 'isHungry',
                accessor: d => d.isHungry.toString() //'isHungry',
            }, {
                //Header: props => <span>Friend Age</span>, // Custom header components!
                Header: 'lastFedDate',
                accessor: 'lastFedDate',
            }]
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
        }).then(
            fetch('http://127.0.0.1:8080/api/Cats')
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data })
                }
                )
        );
    };
    requestData(pageSize, page, sorted, filtered) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/Cats')
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data })
                }
                );
        });
    };

    fetchData(state, instance) {
        // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
        // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
        this.setState({ loading: true });
        fetch('http://127.0.0.1:8080/api/Cats')
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data })
                }
                );
        // Request the data however you want.  Here, we'll use our mocked service we created earlier
        // requestData(
        //     state.pageSize,
        //     state.page,
        //     state.sorted,
        //     state.filtered
        // ).then(res => {
        //     // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
        //     this.setState({
        //         data: res.rows,
        //         pages: res.pages,
        //         loading: false
        //     });
        // });
    }
    render() {
        return (
            <div>
                <h1>Cats</h1>

                <ReactTable
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    //onFetchData={this.fetchData}
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
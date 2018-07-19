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
            }, {
                //Header: '',
                //id: 'edit-button',
                //render: ({ row }) => (<button onClick={(e) => this.handleEditClick(e, row)}>Edit</button>)
                id: 'edit',
                accessor: '_id',
                Cell: ({ value }) => (<button className="btn btn-success" onClick={(e) => this.handleEditClick(e, value)}>Edit</button>)
            }, {
                id: 'delete',
                accessor: '_id',
                Cell: ({ value }) => (<button className="btn btn-danger" onClick={(e) => this.handleDeleteClick(e, value)}>Delete</button>)
            }]
        }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleAddClick() {
        fetch('http://127.0.0.1:8080/api/Cats', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            },
            body: "name=" + this.state.catName
        })
            .then(
                fetch('http://127.0.0.1:8080/api/Cats')
                    .then(response => response.json())
                    .then(data => {
                        this.state.data = data;
                        this.setState({
                            table: {
                                columns: this.state.columns,
                                data: this.state.data
                            }
                        })
                    })
            )
    };
    handleEditClick(e, v) {
        alert(v);
    }
    handleDeleteClick(e, v) {
        fetch('http://127.0.0.1:8080/api/Cats/' + v, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            }
        })
            .then(
                fetch('http://127.0.0.1:8080/api/Cats')
                    .then(response => response.json())
                    .then(data => {
                        this.state.data = data;
                        this.setState({
                            table: {
                                columns: this.state.columns,
                                data: this.state.data
                            }
                        })
                    })
            )
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
                    onFetchData={(state, instance) => {
                        // show the loading overlay
                        this.setState({ loading: true })
                        // fetch your data
                        fetch('http://127.0.0.1:8080/api/Cats')
                            .then(response => response.json())
                            .then(data => {
                                this.setState({ data: data })
                            }
                            )
                    }
                    }
                />

                <p>Cat Name:
                    <input type="text" value={this.state.catName} placeholder="Cat Name" onChange={(ev) => this.setState({ catName: ev.target.value })} />
                    <button onClick={this.handleAddClick}>Add Cat</button>
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
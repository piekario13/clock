class Draw extends React.Component {
    state = {
        options: ["1", "2", "3"],
        option: null,
        value: ""
    }



    handleShowOption = () => {
        const index = Math.floor(Math.random() * this.state.options.length)
        this.setState({
            option: this.state.options[index]
        })
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleAddOption = () => {
        if (this.state.value === "") return alert('Wpisz coś!')
        const options = [...this.state.options]
        options.push(this.state.value)
        this.setState({
            options,
            value: ""
        })
        alert(`Wróżba dodana. Aktualne wróżby: ${options}`)
    }


    render() {
        return (
            <div>
                <button onClick={this.handleShowOption}>Zobacz nowy tekst</button>
                <br />
                <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="Tu wpisz tekst" />
                <button onClick={this.handleAddOption}>Dodaj tekst</button>
                {this.state.option ? <h1>{this.state.option}</h1> : null}
            </div>
        )
    }
}

// ReactDOM.render(<Draw />, document.getElementById("app"))
import React, {Component} from 'react';

export default class AddWatchesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            timezone: ''
        }
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onTimezoneChange = (e) => {
        this.setState({
            timezone: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            name: '',
            timezone: ''
        })
    }

    render() {
        return (
            <form className='addWatchesForm' onSubmit={this.onSubmitForm}>
                <section>
                    <label htmlFor='name'>Название</label>
                    <input id='name'
                           name='name'
                           type='text'
                           className='addWatchesForm-input-name'
                           placeholder='Введите название часов'
                           onChange={this.onNameChange}
                           value={this.state.name}
                    />
                </section>
                <section>
                    <label htmlFor='timezone'>Временная зона</label>
                    <input id='timezone'
                           name='timezone'
                           type='text'
                           className='addWatchesForm-input-timezone'
                           placeholder='Введите смещение в часах относительно Гринвича'
                           onChange={this.onTimezoneChange}
                           value={this.state.timezone}
                    />
                </section>

                <button type='submit' className='addWatchesForm-btn'>Добавить</button>
            </form>
        )
    }
}
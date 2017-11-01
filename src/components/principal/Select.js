import React, {Component} from 'react'
import {Body, Form, Item, Picker} from 'native-base';

export default class Select extends Component < {} > {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value : string) {
        this.setState({selected2: value});
    }

    render() {
        return (
            <Form>
                <Picker
                    mode="dropdown"
                    placeholder="1kg"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Item label="1 pieza" value="key0"/>
                    <Item label="2 pieza" value="key1"/>
                    <Item label="3 pieza" value="key2"/>
                    <Item label="4 pieza" value="key3"/>
                    <Item label="5 pieza" value="key4"/>
                </Picker>
            </Form>
        );
    }
}
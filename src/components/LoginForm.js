import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { emailChanged, passwordChanged, loginRequest } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';
import { Button } from 'react-native-elements'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginRequest({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
         return <Spinner />;   
        }

        return (
            <Button
                title="Login"
                onPress={this.onButtonPress.bind(this)} 
                borderRadius={25}
            />
        );
    }

    render() {
        return (
            
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                {this.renderButton()}

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(
    mapStateToProps, { emailChanged, passwordChanged, loginRequest }
)(LoginForm);

import React, { useState } from 'react';
import LoadingMessage from '../components/LoadingPage.jsx';

class Login extends React.Component {
  state = {
    loginName: '',
    isButtonDisabled: true,
    loading: false,
  };

  verifyNameSize = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      const { loginName } = this.state;
      const minLenght = 3;
      const verifyName = loginName.length < minLenght;
      this.setState({ isButtonDisabled: verifyName });
    });
  };

  handleClick = () => {
    const { history } = this.props;
    this.setState(
      { loading: true },
      async () => {
        return history.push('/hamburguer');
      },
    );
  };

  
  render() {
    const {
      isButtonDisabled,
      loginName,
      loading,
    } = this.state;

    if (loading) return <LoadingMessage />;
    return (
      <div className="appLogin">
        <section className="content">
          <p>
            Lanchonete
          </p>
          <form>
            <label htmlFor="loginName">
              <input
                type="text"
                name="loginName"
                id="loginName"
                value={ loginName }
                data-testid="login-name-input"
                onChange={ this.verifyNameSize }
              />
            </label>
          </form>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;

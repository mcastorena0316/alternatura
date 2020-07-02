import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      isOpen: false,
    };
  }

  // componentDidMount() {
  //   const { isOpen } = this.state;
  //   if (isOpen) {
  //     document.getElementsByClassName('App').style.scroll = 'hidden';
  //   }
  // }

  // isMenuOpen = (state) => state.isOpen;

   handleButtonClick = () => {
     const { open } = this.state;
     this.setState({
       open: !open,
     });
   }

    hideScroll= () => {
      const { isOpen } = this.state;
      this.setState({
        isOpen: !isOpen,
      });
      if (isOpen) {
        document.getElementsByClassName('App').style.scroll = 'hidden';
      }
    }

    render() {
      const { open } = this.state;
      return (
        <Menu>
          <div className="container">
            <span className="menu-item">Categorias</span>
            <button type="button" onClick={this.handleButtonClick}><i className="fa fa-caret-down" aria-hidden="true" /></button>
            {open && (
            <div className="dropdown">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
            )}
          </div>

          <a className="menu-item" href="/angular">
            Recomendaciones por asunto
          </a>

          <Link to="/pedidos" className="menu-item">
            Tus pedidos
          </Link>

          <a className="menu-item" href="/vue">
            Tu Cuenta
          </a>

          <a className="menu-item" href="/node">
            Consulta un especialista
          </a>
        </Menu>
      );
    }
}

export default SideBar;

import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import '../styles/modal.css';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.overlay = document.createElement('div');
    this.overlay.className = 'search-bar-page-overlay';

    // Create a modalNav skeleton to place SearchBar in
    this.modalNav = document.createElement('div');
    this.modalNav.className = 'modal-nav-bar';
    this.mobileContainer = document.createElement('div');
    this.mobileContainer.className = 'mobile-logo-modal-searchbar-container';
    this.modalLogo = document.createElement('div');
    this.modalLogo.className = 'logo-modal-nav-container';
    this.modalMenu = document.createElement('div');
    this.modalMenu.className = 'menu-modal-nav-container';

    // Only closeSearchBarDropdown when event.target is not within search-bar-nav-container
    this.overlay.onclick = (event) => {
      if (!this.modalNav.getElementsByClassName('search-bar-nav-container')[0].contains(event.target)) {
        this.props.closeSearchBarDropdown();
      }
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.overlay);
    this.overlay.appendChild(this.modalNav);
    this.modalNav.appendChild(this.mobileContainer);
    this.mobileContainer.prepend(this.modalLogo);
    this.modalNav.appendChild(this.modalMenu);

    // Focus searchInput on mount
    const searchInput = this.modalNav.getElementsByTagName('input');
    searchInput[0].focus();

    // Set a new background color for each of the search-inputs/containers
    for (let i = 0; i < searchInput.length; i += 1) {
      searchInput[i].setAttribute('style', 'background: #f1f1f2');
    }

    const searchContainer = this.modalNav.getElementsByClassName('search-bar-nav-container');
    for (let i = 0; i < searchContainer.length; i += 1) {
      searchContainer[i].setAttribute('style', 'background: #f1f1f2');
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.overlay);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.mobileContainer,
    );
  }
}

Modal.propTypes = {
  children: propTypes.element.isRequired,
  closeSearchBarDropdown: propTypes.func.isRequired,
};

export default Modal;

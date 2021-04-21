import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import '~react-image-gallery/styles/scss/image-gallery.scss'; */
body {
    width: 100%;
    height: 100%;
    background-color: #4c443c;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-size: large;
    font-family: 'Do Hyeon', sans-serif;
}
*, *:before, *:after {
    outline: none;
    user-select: none;
  }
  a,
  a:hover,
  a:focus {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s;
  }

#main-footer {
    background: #343a40;
    color: #ffff;
}

#page-logo {
    width: 65x;
    height: 65px;
    margin-bottom: 20px;
    margin-top: 30px;
}

#page-logo-text {
    margin-top: 50px;
    margin-left: 6px;
}

#main-body {
    min-height: 150vh;
}

.card-img-top {
    width: 100%;
    height: 20rem;
    object-fit: cover;
}

//CKEditor setting

.ck {
    .ck-editor {
        min-width: 100%;
    }
}

.ck-editor__editable {
    max-height: 80rem;
    min-height: 20rem;
    min-width: 100rem;
}

.ck-editor__editable_inline {
    max-height: 80rem;
    min-height: 20rem;
    min-width: 100%;
}

html {
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
}

textarea {
    resize: none;
}

.my_category {
    &:last-child {
        margin-bottom: 0.25rem;
    }
}

//slide image
.image-gallery-slide {
    object-fit: cover;
}
.image-gallery-slide img {
    width: 100%;
    height: 55vh;
    @media only screen and (max-width: 767px) {
        height: 250px;
    }
    @media only screen and (min-width:768px) and (max-width:1024px) {
        height: 230px;
    }
}
.fullscreen .image-gallery-image {
    width: 100%;
    height: 100%;
}

.image-gallery-fullscreen-button {
  right: 100px;
}

.image-gallery-play-button {
  left: 100px;
}

///////////////

`;

export default GlobalStyle;

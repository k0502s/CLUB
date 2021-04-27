import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    width: 100%;
    height: 100%;
    background-color: #4c443c;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-size: large;
    font-family: 'Do Hyeon', sans-serif;
    overflow-x: hidden;
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

#main-body {
    min-height: 130vh;
    @media only screen and (max-width: 767px) {
    margin-top: 100px;
}
}
.card-img-top {
    width: 100%;
    height: 20rem;
    object-fit: cover;
}
div.col {
    padding: 0;
}

#drop {
    -webkit-overflow-scrolling: touch;
    height: 500px;
}

#topspan {
    color: gray;
    font-weight: bold;
}


/////photo img

#photoimg {
    max-height: 235px;
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

.image-gallery-fullscreen-button {
  right: 150px;
}

.image-gallery-play-button {
  left: 150px;
}

`;

export default GlobalStyle;

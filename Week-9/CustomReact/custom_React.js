//  defining/making our own react library.

function CustomRender(maincontainer,ReactElement){
    const elem = document.createElement(ReactElement.type);
    //modular/generic element
    elem.innerHTML = ReactElement.children;
    elem.setAttribute('href',ReactElement.props.href);
    elem.setAttribute('target',ReactElement.props.target);

    maincontainer.appendChild(elem)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children : "click me to visit google.com"
}
// this is the element we want to create thru react.Like this is how react internally works you can say.

const rootdiv = document.getElementById('root');
// suppose we want to render an <a> tag.

// React creates a tree like structure in memory which is VIRTUAL DOM.React compares VDOM with real DOM and only updates the element which is required to be updated.

// so in react project we were Renderiung the "App()" component OR every component in ROOT div in index.html


CustomRender(rootdiv,reactElement)
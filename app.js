const heading = React.createElement("h1",{id:"heading"},"Hello world from javascript");
const root =  ReactDOM.createRoot(document.getElementById("root"));
//ReactDOM.render("Welcome to react",document.getElementById("root"));
root.render(heading);
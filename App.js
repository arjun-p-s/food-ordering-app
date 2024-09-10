const parent = React.createElement('div',
    {id:"parent"}, 
   [ React.createElement('div',
    {id:"child"},[
 React.createElement('h1',{},'hello i am here'),
 React.createElement('h2',{},'hello i am there')]
), React.createElement('div',
    {id:"child"},[
 React.createElement('h1',{},'hello i am here'),
 React.createElement('h2',{},'hello i am there')]
)]
)
const demo =ReactDOM.createRoot(document.getElementById('demo'))
demo.render(parent)




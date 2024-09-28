import './App.css';
import Title from './components/Title.js';
import Navigation from './components/Navigation.js';
import Body from './components/Body.js';

function App() {
  return (
    <div>
      <div className='parent-container'>
        <Title titleText='Simple React SPA'/>
        <Navigation />
        <Body 
          contentTitle='Title'
          contentText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus diam vitae nunc venenatis, at placerat turpis tempus. Proin interdum gravida est, imperdiet luctus eros feugiat id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu ante non velit ultrices hendrerit. Donec sollicitudin tellus nec enim molestie, nec molestie magna elementum. Etiam iaculis, neque et pretium iaculis, justo tellus convallis urna, sit amet imperdiet sem dui eget massa. Nunc volutpat justo id pretium fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac orci ligula.'
        />
      </div>
    </div>
  );
}

export default App;

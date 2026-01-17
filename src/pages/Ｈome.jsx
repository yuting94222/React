import myImgh1 from '../assets/h1.jpg';


function Home() {

  return (
    <div>
      <h2>不知道放點啥 來點可愛的好了</h2>
      <p style={{ textAlign: 'center' }}>對其實我只是想讓你們看我的可愛寶寶</p>
      <img src={myImgh1} style={{ width: '60%' }} /><br />
    </div>
  );
}

export default Home;
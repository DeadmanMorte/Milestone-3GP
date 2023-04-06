
function Home() {
    return (
      <main>
        <div className="homepage" style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#fff', padding: '20px 0' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>My App</a>
          <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', margin: 0, padding: 0 }}>
            <li><a href="/" style={{ color: '#333', margin: '0 10px' }}>Your Page</a></li>
            <li><a href="/about" style={{ color: '#333', margin: '0 10px' }}>Random Feed</a></li>
            <li><a href="/contact" style={{ color: '#333', margin: '0 10px' }}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '40px' }}>Home</h1>
        <p style={{ fontSize: '24px', color: '#333', lineHeight: '1.5', marginBottom: '40px' }}>
          TODO: make app able to speak to db. post and get data. have components to show data. stylize.
        </p>
        <button style={{ backgroundColor: '#333', color: '#fff', padding: '15px 30px', borderRadius: '5px', fontSize: '24px', cursor: 'pointer' }}>Get Started</button>
      </main>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', margin: 0 }}>© 2023 Our App. All rights reserved.</p>
      </footer>
    </div>
        <a href="">
          <button className="btn-primary"></button>
        </a>
      </main>
    );
  }
  
  export default Home;
  
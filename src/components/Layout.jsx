import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link to="/">Personal Task Management</Link>c
        </h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2024 Task Manager</p>
      </footer>
    </div>
  );
}

export default Layout;
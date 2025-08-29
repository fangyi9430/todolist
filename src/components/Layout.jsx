import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link to="/">Personal Task Management</Link>
        </h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
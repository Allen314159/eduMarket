import { useState, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import HistoryPage from './pages/HistoryPage';
//import { useFavorites } from './hooks';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    // Focus vào search input sau khi render
    setTimeout(() => {
      searchInputRef.current?.focus();
      searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'favorites':
        return <FavoritesPage />;
      case 'history':
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        onSearchClick={handleSearchClick}
      />
      <main className="animate-fade-in flex-1">
        {renderPage()}
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
};

export default App;

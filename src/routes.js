/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import HomePage from './components/HomePage';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SchedulePage from './components/SchedulePage';
import ShowsPage from './components/ShowsPage';
import NewsPage from './components/NewsPage';
import EventsPage from './components/EventsPage';
import InfoPage from './components/InfoPage';
import SponsorPage from './components/SponsorPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/', async () => <HomePage />);

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('/news', async () => <NewsPage />);
  on('/news/:slug', async (req) => {
    return <NewsPage slug={req.params.slug} />;
  });

  on('/schedule', async () => <SchedulePage />);

  on('/shows', async () => <ShowsPage />);

  on('/events', async () => <EventsPage />);

  on('/info', async () => <InfoPage />);

  on('/sponsor', async () => <SponsorPage />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;

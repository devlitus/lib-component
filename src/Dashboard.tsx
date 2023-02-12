import * as React from 'react';
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Navigator } from "./components/Navigator";
import { Sidebar } from "./components/Sidebar";
import './styles/header.module.css';
import './styles/index.module.css';
import './styles/logo.module.css';
import './styles/navigator.module.css';
import './styles/sidebar.module.css';
const items = ["Home", "About", "Contact"];
export function Dashboard() {

  return (
    <>
      <Header className="header">
        <Logo className="logo" src='logo' alt="Quabu Solucions" />
        <Navigator className="navigator navigator__item" items={items} />
      </Header>
      <Sidebar className="sidebar sidebar__item" items={items} />
    </>
  );
}



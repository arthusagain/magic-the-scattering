'use client'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Homepage } from "../pages/Homepage";
import { Auth } from "../pages/Auth";
import { About } from "../pages/About";
import { Search } from "../pages/Search";
import { Profile } from "../pages/Profile";
import { EditProfile } from "../pages/EditProfile";
import { CardInfo } from "../pages/CardInfo";
import { CardCreate } from "../pages/CardCreate";
import { NoPage } from "../pages/NoPage";
import Banner from '@/components/Banner';


export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
            <Route path="auth" element={<Auth />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="card-info" element={<CardInfo />} />
            <Route path="card-create" element={<CardCreate />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

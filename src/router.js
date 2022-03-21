import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useInitialState from '@hooks/useInitialState'
import AppContext from '@context/AppContext'
import ScrollToTop from '@utils/ScrollToTop'
import Layout from '@containers/Layout'

// Import Routes
const Home = lazy(() => import('@routes/Home'))
const Blog = lazy(() => import('@routes/Blog'))
const Post = lazy(() => import('@routes/Post'))
const Contact = lazy(() => import('@routes/Contact'))
const NotFound = lazy(() => import('@routes/NotFound'))
const Privacy = lazy(() => import('@routes/Privacy'))

const Router = () => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/blog/:slug" element={<Post />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router

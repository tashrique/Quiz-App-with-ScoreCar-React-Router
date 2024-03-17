import { createContext, useState } from 'react'
import './App.css'
import Main from './layouts/Main'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import QuizCard from './components/QuizCard/QuizCard'
import Quiz from './components/Quiz/Quiz'

function App() {

  //Context for handle the state of the quiz
  const QuizContext = createContext('quiz');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          },
          element: <Home></Home>
        },
        {
          path: '/:courseId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          loader: async () => {
            return fetch('https://jsonplaceholder.org/posts')
          },
          element: <Blog></Blog>
        }
      ],
    },
    {
      path: '*',
      element: <h1>Oops Not Found</h1>
    }
  ]);

  return (
    <>
      <QuizContext.Provider value={useState('quiz')}>
        <RouterProvider router={router}></RouterProvider>
      </QuizContext.Provider>
    </>
  )
}

export default App

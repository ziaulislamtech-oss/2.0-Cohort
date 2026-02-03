import React from 'react'

export const postDataContext = createContext()

const PostsContext = () => {
    
   const data = [
  {
    id: 1,
    userId: 101,
    userName: "Ali",
    title: "Learning JavaScript",
    content: "Today I learned about arrays and objects."
  },
  {
    id: 2,
    userId: 102,
    userName: "Ahmed",
    title: "React Journey",
    content: "Started learning React components."
  },
  {
    id: 3,
    userId: 103,
    userName: "Sara",
    title: "CSS Practice",
    content: "Practiced Flexbox and Grid."
  },
  {
    id: 4,
    userId: 104,
    userName: "Zain",
    title: "Backend Basics",
    content: "Learning about APIs and servers."
  },
  {
    id: 5,
    userId: 105,
    userName: "Ayesha",
    title: "Tailwind CSS",
    content: "Tailwind makes styling faster!"
  }
];

  return (
    <div>
      <postDataContext.Provider value={data}>
        {props.children}
      </postDataContext.Provider>
    </div>
  )
}

export default PostsContext

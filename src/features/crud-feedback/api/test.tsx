// import { useEffect, useState } from 'react'
// import './styles.css'
// import { httpGetFeedbacks, httpGetFeedback } from './requests'

// export type Items = {
//   id: number
//   title: string
//   completed: boolean
// }
// function genId() {
//   return Math.floor(Math.random() * 99)
// }

// function App() {
//   const [item, setItem] = useState('')
//   const [items, setItems] = useState<Items[]>([])

//   // const getFeedbacks = async () => {
//   //   return await httpGetFeedbacks()
//   // }
//   // const getFeedback = async (id: string) => {
//   //   return await httpGetFeedback(id)
//   // }

//   // useEffect(() => {
//   //   // getFeedbacks()
//   //   // getFeedback('1273c629-929e-451e-8afe-10ebd6fce0df')
//   // }, [])
//   const handleSubmit = (event: any) => {
//     event.preventDefault()
//     setItems((currentlist) => {
//       return [...currentlist, { id: genId(), title: item, completed: false }]
//     })
//     setItem('')
//   }
//   // const toggleCompleted = (id:number, completed:boolean) => {
//   //   setItems((currentlist) => {
//   //     return currentlist.map(item => {
//   //       if (item.id === id) {
//   //         return [
//   //           ...currentlist,
//   //           completed
//   //         ]

//   //       }

//   //       )
//   //   })
//   // }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="new-item-form">
//         <div className="form-row">
//           {/* <label htmlFor="item">new item</label> */}
//           <label htmlFor="">New Item</label>
//           <input
//             value={item}
//             onChange={(e) => setItem(e.target.value)}
//             type="text"
//             name=""
//             id="item"
//           />
//         </div>
//         <button className="btn">Add</button>
//       </form>
//       <h1>Item</h1>
//       <ul className="list">
//         {items.map((item, id) => {
//           return (
//             <li key={id}>
//               <label htmlFor="">
//                 <input
//                   type="checkbox"
//                   name=""
//                   id=""
//                   checked={item.completed}
//                   // onChange={(e) => toggleCompleted(item.id, e.target.checked)}
//                 />
//                 {item.title}
//               </label>
//               <button className="btn btn-danger">Delete</button>
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// export default App

import React from 'react'
import { useAppSelector } from '../store/store'

interface Person {
  id: number
  name: string
}

const List = () => {
  const persons: Person[] = useAppSelector((state) => state.person.persons)

  return (
    <table className="rounded-md">
      <thead>
        <tr className="bg-gradient-to-b from-sky-600 text-white">
          <th className="p-2 border rounded">ID</th>
          <th className="p-2 border rounded">Name</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person) => (
          <tr className="even:bg-slate-50" key={person.id}>
            <td className="p-2">{person.id}</td>
            <td className="p-2">{person.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List

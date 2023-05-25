import  dummy  from "../db/database.json"


export default function DayList() {
  console.log(dummy);
  return (
    <ul className = 'list_day'>
      {dummy.days.map(elements => (
        <li key={elements.id}>day{elements.day}</li>
      ))}
    </ul>
  )
}
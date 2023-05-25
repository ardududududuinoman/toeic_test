import dummy from "../db/database.json";  
export default function Day () {
  const day = 1;
  const wordList = dummy.words.filter(Element => Element.day === day)
  console.log(`wordList = ${wordList} `);
  //더미데이터의 array 중 words array 조건복사 
  //dummy.words.day == 1
  return(
    <>
      <table>
        <tbody>
          {wordList.map(Element => (
            <tr>
              <td>{Element.eng}</td>
              <td>{Element.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
import React, {useEffect} from "react"; 
// useState,
import "./style.css";

function EmployeeInfo({search, empData, setEmpData}) {

  const infoUrl = 'https://randomuser.me/api/?inc=name,email,phone,picture&results=25';
  useEffect(() => {
    fetch(infoUrl)
    .then(res => res.json())
    .then((response) => {
      setEmpData(response.results)
    });
  }, [])


  return (
    <>
    {empData.filter(emp => emp.name.first.toUpperCase().includes(search.toUpperCase()) || emp.name.last.toUpperCase().includes(search.toUpperCase())).map(emp => (
      <tr className="align-middle" key={emp.email}>
      <th scope="row"> <img src={emp.picture.medium} alt="Employee" /> </th>
      <td>{emp.name.first} {emp.name.last}</td>
      <td>{emp.phone}</td>
      <td>{emp.email}</td>
      </tr>
    )
    )}

    </>
  );
}

export default EmployeeInfo;
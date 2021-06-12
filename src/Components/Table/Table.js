import React, {useState} from "react";
// useEffect
import "./style.css";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

function Table(props) {
    const [empData, setEmpData] = useState([]);
    const [isAsc, setIsAsc] = useState(false);

  function sortName() {
    setIsAsc(!isAsc)  
    if (isAsc) {
        const newArr = [...empData];
        newArr.sort((a, b) => (a.name.first + ' ' + a.name.last).localeCompare(b.name.first + ' ' + b.name.last))
        setEmpData(newArr)
    } else {
        const newArr = [...empData];
        newArr.sort((a, b) => (b.name.first + ' ' + b.name.last).localeCompare(a.name.first + ' ' + a.name.last))
        setEmpData(newArr)
    }

  }

    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Picture</th>
            <th scope="col" onClick={sortName}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <EmployeeInfo 
                empData={empData}
                setEmpData={setEmpData}
                search={props.search}

            />

        </tbody>
        </table>
    );
  }
  
  export default Table;
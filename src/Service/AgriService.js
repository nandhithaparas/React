import axios from 'axios';

const BASE_URL = 'http://localhost:8080/agri'; 

class AgriService {
  save(aa)  {
    return axios.post(BASE_URL, aa);
  }

  get() {
    return axios.get(BASE_URL);
  }

  sort (field)  {
    return axios.get(BASE_URL +field);
  }

  pagingAndSorting (pageNum, pageSize, field){
    return axios.get(BASE_URL + pageNum + pageSize + field );
  }

  updateValue (aa) {
    return axios.put(BASE_URL, aa);
  }

  deleteById (id)  {
    return axios.delete(BASE_URL +id);
  }
}

export default AgriService;
// import axios from 'axios'

// const URL = 'http://localhost:8080/employees';

// class EmployeeService{

//     getAllEmployees(){
//         return axios.get(URL)
//     }

//     createEmployee(employee){
//         return axios.post(URL,employee)
//     }

//     getEmployeeById(employeeId){
//         return axios.get(URL + '/' + employeeId);
//     }

//     updateEmployee(employeeId, employee){
//         return axios.put(URL + '/' +employeeId, employee);
//     }

//     deleteEmployee(employeeId){
//         return axios.delete(URL + '/' + employeeId);
//     }
//     deleteAllEmployee(employeeId){
//         return axios.delete(URL);
//     }
// }

// export default new EmployeeService();


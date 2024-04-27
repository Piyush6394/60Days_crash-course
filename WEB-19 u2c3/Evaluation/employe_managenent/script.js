// here we are fetching data from API

function fetchEmployees(page, limit, filterBy, filterValue, sort, order){
    let apiUrl =  https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=${limit};
    if(filterBy && filterValue){
       apiUrl += `&filterBy=${filterBy}&filterValue=${filterValue}`;
   
    }
    if(sort && order){
       apiUrl += `&sort=${sort}&order=${order}`;
   
    }
    fetch(apiUrl)
       .then(response => {
           if(!response.ok){
               throw new Error("Network response was not correct")
           }
           return response.json();
       })
       .then(data => {
           console.log('Data received from API:', data);
           if(data && data.data && Array.isArray(data.data)){
               populateTable(data.data)
               handlePagination(page, data.totalPages)
           }  else {
               throw new Error('data received from api is not in the expected fromat')
           }
          
       })
       .catch(err => {
           console.log('There was a problem with the fetch operation:', err)
       })
    }
   
   
   function populateTable(data){
       
       const tableBody = document.getElementById('employee-list')
       if(!tableBody) {
           console.error('Table body element not found');
           return;
       }
       tableBody.innerHTML = '';
      
       data.forEach((employee, index) => {
           const row = `
               <tr>
                   <td>${index+1}</td>
                   <td>${employee.name || ''}</td>
                   <td>${employee.gender || ''}</td>
                   <td>${employee.department || ''}</td>
                   <td>${employee.salary || ''}</td>
   
   
   
               </tr>
           
           
           
           `;
           tableBody.innerHTML += row;
   
   
           
   
       })
      
   }
   document.getElementById('prev-btn').addEventListener('click', () => {
       const currentPageElement = document.getElementById('current-page')
   
       if(!currentPageElement){
           console.log('Current page element not found');
           return;
       }
       const currentPage = parseInt(currentPageElement.textContent);
       if(!isNaN(currentPage)){
           fetchEmployees(currentPage-1, 10, '', '', '', '')
       }else {
           console.log("Invalid current page", currentPageElement.textContent)
       }
      
   });
   
   
    document.getElementById('next-btn').addEventListener('click', () => {
       const currentPageElement = document.getElementById('current-page')
   
       if(!currentPageElement){
           console.log('Current page element not found');
           return;
       }
       const currentPage = parseInt(currentPageElement.textContent);
       if(!isNaN(currentPage)){
           fetchEmployees(currentPage+1, 10, '', '', '', '')
       }else {
           console.log("Invalid current page", currentPageElement.textContent)
       }
      
   });
   
   document.addEventListener('DOMContentLoaded', () => {
       fetchEmployees(1, 10, '', '', '', '')
       document.getElementById('department-filter').addEventListener('change', () => {
           const department = document.getElementById('department-filter').value;
           fetchEmployees(1, 10, 'department', department, '', '')
       })
   
   
       document.getElementById('gender-filter').addEventListener('change', () => {
           const gender = document.getElementById('gender-filter').value;
           fetchEmployees(1, 10, 'gender', gender, '', '')
       })
   
   
       document.getElementById('sort-by').addEventListener('change', () => {
           const sortOption = document.getElementById('sort-by').value;
               let sort = '';
               let order = '';
               if(sortOption === 'asc'){
                   sort = 'salary';
                   order = 'asc'
               } else if(sortOption === 'desc'){
                   sort = 'salary';
                   order = 'desc'
               }
   
   
   
           fetchEmployees(1, 10, 'department', department, '', '')
       })
   })
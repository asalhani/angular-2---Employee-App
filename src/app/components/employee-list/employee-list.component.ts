import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Employee } from '../../models/employee'

@Component({
      selector: 'app-employee-list',
      templateUrl: './employee-list.component.html',
      styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent {

      constructor() { }

      onRating(obj: any) {
            let emp: Employee = this.employees.find(x => x == obj.employeeId);
            if (emp != null)
                  emp[0].rating = obj.rating;
            // var employee = this.employees.filter((item: Employee) => item.id === obj.employeeId);
            // if (!!employee && employee.length === 1) {
            //       this.employees[0].rating = obj.rating;
            // }

      }
      // array of Employees
      employees: Employee[] =
      [
            {
                  "id": 1,
                  "firstName": "ted",
                  "lastName": "james",
                  "gender": "male",
                  "address": "1234 Anywhere St.",
                  "city": " Phoenix ",
                  "state": {
                        "abbreviation": "AZ",
                        "name": "Arizona"
                  },
                  "salary": 4.500,
                  "joinDate": "July 2, 2015",
                  "rating": 2
            },
            {
                  "id": 2,
                  "firstName": "Michelle",
                  "lastName": "Thompson",
                  "gender": "female",
                  "address": "345 Cedar Point Ave.",
                  "city": "Los Angeles ",
                  "state": {
                        "abbreviation": "CA",
                        "name": "California"
                  },
                  "salary": 4.100,
                  "joinDate": "June 29, 2015",
                  "rating": 4
            },
            {
                  "id": 3,
                  "firstName": "Zed",
                  "lastName": "Bishop",
                  "gender": "male",
                  "address": "1822 Long Bay Dr.",
                  "city": " Las Vegas ",
                  "state": {
                        "abbreviation": "NV",
                        "name": "Nevada"
                  },
                  "salary": 4.200,
                  "joinDate": "July 1, 2015",
                  "rating": 1
            }];

}

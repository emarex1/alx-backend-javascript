export default function createEmployeesObject(departmentName, employees) {
    const emloyeObject = {
        [departmentName]: employees
    }
    return emloyeObject;

}
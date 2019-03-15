import React, { Component } from 'react';

class DashboardPortal extends Component {
    render() {
        return (
           
            <div>
               <br></br>
               <br></br>
              
               <h1 className="text-center headerDashboard"> IoT Health Dahsboard Portal </h1>
               <br></br>
            <table class="table">
            
                <thead>
                    <tr>
                        <th scope="col">PID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Temperatures</th>
                        <th scope="col">Heart Rate</th>
                        <th scope="col">Nurse ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark Zuckeberg</td>
                        <td>38 C <button>Chart</button></td>
                        <td>62 bpm <button>Chart</button></td>
                        <td> Zaina Doudou</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob Thornton</td>
                        <td>38 C <button>Chart</button></td>
                        <td>62 bpm <button>Chart</button></td>
                        <td> Sophie Massoko</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry LaCroix</td>
                        <td>37 C <button>Chart</button></td>
                        <td>62 bpm <button>Chart</button></td>
                        <td> Belgony Madesu</td>

                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Kim Knowles</td>
                        <td>38 C <button>Chart</button></td>
                        <td>62 bpm <button>Chart</button></td>
                        <td> Mari Lepede</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Shoelie Carter</td>
                        <td> 38 C <button>Chart</button></td>
                        <td>62 bpm <button>Chart</button></td>
                        <td> Kimmi Lajolie</td>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default DashboardPortal
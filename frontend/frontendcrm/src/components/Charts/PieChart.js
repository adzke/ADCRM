import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import ContactGoal from '../Data/ContactGoal';


function PieChart(props) {
    
    const employeepercent = props.employeecount/100
    const targetpercent = props.targetvalue/100
    const data2 = targetpercent - employeepercent
    return (
        <div>
          
          <Doughnut 
            
            options={{
                maintainAspectRatio: false,
                cutoutPercentage: 85,
                radius: 50,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                }
            }}
            
            data={{
                
                datasets: [{
                   
                    data: [employeepercent, data2],
                    backgroundColor: [
                    'rgba(76, 254, 133)',
                    
                ],
            }]
            }}
            
            
           />  
        </div>
    )
}

export default PieChart

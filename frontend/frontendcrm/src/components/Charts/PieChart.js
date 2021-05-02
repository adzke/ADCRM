import React from 'react'
import { Doughnut } from 'react-chartjs-2';


function PieChart(props) {

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
                   
                    data: [props.employeecount, props.targetvalue],
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

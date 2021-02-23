import React from 'react'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'
import {Container} from '@material-ui/core'

const Chart = (props) => {
    const {totaux} = props
  
    const data = {
        labels: [`Vitalité : ${totaux.vitalite}`, `Vitesse : ${totaux.vitesse}`, `Dégats : ${totaux.degats}`],
        datasets: [
            {
            label: "",
            data: [totaux.vitalite, totaux.vitesse, totaux.degats],
            backgroundColor: [
                'rgba(56, 151, 48, 0.2)',
                'rgba(255, 200, 20, 0.2)',
                'rgba(230, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(56, 151, 48, 1)',
                'rgba(255, 200, 20, 1)',
                'rgba(230, 0, 0, 1)'
            ],
            borderWidth: 2,
            },
        ],
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

    return(
        <Container maxWidth='md'>
            <Bar data={data} options={options}/>
        </Container>
        
    )
}

const mapStateToProps = (state)=>{
    return {
        totaux: state.totaux
    }
}

export default connect(mapStateToProps)(Chart)
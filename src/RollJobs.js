import React, { Component } from 'react'
import './RollJobs.css'
import Job from './Job'

class RollJobs extends Component {

    static defaultProps = {
        jobs: ['Freelancer', 'Black Mage', 'White Mage', 'Vangaurd']
    }

    constructor(props) {
        super(props)

        this.state = {
            job1 : 'Freelancer',
            job2 : 'Freelancer',
            job3 : 'Freelancer',
            job4 : 'Freelancer',
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }

    roll(){
        const {jobs} = this.props
        this.setState({
            job1 : jobs[Math.floor(Math.random() * sides.length)],
            job2 : jobs[Math.floor(Math.random() * sides.length)],
            job3 : jobs[Math.floor(Math.random() * sides.length)],
            job4 : jobs[Math.floor(Math.random() * sides.length)],
            rolling:true
        })
        setTimeout (() => {
            this.setState({rolling:false})
        },1000)
    }

    render() {

    }
}

export default RollJobs
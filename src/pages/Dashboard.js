import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Charts2 from '../components/dashboard/Chart2'
import Charts1 from '../components/dashboard/Charts1'
import InfoCard from '../components/dashboard/InfoCard'
import { dashboardData } from '../static'
const Dashboard = () => {
  const {cards} = dashboardData
  return (
    <div>
    <h2 className='fw-bold mb-3 text-dark'>Dashboard</h2>
      <Row>
        {
          cards.map(card => {
            return(
              <Col key={card.id} md='6' lg='3'>
              <InfoCard {...card} />
            </Col>
            )
          })
        }
        <Col md='7' className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
          <h4>Reports</h4>
              <Charts1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md='5' className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
              <h4>Analytics</h4>
              <Charts2 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
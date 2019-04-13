import React from 'react'
import gronningen from '../assets/images/gronningen.jpg'
import indonesia from '../assets/images/indonesia.jpg'
import mexico from '../assets/images/mexico-fires.jpg'
import '../assets/styles/main.scss'
import { Card } from '../index'

const campaigns = [
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: indonesia,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: mexico,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: gronningen,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
]

export default () => (
  <div className="campaigns">
    <h3>Campaigns</h3>
    <p>These Campaigns are working hard to solve causes of the Commons</p>
    <div className="cards">
      {campaigns.map(({ title, description, image }) => (
        <Card
          title={title}
          description={description}
          giversCount={18}
          donationsCount={32}
          image={image}
        />
      ))}
    </div>
  </div>
)
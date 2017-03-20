import React, { Component } from 'react'
import { TagCloud } from "react-tagcloud";

const data = [
  { value: 'ფეხები გაფშიკა', count: 3 },
  { value: 'წერილი წაიღო', count: 2 },
  { value: 'მარილზე წავიდა', count: 2 },
  { value: 'რა მუხტალია წუთისოფელი', count: 6 },
  { value: 'შემიჭამე???', count: 17 },
  { value: 'ეკრანის სიგანე', count: 5 },
  { value: 'რა გათამამებული კატაა!', count: 7 },
  { value: 'კაროჩე', count: 1 },
  { value: 'ცვეტში', count: 2 },
];

class GeorgianWordCloud extends Component {
  render () {
    return (
      <TagCloud
        minSize={18}
        maxSize={35}
        tags={data}
        className='simple-cloud'
      />
    )
  }
}

export default GeorgianWordCloud

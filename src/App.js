import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BreadBakingChart from './components/BreadBakingChart'
import GeorgianWordCloud from './components/GeorgianWordCloud'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <p>
            Dear fellow JumpStarters,
          </p>

          <p>
            When I began interning at JumpStart back in the fall of 2014,  I wasn’t always 100% focused on getting work done. The office kitchen had an oven, and I just couldn’t resist!
          </p>

          <BreadBakingChart />

          <p>
            I started working as a JumpStart employee in early 2015, and became more serious about learning to program. With guidance from Jason and the other developers at JumpStart, and a whole lot of reading on the interwebs, I learned Rails and other important web dev skills.
          </p>

          <p>
            <b>REPLACE: Sideways bar chart with important web dev tools/skills</b>
          </p>

          <p>
            During my initial months in the office, I could barely understand anything in your rapid-fire Georgian conversations. But all of you were patient, taking the time to explain hundreds of Georgian words, phrases, and cultural references (leaving little room for other languages).
          </p>

          <p>
            REPLACE: <b>language abilities chart - each language as a separate line, over time, with fluency as dependent axis</b>
          </p>

          <p>
            ზოგი სიტყვა და ფრაზა გამომადგა, ზოგი... ნაკლებად ;)
          </p>

          <GeorgianWordCloud />

          <p>
            In the end, JumpStart for me has been more than just baking, programming, and Georgian. It’s been about you, my JumpStart colleagues! I’m ever grateful that I work at a place where I consider my colleagues my friends.
          </p>

          <p>
            REPLACE: <b>ნათანს უყვარს ჯამპსტარტი</b>
          </p>

          <p>
            I’ve had a wonderful time working, playing, and learning with you all over the past two and a half years. I’m continuously amazed by how talented each of you are and that you accepted me into your midst. A big thanks to each and every one of you, and make sure to stay in touch. :)
          </p>

          <p>
            მარად, <br /> ნათანი
          </p>

          <p>
            P. S. If you find data inaccuracies in this article, please report them to Nino Macharashvili; ნათანი გაგიჟებულია, მედიტაციის კურსზე მიდის და ვერ დაგეხმარება.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

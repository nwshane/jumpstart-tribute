import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BreadBakingChart from './components/BreadBakingChart'
import GeorgianWordCloud from './components/GeorgianWordCloud'
import WebDevSkillsChart from './components/WebDevSkillsChart'
import LanguageFluencyChart from './components/LanguageFluencyChart'
import NathanLovesJumpStart from './components/NathanLovesJumpStart'

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
            I started working as a JumpStart employee in early 2015, and became more serious about learning to program. With guidance from Jason and the other developers at JumpStart, and a whole lot of reading on the interwebs, I learned Rails and other important web dev skills:
          </p>

          <WebDevSkillsChart />

          <p>
            During my initial months in the office, I could barely understand anything when you talked to each other in Georgian. But you were patient, taking the time to explain hundreds of Georgian words, phrases, and cultural references (leaving little room in my brain for other languages).
          </p>

          <LanguageFluencyChart />

          <p>
            ზოგი სიტყვა და ფრაზა გამომადგა, ზოგი... ნაკლებად ;)
          </p>

          <GeorgianWordCloud />

          <p>
            In the end, JumpStart for me has been more than just baking, programming, and Georgian. It’s been about you, my JumpStart colleagues! I don't know if I can express this in words, so...
          </p>

          <NathanLovesJumpStart />

          <p>
            I’ve had a wonderful time working, playing, and learning with you all over the past two and a half years. I’m continuously amazed by how talented each of you are and that you accepted me into your midst. Thanks to each of you, and let's make sure to stay in touch. :)
          </p>

          <p>
            მარად, <br /> ნათანი
          </p>

          <p>
            P. S. If you find data inaccuracies in this article, please report them to Nino Macharashvili; ნათანი გაგიჟებულია, მედიტაციის კურსზე მიდის და ვერ დაგეხმარება.
          </p>

          <p>
            P. P. S. I would have asked one of the designers to help me with this page, but then it wouldn't have been a surprise for them ;)
          </p>
        </div>
      </div>
    );
  }
}

export default App;

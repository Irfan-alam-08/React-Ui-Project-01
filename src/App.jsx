import Section1 from "./Components/section1/section1"


const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Hi! I’m a curious and motivated person who loves learning new things, exploring technology, and improving my skills to achieve my goals',
      tag:'satisfied',
      color:'green'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Hello! I enjoy meeting new people, sharing ideas, and discovering opportunities that help me grow both personally and professionally',
      tag:'happy',
      color:'blue'
    },
    {
      img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Hey there! I’m passionate about creativity, problem-solving, and continuous learning. I believe every challenge is an opportunity to become better',
      tag:'neutral',
      color:'lightblue'
    },
    {
      img:'https://images.unsplash.com/photo-1752778936063-31a4fc984717?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Hi everyone! I’m someone who values hard work, teamwork, and self-improvement. I’m always excited to learn, connect, and try something new',
      tag:'undercovered',
      color:'red'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      {/* <Section2/> */}
    </div>
  )
}

export default App
import MeetupList from "@/components/meetups/MeetupList"

const Dummy_meetup = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/PortArthurPenitentiary.jpg',
        address: 'Somewhere in this world',
        description: 'let\'s go to our first meetup'
    }
]

const HomePage = (props) => {
  return (
    <>
        <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy_meetup
    }
  }
}

export default HomePage
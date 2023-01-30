import MeetupDetail from "@/components/meetups/MeetupDetail"

const DetailPage = () => {
  return (
    <>
        <MeetupDetail 
            id='m1'
            title= 'A First Meetup'
            image= 'https://upload.wikimedia.org/wikipedia/commons/c/c2/PortArthurPenitentiary.jpg'
            address= 'Somewhere in this world'
            description= 'our first meetup'
        />
    </>
  )
}

export default DetailPage
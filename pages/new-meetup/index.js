import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (entermeetup) => {
    console.log(entermeetup);
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;

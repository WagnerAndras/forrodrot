import { Hero, Map, Contact, FAQ, UpcomingEvents } from "@sections";
import { useEvents } from "@utils";

const mockdata = [
  {
    id: "asdasdasd",
    title: "Visszavágó - El a kezekkel a tanárainktól!",
    image:
      "https://scontent.fbud5-1.fna.fbcdn.net/v/t39.30808-6/311113160_174514348568834_734850961700143127_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=340051&_nc_ohc=x0iIxpBCrk8AX_wtvUs&_nc_ht=scontent.fbud5-1.fna&oh=00_AT8yyGO57SY9FpJZEFRqkfzq1HgCvAdBYqmlZNsWX8bWqQ&oe=634DD14E",
    date: new Date(1665748800),
    locationName: "Budapest, Oktogon",
    locationX: 47.497912,
    locationY: 19.040235,
    link: "https://www.facebook.com/events/786820269038179",
  },
  {
    id: "asdasdasd123213",
    title: "Külső-pesti szolidaritási diáktüntetés",
    image:
      "https://scontent.fbud5-1.fna.fbcdn.net/v/t39.30808-6/310931509_840923210423231_587475835169550298_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=340051&_nc_ohc=s_iNElbU_JYAX8bl6VB&_nc_ht=scontent.fbud5-1.fna&oh=00_AT9iTiz0f7II2Ai_o1Y6b2iEJP0OFZQFjSrvaQBuLfPQyg&oe=634C9215",
    date: new Date(1665748800),
    locationName: "Budapest, Oktogon",
    locationX: 47.497912,
    locationY: 19.040235,
    link: "https://www.facebook.com/events/1634952510292772",
  },
  {
    id: "blbabla",
    title: "Visszavágó - El a kezekkel a tanárainktól!2",
    image:
      "https://scontent.fbud5-1.fna.fbcdn.net/v/t39.30808-6/311113160_174514348568834_734850961700143127_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=340051&_nc_ohc=x0iIxpBCrk8AX_wtvUs&_nc_ht=scontent.fbud5-1.fna&oh=00_AT8yyGO57SY9FpJZEFRqkfzq1HgCvAdBYqmlZNsWX8bWqQ&oe=634DD14E",
    date: new Date(1665748800),
    locationName: "Budapest, Oktogon",
    locationX: 47.497912,
    locationY: 19.040235,
    link: "https://www.facebook.com/events/786820269038179",
  },
  {
    id: "asdasd123",
    title: "Kiállás az oktatásért - rendhagyó aláírásgyűjtés!",
    image:
      "https://scontent.fbud5-1.fna.fbcdn.net/v/t39.30808-6/310387767_1104726183509969_5560212479449453438_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=340051&_nc_ohc=r10vMX38xpcAX_7z6yB&_nc_ht=scontent.fbud5-1.fna&oh=00_AT9ukZz4vW4MrAu_Sp5sn19vXdQAz3rswJN4TRKqUHmK_g&oe=634E0A5F",
    date: new Date(1665748800),
    locationName: "Budapest, Oktogon",
    locationX: 47.497912,
    locationY: 19.040235,
    link: "https://www.facebook.com/events/624321112656726",
  },
];

// TODO Logo and fav title// https://noar.hu/szimbolum/

const Home = () => {
  const { events, markers, loading } = useEvents();

  return (
    <>
      <Hero />

      <UpcomingEvents loading={loading} events={events} />

      <Map markers={markers} />

      <FAQ />

      <Contact />
    </>
  );
};

export default Home;

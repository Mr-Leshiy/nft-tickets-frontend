import SendTickets from "../components/elements/SendTickets/SendTickets";
import AddNewCollection from "../components/elements/AddNewCollection/AddNewCollection";
import AddNewTicket from "../components/elements/AddNewTicket/AddNewTicket";
import Tickets from "../components/elements/Tickets/";
import Footer from "../components/elements/Footer/Footer";

const TicketsPage = () => {
  return (
    <div>
      <SendTickets />
      <Tickets />
      <AddNewTicket />
      <AddNewCollection />
      <Footer />
    </div>
  );
};

export { TicketsPage };

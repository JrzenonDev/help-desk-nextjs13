async function getTickets() {
  try {
    const res = await fetch("http://localhost:4000/tickets");
    return res.json();
  } catch (err) {
    console.log("tickets not found", err);
    throw new Error(err);
  }
}

export default async function TicketList() {
  const tickets = await getTickets();

  console.log(tickets);

  return (
    <>
      <h3>Ticket List</h3>

      {tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}

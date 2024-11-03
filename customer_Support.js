// Task 2 Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    const ticketContainer = document.getElementById("ticket-container");
    const errorMessage = document.getElementById("error-message");
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        
        const tickets = await response.json();
        console.log("Tickets:", tickets)
        if (!tickets.length) {
            throw new Error("No tickets found.");
        }
        
        displayTickets(tickets);

    } catch (error) {
        console.error = `Error: ${error.message}`;
        // this is task 4 
    } finally {
       
    }
}

// Task 3 Display Tickets Dynamically on the Page
function displayTickets(tickets) {
    const ticketContainer = document.getElementById("ticket-container");
    tickets.forEach(ticket => {
        const ticketDiv = document.createElement("div");
        ticketDiv.classList.add("ticket");

        const ticketId = document.createElement("h3");
        ticketId.textContent = `Ticket ID: ${ticket.id}`;

        const customerName = document.createElement("p");
        customerName.textContent = `Customer Name: User ${ticket.userId}`;

        const issueDescription = document.createElement("p");
        issueDescription.textContent = `Issue Description: ${ticket.title}`;

        const details = document.createElement("p");
        details.textContent = `Details: ${ticket.body}`;
        
        ticketDiv.appendChild(ticketId);
        ticketDiv.appendChild(customerName);
        ticketDiv.appendChild(issueDescription);
        ticketDiv.appendChild(details);
        ticketContainer.appendChild(ticketDiv);
    });
}
fetchTickets();
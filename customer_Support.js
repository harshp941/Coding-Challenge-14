// Task 2 Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const tickets = await response.json();
        console.log("Tickets:", tickets)
        if (!tickets.length) {
            throw new Error('No tickets found.');
        }
        
        displayTickets(tickets);

    } catch (error) {
        console.error = `Error: ${error.message}`;
    } finally {
       
    }
}


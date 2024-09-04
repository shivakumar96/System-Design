# Server Sent events

Onew way communication from server to client, which ahppens based on the events
- This is unidirectional
- This establishes a persistent connection
- Data will be typicall sent as plain text or JSON

### To establish a SSE connection the server shiuld resoind to clinet with the following header

` 'Content-Type', 'text/event-stream' `


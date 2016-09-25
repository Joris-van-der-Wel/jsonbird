# JSONBird
JSONBird is a Duplex stream which makes it easy to create a flexible JSON-RPC 2.0 client or server (or a bidirectional combination)
over any reliable transport. You can use out of order messaging or an in-order byte stream.

It can parse/emit JSON strings or parse/emit plain-old-javascript-objects in memory.

JSONBird does not care what transport is used, for example you could use:
* Synchronous HTTP request/responses
* HTTP polling
* WebSocket
* TCP
* SCTP
* postMessage() between a Web Worker or iframe's in a browser (without having to serialize to JSON)
* Direct in-memory communication between two instances (for example, for test stubs)
* Message port's for multiprocess browser extensions

# API Documentation

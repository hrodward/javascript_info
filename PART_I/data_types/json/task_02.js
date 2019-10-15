/* eslint-disable no-undef */

"use strict";

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => (key === "" || value !== meetup) ? value : undefined));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
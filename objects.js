var hotel = { name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: 'Yes',
  pool: 'Yes',
  gym: 'Yes',
  businessOffice: 'Yes',
  restaurant: 'No', 
  
  roomsAvail: function() {
    return this.rooms - this.roomsBooked;
      }
}

function getRooms() {
  document.getElementById("hotelname").innerHTML = hotel.name;
  document.getElementById("rooms").innerHTML = hotel.rooms;
  document.getElementById("roomsavail").innerHTML = hotel.roomsAvail();
}
// Reservation counts
let totalReservations = 0;
let reservationsPerTrain = { train1: 0, train2: 0, train3: 0 };
let reservationsPerRoute = { route1: 0, route2: 0, route3: 0 };

// Event listener for Make Reservation button
function makeReservation() {
  const form = document.getElementById('reservationForm');
  const route = form.querySelector('input[name="route"]:checked');
  const train = form.querySelector('#train');
  const date = form.querySelector('#date');
  const time = form.querySelector('#time');
  
  if (!route || !train.value || !date.value || !time.value) {
    alert('Please fill in all the fields.');
    return;
  }
  
  const reservation = {
    route: route.value,
    train: train.value,
    date: date.value,
    time: time.value
  };
  
  // Check seat availability
  const isAvailable = checkAvailability(reservation);
  
  if (isAvailable) {
    totalReservations++;
    reservationsPerTrain[train.value]++;
    reservationsPerRoute[route.value]++;
    updateReservationStatus();
    alert('Reservation successful!');
  } else {
    alert('Sorry, the selected train is fully booked.');
  }
  
  // Reset form
  form.reset();
}

// Check seat availability
function checkAvailability(reservation) {
  // In this example, assume the seats are available for all reservations
  return true;
}

// Update reservation status display
function updateReservationStatus() {
  const totalReservationsElement = document.getElementById('totalReservations');
  const reservationsPerTrainElement = document.getElementById('reservationsPerTrain');
  const reservationsPerRouteElement = document.getElementById('reservationsPerRoute');
  
  totalReservationsElement.textContent = totalReservations;
  
  // Clear existing content
  reservationsPerTrainElement.innerHTML = '';
  reservationsPerRouteElement.innerHTML = '';
  
  // Update reservations per train
  for (const train in reservationsPerTrain) {
    const listItem = document.createElement('li');
    listItem.textContent = `Train ${train}: ${reservationsPerTrain[train]}`;
    reservationsPerTrainElement.appendChild(listItem);
  }
  
  // Update reservations per route
  for (const route in reservationsPerRoute) {
    const listItem = document.createElement('li');
    listItem.textContent = `Route ${route}: ${reservationsPerRoute[route]}`;
    reservationsPerRouteElement.appendChild(listItem);
  }
}

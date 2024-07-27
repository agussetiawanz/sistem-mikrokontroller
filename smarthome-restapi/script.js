const API_URL = 'https://66a481c45dc27a3c19090f94.mockapi.io';

document.addEventListener('DOMContentLoaded', () => {
    fetchSensorData();
});

function toggleRelay(relayId) {
    fetch(`${API_URL}/relays/${relayId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ state: 'toggle' })
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Relay ${relayId} toggled`, data);
    })
    .catch(error => console.error('Error:', error));
}

function fetchSensorData() {
    fetch(`${API_URL}/sensors`)
    .then(response => response.json())
    .then(data => {
        const sensorList = document.getElementById('sensor-list');
        sensorList.innerHTML = '';
        data.forEach(sensor => {
            const li = document.createElement('li');
            li.textContent = `Sensor ${sensor.id}: ${sensor.value}`;
            sensorList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
}

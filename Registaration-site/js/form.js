const scriptURL = 'https://script.google.com/macros/s/AKfycbw9zrc8ACgvjA0R5a5xzIWD1yW9LkKS90fZ6uzCEf0L/dev';
const form = document.forms['registrationForm'];
const positionField = document.getElementById('position');
const perawatOptions = document.getElementById('perawatOptions');
const subPositionField = document.getElementById('subPosition');
const otherSubPositionField = document.getElementById('otherSubPosition');
const customSubPositionField = document.getElementById('customSubPosition');

// Tampilkan opsi tambahan jika posisi 'Perawat' dipilih
positionField.addEventListener('change', () => {
  if (positionField.value === 'Perawat') {
    perawatOptions.style.display = 'block';
  } else {
    perawatOptions.style.display = 'none';
  }
});

// Tampilkan field input manual jika 'Lainnya' dipilih
subPositionField.addEventListener('change', () => {
  if (subPositionField.value === 'Lainnya') {
    otherSubPositionField.style.display = 'block';
  } else {
    otherSubPositionField.style.display = 'none';
  }
});

// Pengiriman data form
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  // Jika sub-position "Lainnya" dipilih, tambahkan customSubPosition ke formData
  if (subPositionField.value === 'Lainnya') {
    formData.append('subPosition', customSubPositionField.value);
  }

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => alert('Pendaftaran berhasil!'))
  .catch(error => console.error('Error!', error.message));
});

export default function generateContact() {
    const main = document.getElementById('main');
    main.replaceChildren();
    const location = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const hours = document.createElement('p');
    location.innerText = `800 Main St, New York, New York`;
    phoneNumber.innerText = `555-555-0012`;
    hours.innerText = `Monday - Friday: 10:00am - 11:00pm\nSunday-Saturday: 10:00am - 3:00am`;
    main.append(location, phoneNumber, hours);
}
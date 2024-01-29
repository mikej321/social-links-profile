import './styles/style.sass';
import proPic from './assets/images/avatar-jessica.jpeg';

window.onload = createProfile;

function createProfile() {
    const container = document.querySelector('.container');

    // header elements
    const header = document.createElement('header');
    
    const profileImg = new Image();
    profileImg.src = proPic;
    profileImg.alt = 'An African-American woman looking into the camera';
    header.append(profileImg);

    // main elements
    const main = document.createElement('main');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const profileName = document.createElement('h1');
    profileName.textContent = 'Jessica Randall';
    infoContainer.append(profileName);

    const location = document.createElement('p');
    location.textContent = 'London, United Kingdom';
    infoContainer.append(location);

    main.append(infoContainer);

    const hobbies = document.createElement('p');
    hobbies.classList.add('hobbies');
    hobbies.textContent = 'Front-end developer and avid reader.';
    main.append(hobbies);

    // footer elements
    const footer = document.createElement('footer');

    const link1 = document.createElement('a');
    link1.textContent = 'GitHub';
    link1.href = '#';
    footer.append(link1);

    const link2 = document.createElement('a');
    link2.textContent = 'Frontend Mentor';
    link2.href = '#';
    footer.append(link2);

    const link3 = document.createElement('a');
    link3.textContent = 'LinkedIn';
    link3.href = '#';
    footer.append(link3);

    const link4 = document.createElement('a');
    link4.textContent = 'Twitter';
    link4.href = '#';
    footer.append(link4);

    const link5 = document.createElement('a');
    link5.textContent = 'Instagram';
    link5.href = '#';
    footer.append(link5);

    container.append(header);
    container.append(main);
    container.append(footer);
}
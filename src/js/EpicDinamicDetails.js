export const handleEpicDetails = (epicId) => {
    const themeSection = document.getElementById(`${epicId}`).closest('.mockups-stack');

    if (!themeSection) {
        console.error(`Não foi possível encontrar a seção com id ${epicId}`);
        return;
    }

    const sections = themeSection.querySelectorAll('.mockup-frame');

    sections.forEach(section => {
        if (section.id !== epicId) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });

    console.log(epicId);
};


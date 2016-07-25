export default function getColorById(id) {
    const colors = [
        '#ed5e40', '#fa944a', '#ffb658', '#fdf765', '#a7df70', '#7ccb60',
        '#41bbae', '#47b9f8', '#4b83bc', '#6067b7', '#954b98', '#ba5fa5',
        '#ec6899', '#fa5f71'
    ];

    return colors[id % colors.length] || '#50a965';
}

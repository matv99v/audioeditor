export default function getFileNameFromPath(path) {
    const arr = path.split('/');
    return arr[arr.length - 1];
}

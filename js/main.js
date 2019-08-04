var config = {
    libraries: {
        source: "./libraries.json",
    },
    
    studies: {
        source: "./studies.json",
    }
    
};

function _fetch(path, handler) {
    fetch(path)
        .then(response => response.json())
        .then(json => handler(json));
}

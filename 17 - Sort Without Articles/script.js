const bands = ['dream theater', 'liquid Tension Experiment', 'king crimson', 'red hot chili peppers', 'leprous','opeth'];


function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim()
};

let sortedBands = bands.sort((a,b) => strip(a)>strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
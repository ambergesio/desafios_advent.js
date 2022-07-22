const carta = 'bici coche balon _playstation bici coche peluche'

const listGifts = (letter) => {
	const list = {};
	letter.trim().split(' ').forEach(e => {
		if (!list[e]) list[e] = 1;
		else list[e] +=1;
    });
    Object.keys(list).forEach(e => {
        if (e.includes('_')) {
            delete list[e];
        }
    });
    return list;
};

const regalos = listGifts(carta);
console.log(regalos);

//{ bici: 2, coche: 2, balon: 1, peluche: 1 }
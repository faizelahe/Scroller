const data = [
    {
        "imgURL": "https://images.squarespace-cdn.com/content/v1/598918dae3df28f92274ae74/1503888531117-Y3HCBJ88VRKZ2UAXRYI8/ke17ZwdGBToddI8pDm48kCMOzc4GiK3dsNqiUCo6wrh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLLxGPZs9cXJqW7PQ94qJw_PXe0-aBO9Nk8dpGJ5ZKQqQP0CxanRMUAlhQx1QfmRy/mount-everest-square.jpg",
        "name": "Mount Everest",
        "description": "Tallest mountain on Earth",
        "location": "Nepal"
    },
    {
        "imgURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/GreatBarrierReef-EO.JPG/220px-GreatBarrierReef-EO.JPG",
        "name": "Great Barrier Reef",
        "description": "Earth's largest coral reef system",
        "location": "Australia"
    },
    {
        "imgURL": "https://d2g6byanrj0o4m.cloudfront.net/images/3315/victoriafallsblog3__square.jpg",
        "name": "Victoria Falls",
        "description": "Largest waterfall on Earth",
        "location": "Zimbabwe"
    },
    {
        "imgURL": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/aurora-square-tor-ivar-naess.jpg",
        "name": "Aurora Borealis",
        "description": "A colorful display in the sky at night",
        "location": "Alaska"
    },
    {
        "imgURL": "https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images-medium-5/1-grand-canyon-square-panorama-tanya-harrison.jpg",
        "name": "Grand Canyon",
        "description": "A beautiful canyon",
        "location": "United States"
    },
    {
        "imgURL": "http://2.bp.blogspot.com/-HIf3th1m8Kc/TfYnrD1Zg2I/AAAAAAAAAXA/KkXYOhCpKVc/s1600/3413300992_7c3d6eb0e7.jpg",
        "name": "Parícutin Volcano",
        "description": "Youngest volcano to form in the Northern Hemisphere",
        "location": "Mexico"
    },
    {
        "imgURL": "https://073bddbe7aa062defd37fde3-cwzdvdpfea.netdna-ssl.com/wp-content/uploads/2011/09/Harbor-of-Rio-de-Janeiro-7-Natural-Wonders-of-the-World.jpg",
        "name": "Harbour of Rio de Janeiro",
        "description": "Earth's largest bay",
        "location": "Brazil"
    }
]

ui = new UI;

ui.display(data[0])

document.getElementById('btn-next').addEventListener('click', () => {
    document.getElementById('btn-previous').style.display = 'block';

    let [a] = nextIterator(data);

    if (a != undefined) {
        ui.display(a)
    } else {
        window.location.reload()
    }
});

document.getElementById('btn-previous').addEventListener('click', () => {
    let [a] = prevIterator(data);

    if (a.name === 'Mount Everest') {
        document.getElementById('btn-previous').style.display = 'none';
    }

    ui.display(a)
});

index = 1;

function nextIterator(data) {
    return {
        [Symbol.iterator]() {
            return {
                next: function () {
                    index++;
                    return index <= data.length ?
                        { value: data[index - 1], done: false } :
                        { value: undefined, done: true }
                }
            }
        }
    }
}

function prevIterator(data) {
    return {
        [Symbol.iterator]() {
            return {
                next: function () {
                    index--;
                    return index < data.length ?
                        { value: data[index - 1], done: false } :
                        { value: undefined, done: true }
                }
            }
        }
    }
}
const select=($where,$what)=>{
    return $where.querySelectorAll($what);
}

const clone=($where,$what)=>{
    return $where.importNode($what.content,true);
}

//index-1
const value = ["#productrow",'tbody','td'];

// On vérifie si le navigateur prend en charge
// l'élément HTML template en vérifiant la présence
// de l'attribut content pour l'élément template.
if ("content" in document.createElement("template")) {

    // On prépare une ligne pour le tableau
    let template = document.querySelector('#card');
    console.log(template);
    // On clone la ligne et on l'insère dans le tableau
            //let tbody = document.querySelector("tbody");
    let body = select(document,'#allProducts')[0];
    
    let produits=[
        {
        'name': 'name:abc',
        'color': ['bcd', 'efg', 'ghi'],
        'prix': 2000,
        'details': 'details: lorerienfeklevlznbvllvnv jbdkbfkjzbuiegz bfguigbezguug',
        '_id':'1234',
        'imageUrl':'carre-2000-2000.png',
        'alt':'produit0'
    },
        {
            'name': 'def',
            'color': ['ijk', 'lmn', 'opq'],
            'prix': 1920,
            'details': 'details: fs;bs,;bsf;benfeklevlznbvllvnv jbdkbfkjzbuiegz bfguigbezguug',
            '_id': '567',
            'imageUrl': 'carre-miroir.png',
            'alt': 'produit1',
        }
]

let toappend;

    for (let produit of produits){
        let copy = clone(document, template);
        let url = select(copy, '.cardLink')[0];
        let name = select(copy, '.cardModelName')[0];
        let color = select(copy, '.cardOption')[0];
        let price = select(copy, '.cardPrice')[0];
        let detail = select(copy, '.cardDetails')[0];
        let id = select(copy, '.cardId')[0];
        let image =document.createElement('img');
        
        
        //`<img src="${produit.imageUrl}" alt="${produit.alt}" class='.cardImage'>`
    
        image.setAttribute('alt',produit.alt);
        image.setAttribute('src',produit.imageUrl);
        url.href=`produit/?id=${produit._id}`;
        console.log(produit._id);


        name.textContent=produit.name;
        color.textContent=produit.color;
        price.textContent=(produit.prix)/100+'€';
        detail.textContent=produit.details;
        id.textContent=produit._id;
        url.appendChild(image);
        body.appendChild(copy);
        
    }
}
const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");
var upd;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ctype = form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');
    fetchPrice(ctype);
});

const fetchPrice = async (ctype) => {
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    showPrice(r.data.coin);
}
    const showPrice = (coinData)=>{
    const price = coinData.price;
    const volume = coinData.volume;
    const change = coinData.priceChange1d;
    const base = coinData.name;
    const curr = 'INR';
    var col="red";
    if(change<0){
        col="red";
    }

    res.innerHTML = ` <tr class="bg-primary" style="background-color: #0d6efd; border-color:#0d6efd; color:white; font-weight:700">
    <td>
        Property
    </td>
    <td>
        Value
    </td>
</tr>

<tr>
    <td>
       ${base}</td>
    <td style="color:${col};"><span style="font-size:1.3em;">${price}</span>${curr}</td>
</tr>

<tr>
    <td>
       Volume (24hrs)
    </td>
    <td>
        ${volume}
    </td>
</tr>

<tr>
    <td>
       Change (24hrs)
    </td>
    <td style="color:${col};">
        ${change} ${curr}
    </td>
</tr>`
   


}
const zapisi = [];


function dodajZapis()
{
  const opisTaska = document.getElementById('opisTaska').value;
  const vremeTaska = document.getElementById('vremeTaska').value;

  const status = izracunajStatus(vremeTaska);
  
  zapisi.push(Number(vremeTaska));

  const sviZapisi = document.getElementById('sviZapisi');
  
  sviZapisi.innerHTML += `
    <div class="zapis">
      <div>${opisTaska}</div>
      <div>${vremeTaska} sati</div>
      <div>Status: ${status}</div>
    </div>
  `

}

function prikaziSate()
{
  const ukupanBtn = document.getElementById('ukupanBtn');

  ukupanBtn.style.background = 'gray';

  const ukupanBroj = document.getElementById('ukupanBroj');
  ukupanBroj.style.display = 'inline-block';
  ukupanBroj.innerHTML = izracunajUkupnoVreme(zapisi);

}


function izracunajUkupnoVreme(niz)
{
  let ukupno = 0;
  for(let i =0 ; i<niz.length; i++)
  {
    ukupno+= niz[i];
  }

  return ukupno;
}

function izracunajStatus(vreme)
{
  let status = ''
  if(vreme < 4)
  {
    return status = 'malo';
  }

  if(vreme === 4)
  {
    return status = 'srednje';
  }

  return status = 'puno';
}
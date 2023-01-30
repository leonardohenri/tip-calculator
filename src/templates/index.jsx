
import { useEffect , useState } from "react";

import "./styles.css"



export const Home = () =>{
  const [porcentagem, setPorcentagem] = useState(0);
  const [bill,setBill]= useState(0.00);
  const [people,setPeople]= useState(1);
  const [totalAmount,setTotalAmount] = useState(0);
  const [total,setTotal] = useState(0); 

  const handleRef = (e) =>{
    const seletors=window.document.querySelectorAll('.bill-label')
    seletors.forEach(seletor => seletor.classList.remove('active'))
    e.target.classList.add('active');
    console.log(seletors.length);
  }

  const handleReset = () =>{
    const seletors=window.document.querySelectorAll('.bill-label')
    seletors.forEach(seletor => seletor.classList.remove('active'))
    setBill(0);
    setPeople(1);
    setTotal(0);
    setPorcentagem(0);
    setTotalAmount(0);
    document.getElementById('custom').value = ''
    document.getElementById('bill').value = '0.00'
    document.getElementById('people').value = '1'
    
  }

  useEffect(()=>{
    if( bill>0 && people>0 )  {
      const total = bill+bill*(porcentagem/100);
      const totalPeople = total / people;
      setTotalAmount(total);
      setTotal(totalPeople);
  }
  },[porcentagem,bill,people])

  return(
    <div className="container">
      <div className="grid">
        <div className="coluna1">
          <div><p>bill</p>
          <input type="number" id="bill" min={0} className="input" onChange={(e)=>setBill(parseFloat(e.target.value))} />
          </div>
          
          <div >
          <p>% do garçon</p>
          <div className="gridButton">
          <input onClick={()=>setPorcentagem(5)}  className="bill-radio " type='radio1'id="tip1"/> <label onClick={handleRef} className="bill-label" htmlFor="tip1">5%</label>
          <input onClick={()=>setPorcentagem(10)} className="bill-radio" type='radio2'id="tip2"/> <label  onClick={(e)=>handleRef(e)} className="bill-label" htmlFor="tip2">10%</label>
          <input onClick={()=>setPorcentagem(15)} className="bill-radio" type='radio3'id="tip3"/> <label  onClick={(e)=>handleRef(e)} className="bill-label" htmlFor="tip3">15%</label>
          <input onClick={()=>setPorcentagem(25)} className="bill-radio" type='radio4'id="tip4"/> <label  onClick={(e)=>handleRef(e)} className="bill-label" htmlFor="tip4">25%</label>
          <input onClick={()=>setPorcentagem(50)} className="bill-radio" type='radio5'id="tip5"/> <label  onClick={(e)=>handleRef(e)} className="bill-label" htmlFor="tip5">50%</label>
          <input type="number" id="custom" min={0} placeholder="custom" onClick={()=>{ const seletors=window.document.querySelectorAll('.bill-label')
    seletors.forEach(seletor => seletor.classList.remove('active'))}}  onChange={(e)=> setPorcentagem(parseInt(e.target.value))}/>
          </div>
          </div>
          <div>
          <p>number People</p>
          <input type="number" id="people" min={1} className="input" placeholder="1" onChange={(e)=> setPeople(parseInt(e.target.value))} />
          </div>
        </div>
        <div className="coluna2">
          <div className="valor">
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <p>${(totalAmount > 0 ? totalAmount : 0).toFixed(2)}</p>
          </div>
          <div className="valor">
            <div>
              <p>Total</p>
              <p>/ person</p>
            </div>
            <p>${(total > 0 ? total : 0).toFixed(2)}</p>
          </div>
          <button className="btn" onClick={handleReset}>reset</button>
        </div>
      </div>
    </div>

  );
}

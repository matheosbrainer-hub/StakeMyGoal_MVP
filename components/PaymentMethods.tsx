'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function PaymentMethods(){ const [methods,setMethods]=useState<any[]>([]); useEffect(()=>{ setMethods([]); },[]); const add=()=>alert('Add flow'); return (
  <div>
    <h4 style={{margin:0}}>💳 Payment Methods</h4>
    <ul style={{color:'#94a3b8'}}>{methods.length?methods.map(m=><li key={m.id}>{m.brand} ****{m.last4}</li>):<li>No payment methods</li>}</ul>
    <button className="btn" onClick={add} style={{marginTop:8}}>Add Payment Method</button>
  </div>
) }

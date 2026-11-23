import type { Aminning, Flokkur, Kvittun, Notandi } from '../types';

/**
 * Gervigögn sem eru notuð þar til Supabase er tengt (áfangi 4).
 */

export const flokkar: Flokkur[] = [
  { id: 'framkvaemdir', nafn: 'Framkvæmdir' },
  { id: 'gardurinn', nafn: 'Garðurinn' },
  { id: 'fri', nafn: 'Frí' },
];

export const kvittanir: Kvittun[] = [
  {
    id: '1',
    vara: 'Borvél',
    verslun: 'BYKO',
    kaupdagur: '2026-08-11',
    upphaed: 34490,
    flokkurId: 'framkvaemdir',
    skilafrestur: '2026-09-11',
    abyrgdTil: '2027-08-11',
    myndUrl: null,
  },
  {
    id: '2',
    vara: 'Lampi',
    verslun: 'IKEA',
    kaupdagur: '2026-07-25',
    upphaed: 15990,
    flokkurId: null,
    skilafrestur: '2026-11-25',
    abyrgdTil: null,
    myndUrl: null,
  },
];

export const aminningar: Aminning[] = [
  { id: 'a1', kvittunId: '2', dagsetning: '2026-11-18', tegund: 'skilafrestur' },
  { id: 'a2', kvittunId: '1', dagsetning: '2027-08-04', tegund: 'abyrgd' },
];

export const notandi: Notandi = {
  id: 'u1',
  nafn: '',
  netfang: '',
};

export function finnaKvittun(id: string | undefined) {
  return kvittanir.find((k) => k.id === id);
}

export function finnaFlokk(id: string | null | undefined) {
  return flokkar.find((f) => f.id === id);
}

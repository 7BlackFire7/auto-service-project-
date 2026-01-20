import { defineStore } from "pinia";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    objednavky: [],
    sluzby: [
      {
        id: 1,
        nazov: "Výmena oleja",
        popis: "Rýchla výmena oleja",
        cena: 1500,
        image: "/images/oil.jpg"
      },
      {
        id: 2,
        nazov: "Oprava bŕzd",
        popis: "Výmena brzdových platničiek",
        cena: 3000,
        image: "/images/brakes.jpg"
      },
      {
        id: 3,
        nazov: "Diagnostika",
        popis: "Kompletná diagnostika auta",
        cena: 1000,
        image: "/images/diagnostic.jpg"
      }
    ]
  }),
  actions: {
    pridajObjednavku(objednavka) {
      this.objednavky.push({
        ...objednavka,
        id: Date.now()
      });
    }
  }
});
# HCFurnace

La funzione HCFurnace lo rende in modo che le ricette della fornace possono prendere varia quantità di tempo a seconda dell'elemento che si fonde. Questo non influenza come funziona il combustibile, il che significa che alcune ricette prenderanno più o meno carburante.

Permette di impostare il tempo, in zecche, che ci vuole una ricetta specifica del forno per fondersi in base al suo elemento di input

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient ingredient, int time)

  //Fare una patata impiegare circa 83 minuti per fondere, perché non
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>,100000); 
```
### Classe

```zenscript
import mods.arcanearchives.GCT;
```

#### Metodi

```zenscript
void addRecipe(
  nome stringa, // nome ricetta
  IItemStack output, // l' output come itemstack
  IIngredient[] ingressi // gli ingressi come una serie di ingredienti
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'itemstack di uscita da rimuovere (la quantità deve corrispondere)
);
```

* * *

```zenscript
void replaceRecipe(
  string name, // il nome della ricetta (deve già esistere)
  IItemStack output, // l' output come itemstack
  IIngredient[] ingressi // gli ingressi come una serie di ingredienti
);
```

* * *

### Esempi

```zenscript
import mods.arcanearchives.GCT;

// Rimuove la ricetta per la polvere radiante
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Aggiunge una nuova ricetta per la polvere radiante
GCT. ddRecipe("radiant_polvere", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Sostituisce la ricetta di quarzo radiante sagomata senza disturbare lo schermo GCT
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```
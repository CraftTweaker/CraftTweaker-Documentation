### Classe

```zenscript
import mods.roots.Mortar;
```

#### Metodi

```zenscript
void addRecipe(
  IItemStack output, // l'output dell'oggetto di questa ricetta
  IIngrediente[] ingressi // una serie di ingredienti che sono 5 lunghi o 1 lunghi
);
```

* * *

```zenscript
void changeSpell(
  string spellName, // il nome dell' incantesimo come nel registro degli incantesimi
  IIngredient[] input // una serie di 5 elementi che sono i nuovi ingredienti per la ricetta
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'elemento stack prodotto dalla ricetta
);
```

* * *

### Esempi

```zenscript
import mods.roots. ortar;

// Aggiunge una ricetta che rende la polvere da sparo di selce
// Poiché la ricetta ha un solo input, genererà automaticamente
// 5 ricette, aumentando il numero di ingressi e
// la quantità dell'uscita.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Questa ricetta utilizza cinque ingredienti per creare un letto.
Mortar. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// Questo rimuoverà tutte le ricette che hanno la farina di Radice come output
// incluse eventuali ricette multi-ingrediente
Mortar. emoveRecipe(<roots:flour>);

// Questo cambierà la ricetta per l'incantesimo di supplica del boschetto a
// richiede semplicemente cinque pezzi di zucchero.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```
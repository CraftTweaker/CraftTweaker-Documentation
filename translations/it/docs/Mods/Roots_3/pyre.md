### Classe

```zenscript
import mods.roots.Pyre;
```

#### Metodi

```zenscript
void addRecipe(
  nome stringa, // il nome della ricetta da aggiungere; se si sostituisce una ricetta di gioco esistente, assicurarsi che il nome corretto sia usato
  IItemStack output, // l'output di questa ricetta
  IIngredient[] input // una lista di cinque ingredienti (non più, non meno)
);
```

* * *

```zenscript
void addRecipe(
  nome stringa, // il nome della ricetta da aggiungere; se si sostituisce una ricetta di gioco esistente, assicurarsi che il nome corretto sia usato
  IItemStack output, // l'output di questa ricetta
  Input IIngrediente[], // una lista di cinque ingredienti
  int xp // la quantità di xp nei livelli concessi dopo la creazione
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'output della ricetta per rimuovere
);
```

* * *

### Esempi

```zenscript
import mods.roots.Pyre;

// Rimuove la ricetta dello stalicripe; nota che la quantità non è considerata
// quando controlla se la ricetta corrisponde.
Pyre.removeRecipe(<roots:stalicripe>);

// Re-aggiunge lo stalicripe usando una ricetta aggiuntiva che non concede XP,
// ma con un output notevolmente maggiore
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Come sopra, ma premiando 30 livelli di esperienza (calcolati a partire dal livello 0)
Pirea. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Note

È estremamente importante quando si sostituiscono le ricette per garantire che il nome della ricetta sia lo stesso per assicurarsi che Patchouli riferisca correttamente la ricetta corretta per la lavorazione degli elementi di base.

Per tutti gli altri articoli, si prega di utilizzare un nome descrittivo di ciò che la vostra ricetta fa.
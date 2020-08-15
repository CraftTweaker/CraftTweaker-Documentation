### Classe

```zenscript
import mods.roots.Fey;
```

#### Metodi

```zenscript
void addRecipe(
  string name, // the name of the recipe; se si sostituisce una ricetta esistente, assicurarsi di utilizzare lo stesso nome per garantire la continuità Patchouli
  IItemStack output, // il itemstack prodotto da questa ricetta
  IIngredient[] ingressi // una serie di IIngredienti che compongono la ricetta; deve contenere 5 elementi
);
```

* * *

```zenscript
void addRecipe(
  string name, // the name of the recipe; se si sostituisce una ricetta esistente, assicurarsi di utilizzare lo stesso nome per garantire la continuità Patchouli
  IItemStack output, // il itemstack prodotto da questa ricetta
  IIngredient[] inputs, // una serie di IIngredienti che compongono la ricetta; deve contenere 5 elementi
  int xp // la quantità di xp (in livelli) per premiare il giocatore per la creazione di questa ricetta
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'elemento prodotto dalla ricetta che si desidera rimuovere
);
```

* * *

### Esempi

```zenscript
import mods.roots.Fey;

// Aggiunge una ricetta per TNT utilizzando 4 polvere da sparo e lana rossa
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Aggiunge la ricetta di cui sopra, ma garantisce anche al giocatore 6 livelli (da 0-6 relativamente) ogni volta che viene creato
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Rimuove la ricetta per l'ascia vivente
Fey. emoveRecipe(<roots:living_axe>);

// Aggiunge una ricetta diversa per l'ascia vivente, utilizzando lo stesso nome, per assicurarsi che si presenti in Patchouli. Per impostazione predefinita, tutti i nomi delle ricette di creazione Fey sono gli stessi del nome del Registro di sistema.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Note

E 'importante per la continuità Patchouli che, se si rimuove una ricetta predefinita (dire `living_axe`), che la sostituite con un'altra ricetta e dare quella ricetta il nome `"living_axe"` se si desidera Patchouli visualizzare correttamente la nuova ricetta.
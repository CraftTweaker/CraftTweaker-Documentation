### Classe

```zenscript
import mods.roots.FlowerGrowth;
```

#### Metodi

```zenscript
void removeRecipe(
  string name // Il nome della ricetta che si desidera rimuovere
);
```

* * *

```zenscript
void addRecipeBlockState(
  nome stringa, // Il nome della ricetta che stai aggiungendo
  IBlockStato // Lo stato del blocco del fiore
);
```

* * *

```zenscript
void addRecipeBlock(
  nome stringa, // Il nome della ricetta che stai aggiungendo
  blocco IBlock, // Il blocco del fiore da posizionare
  int meta // Il meta dello stato del blocco floreale
);
```

* * *

### Esempi

```zenscript
import mods.roots.FlowerGrowth;

// Rimuove la ricetta predefinita per il tarassaco
FlowerGrowth.removeRecipe("dandelion");

// Aggiunge un fiore bianco Botania usando lo stato di blocco
FlowerGrowth. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Aggiunge un fiore di magenta di Botania utilizzando blocco + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Note

Attualmente non testato con fiori doppi alti.
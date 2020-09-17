### Klasse

```zenscript
importiere mods.roots.FlowerGrowth;
```

#### Methoden

```zenscript
Entfernungsrecipe(
  String Name // Der Name des Rezepts, das Sie entfernen möchten
);
```

* * *

```zenscript
addRecipeBlockState(
  String-Name, ungültig // Der Name des Rezepts, das Sie
  IBlockState Status hinzufügen // Der Zustand des Blocks der Blume
);
```

* * *

```zenscript
void addRecipeBlock(
  String Name, // Der Name des Rezepts, das Sie
  IBlock Block hinzufügen, // Block der zu platzierenden Blume
  int Meta // Meta des Status des Blumenblocks
);
```

* * *

### Beispiele

```zenscript
import mods.roots.FlowerGrowth;

// Entfernt das Standardrezept für den Löscher
Blumen Growth.removeRecipe("dandelion");

// Fügt eine Botania weiße Blume mit dem Blockzustand
Blumen hinzu. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Fügt eine Botania magenta Blume mit Block + Meta
BlumenGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Notizen

Momentan nicht getestet mit Doppelblumen.
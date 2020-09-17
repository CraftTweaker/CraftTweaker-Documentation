### Classe

```zenscript
Importer mods.roots.FlowerGrowth;
```

#### Méthodes

```zenscript
void removeRecipe(
  string name // Le nom de la recette que vous souhaitez supprimer
);
```

* * *

```zenscript
void addRecipeBlockState(
  string name, // Le nom de la recette que vous ajoutez
  IBlockState state // L'état du bloc de la fleur
);
```

* * *

```zenscript
void addRecipeBlock(
  string name, // Le nom de la recette que vous ajoutez
  bloc IBlock, // Le bloc de la fleur à placer
  int meta // La méta de l'état du bloc de fleur
);
```

* * *

### Exemples

```zenscript
import mods.roots.FlowerGrowth;

// Supprime la recette par défaut pour pissenlit
FlowerGrowth.removeRecipe("dandelion");

// Ajoute une fleur blanche Botania en utilisant l'état de bloc
FlowerGrowth. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Ajoute une fleur de magenta Botania en utilisant bloc + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Notes

Actuellement non testé avec des fleurs à double hauteur.
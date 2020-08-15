### Classe

```zenscript
Importer mods.arcanearchives.GCT ;
```

#### Méthodes

```zenscript
void addRecipe(
  string name, // the recipe name
  IItemStack output, // la sortie en tant que itemstack
  Ingredient[] inputs // les entrées en tant que tableau d'ingrédients
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack sortie // le itemstack de sortie à supprimer (la quantité doit correspondance)
);
```

* * *

```zenscript
void replaceRecipe(
  string name, // le nom de la recette (doit déjà exister)
  IItemStack sortie, // la sortie en tant que itemstack
  Ingredient[] inputs // les entrées en tant que tableau d'ingrédients
);
```

* * *

### Exemples

```zenscript
import mods.arcanearchives.GCT;

// Supprime la recette de poussière rayonnante
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Ajoute une nouvelle recette pour la poussière rayonnante
GCT. ddRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Remplace la recette de quartz rayonnant sans déclasser l'écran GCT
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```
### Classe

```zenscript
Importer mods.roots.Pyre ;
```

#### Méthodes

```zenscript
void addRecipe(
  string name, // le nom de la recette à ajouter; si vous remplacez une recette de jeu existante, assurez-vous que le nom correct est utilisé
  sortie IItemStack, // la sortie de cette recette
  IIngredient[] entrées // une liste de cinq ingrédients (ni plus, ni moins)
);
```

* * *

```zenscript
void addRecipe(
  string name, // le nom de la recette à ajouter; si vous remplacez une recette de jeu existante, assurez-vous que le nom correct est utilisé
  sortie IItemStack, // la sortie de cette recette
  IIngrédient[] entrées, // une liste de cinq ingrédients
  int xp // la quantité de xp dans les niveaux qui sont accordés après la fabrication
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // la sortie de la recette à supprimer
);
```

* * *

### Exemples

```zenscript
import mods.roots.Pyre;

// Supprime la recette de stalicripe; note que la quantité n'est pas considérée
// lors de la vérification si la recette correspond.
Pyre.removeRecipe(<roots:stalicripe>);

// Ré-ajoute la stalicripe en utilisant une recette supplémentaire qui n'accorde aucune XP,
// mais avec une sortie considérablement plus grande
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Comme ci-dessus, mais récompensant 30 niveaux d'expérience (calculé à partir du niveau 0)
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Notes

Il est extrêmement important lors du remplacement des recettes pour s'assurer que le nom de la recette est le même pour s'assurer que Patchouli rapporte correctement la bonne recette pour fabriquer des objets de base.

Pour tous les autres éléments, veuillez utiliser un nom descriptif de ce que votre recette fait.
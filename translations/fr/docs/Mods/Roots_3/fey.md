### Classe

```zenscript
Importer mods.roots.Fey ;
```

#### Méthodes

```zenscript
void addRecipe(
  string name, // le nom de la recette; si vous remplacez une recette existante, assurez-vous d'utiliser le même nom pour assurer la continuité de Patchouli
  IItemStack, // le itemstack produit par cette recette
  IIngredient[] entrées // un tableau d'ingrédients qui composent la recette; doit contenir 5 éléments
;
```

* * *

```zenscript
void addRecipe(
  string name, // le nom de la recette; si vous remplacez une recette existante, assurez-vous d'utiliser le même nom pour assurer la continuité de Patchouli
  IItemStack, // le itemstack produit par cette recette
  IIngredient[] entrées, // un tableau d'ingrédients qui composent la recette; doit contenir 5 objets
  int xp // la quantité de xp (en niveaux) pour récompenser le joueur pour avoir fabriqué cette recette
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'élément produit par la recette que vous souhaitez supprimer
);
```

* * *

### Exemples

```zenscript
import mods.roots.Fey;

// Ajoute une recette de TNT à l'aide de 4 poudres à canon et de laine rouge
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Ajoute la recette ci-dessus mais accorde également au joueur 6 niveaux (de 0 à 6 par relativement) à chaque fois qu'il est fabriqué
Fête. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Supprime la recette de la hache vivante
Fées. emoveRecipe(<roots:living_axe>);

// Ajoute une recette différente pour la hache vivante, en utilisant le même nom, pour s'assurer qu'elle apparaît à Patchouli. Par défaut, tous les noms de recettes de fabrication de Fey sont les mêmes que ceux du registre de l'objet.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Notes

Il est important pour la continuité de Patchouli que, si vous supprimez une recette par défaut (par exemple `living_axe`), que vous le remplacez par une autre recette et donnez à cette recette le nom `"living_axe"` si vous souhaitez que Patchouli affiche correctement la nouvelle recette.
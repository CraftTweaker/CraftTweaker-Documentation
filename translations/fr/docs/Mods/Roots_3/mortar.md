### Classe

```zenscript
Importer mods.roots.Mortar;
```

#### Méthodes

```zenscript
void addRecipe(
  IItemStack sortie, // la sortie de l'élément de cette recette
  Ingredient[] inputs // un tableau d'ingrédients qui est soit 5 long soit 1 long
);
```

* * *

```zenscript
void changeSpell(
  string spellName, // le nom du sort comme dans le registre des sorts
  IIngredient[] entrées // un tableau de 5 éléments qui sont les nouveaux ingrédients de la recette
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // la pile produit par la recette
);
```

* * *

### Exemples

```zenscript
Importer mods.roots. ortar;

// Ajoute une recette qui fait de la poudre à canon du silex
// Comme la recette n'a qu'une seule entrée, il va automatiquement
// générer 5 recettes, augmentant le nombre d'entrées et
// la quantité de la sortie respectivement.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Cette recette utilise cinq ingrédients pour créer un lit.
Mortar. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// Ceci supprimera toutes les recettes qui ont de la farine de racine en sortie
// incluant toutes les recettes de multi-ingrédients
Mortar. emoveRecipe(<roots:flour>);

// Cela changera la recette du sort supplication du bosquet en
// nécessite simplement cinq morceaux de sucre.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```
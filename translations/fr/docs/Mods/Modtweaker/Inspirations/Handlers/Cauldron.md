# Chaudron

Le paquet Chaudron est utilisé pour ajouter/enlever des recettes pour le chaudron. Notez que si le chaudron est défini à `simple` dans la configuration, seules les recettes utilisant de l'eau pourront être fabriquées mais toutes les recettes seront toujours affichées en JEI.

## Appel en cours

Vous pouvez appeler le paquet Cauldron en utilisant `mods.inspirations.Cauldron`

## Fluides

Inspirations propose trois types de recettes à l'aide de fluides : ceux pour transformer un objet à l'aide d'un fluide, pour transformer un fluide à l'aide d'un objet, et ceux à ajouter avec un fluide à l'aide d'un objet. Tandis que tous les manutentionnaires prennent une pile de fluides, seul le type de liquide affectera la recette. Les chaudrons d'inspiration utilisent le système de vanille de trois bouteilles dans un chaudron de sorte que les quantités sont manipulées dans un autre paramètre.

### Ajout de fluide

Ajoute une recette qui convertit l'élément d'entrée en élément de sortie en utilisant le fluide.

* L'élément d'entrée prend en charge les tailles de piles pour exiger que la pile retenue soit une certaine taille.
* Les niveaux déterminent le nombre de niveaux consommés par la recette. Supporte 0-3, par défaut à 1
* L'ébullition détermine si le chaudron doit être placé au-dessus du feu pour la recette. Peut être vrai pour l'exiger, false pour ne pas avoir d'incendie, ou null (par défaut) pour l'ignorer.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(sortie IItemStack, entrée IIngredient, fluide ILiquidStack, @Niveaux d'indice facultatifs, @Optional boolean boiling);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Dépose du fluide

Supprime une recette liquide existante du chaudron.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Ajout de la transformation du fluide

Ajoute une recette qui convertit le fluide en fluide de sortie à l'aide de l'objet.

* L'élément d'entrée prend en charge les tailles de piles pour exiger que la pile retenue soit une certaine taille.
* Le niveau max détermine la quantité maximale de fluide autorisée pour cette transformation. Utilisé pour permettre aux recettes d'avoir une version moins chère si le chaudron contient moins de fluide.
* L'ébullition détermine si le chaudron doit être placé au-dessus du feu pour la recette. Peut être vrai pour l'exiger, false pour ne pas avoir d'incendie, ou null (par défaut) pour l'ignorer.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack, entrée IIngredient, fluide ILiquidStack, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Dépose de la transformation du fluide

Supprime une recette existante de transformation de fluide du chaudron. La sortie est `IIngrédient` mais ne prend en charge qu'une pile de fluides ou un joker .

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Remplir la recette

Ajoute une recette qui remplit le chaudron avec le liquide fourni.

* L'élément d'entrée prend en charge les tailles de piles pour exiger que la pile retenue soit une certaine taille.
* Les niveaux déterminent à quel point la recette remplit le chaudron. La valeur par défaut est 1 si elle n'est pas fournie.
* Le conteneur détermine l'élément retourné après l'exécution de cette recette. Si aucune n'est fournie, la valeur par défaut ne retourne rien.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional IItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Remplir la suppression de recette

Supprime une recette de remplissage existante du chaudron.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient input, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Brassage et potions

Inspirations propose deux types de recettes de potion en utilisant des potions : des recettes de préparation qui changent une potion d'un type à un autre, et des recettes de potion qui changent un objet en utilisant une potion.

Puisque les recettes prennent sur `PotionType`au lieu de `Potion`, les paramètres de potion sont des chaînes. Une liste de tous les types de potion peut être obtenue en utilisant la commande `/ct inspirations potions`.

### Ajout de la préparation

Ajoute une recette qui convertit la potion d'entrée en potion de sortie en utilisant le réagent.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(String output, String input, IIngredient reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:thick", <ore:gemEmerald>);
```

### Enlèvement de cuisson

Supprime une recette de brassage existante du chaudron. L'entrée et la sortie peuvent être réglées sur NULL pour agir comme un joker .

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Ajouter une recette de potion

Ajoute une recette qui convertit l'élément d'entrée en élément de sortie en utilisant la potion.

* Les niveaux déterminent le nombre de niveaux consommés par la recette. Supporte 0-3, par défaut à 1
* L'ébullition détermine si le chaudron doit être placé au-dessus du feu pour la recette. Peut être vrai pour l'exiger, false pour ne pas avoir d'incendie, ou null (par défaut) pour l'ignorer.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String potion, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Recette de potion retirée

Supprime une recette de potion existante du chaudron. Par défaut, aucune recette de potion n'existe mais les addons peuvent ajouter une recette.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String potion);
```

## Teintures

Inspirations ne contient qu'un seul type de recette de teinture pour transformer un objet en utilisant une teinture. Les recettes de teintures prennent une couleur de teinture de chaîne qui représente une valeur de `EnumDyeColor`. Pour obtenir une liste de toutes les valeurs, la commande `/ct inspiration teintures` est fournie.

### Ajout en cours

Ajoute une recette qui convertit l'entrée en sortie en utilisant la teinture consommant un seul niveau d'eau teintée.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack output, IIngredient input, String dye);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Retirer

Supprime une recette de teinture existante du chaudron.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```
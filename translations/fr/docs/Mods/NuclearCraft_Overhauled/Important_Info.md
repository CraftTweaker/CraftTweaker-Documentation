# Recette NuclearC: Révisée

Toutes les recettes comprennent cinq ensembles d'information - entrées d'objets, entrées de fluide, sorties d'objets, sorties de fluide et informations supplémentaires. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base depletion time, heat gen, efficiency, criticality, and radiation level of solid fission fuels, etc.

All parts of the recipe are simply listed in the method - the internal NC code will deal with splitting it up into those five categories and packaging the information up into a recipe.


## Ingrédients de chance

Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Cette information supplémentaire est fournie en utilisant les « ingrédients de chance » de NC.

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. Le pourcentage et la taille des piles d'ingrédients jouent les rôles de la probabilité et du nombre d'essais, respectivement. A minimum stack size can also be specified - without this, the minimum stack size is simply 0.

For ChanceFluidIngredients, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemIngredients, this is effectively 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**Remarque : `ChanceItemIngredient` et `ChanceFluidIngredient` comptent comme `Ingrédient` aux fins de recettes dans NuclearCraft : Rénové**

### format@@0 ChanceItemItemIngredient

#### Création

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(IIngrédient, int chancePourcent, @Optional int minStackSize);
```

#### Exemples

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Méthodes Supplémentaires

```zenscript
IIngrédient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### Ingrédient de fluide de chance
Celles-ci peuvent être utilisées n'importe où où où ILiquidPile normale `` est utilisé.

#### Création
```zenscript
mods.nuclearcraft.ChanceFluidIngredient.create(IIngrédient, int chancePourcent, int stackDiff, @Optional int minStackSize);
```

#### Exemples
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Méthodes Supplémentaires
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Additions de recettes
Les méthodes de recette spécifieront `itemInput` pour les entrées d'élément. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Entrées de fluide
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Bloquer les entrées
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Sorties de bloc
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Suppression de la recette
Lorsque vous spécifiez une recette à supprimer, tout ce qui est nécessaire est de spécifier tous les ingrédients d'entrée ou de sortie. Les données de chance de l'ingrédient ne sont pas requises. Encore une fois, les objets doivent venir en premier, puis les liquides.

Vous pouvez également supprimer tout un certain type de recette - pour cela, utilisez simplement la méthode `removeAllRecipes()`.

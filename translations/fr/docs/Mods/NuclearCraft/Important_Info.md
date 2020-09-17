# Fabrication de l'arme nucléaire

**Note:The double set of brackets in functions, `([...])` is necessary.** This is basically because all NuclearCraft CraftTweaker methods require an array of objects, be they ingredients, strings, integers or doubles.

Toutes les recettes comprennent cinq ensembles d'information - entrées d'objets, entrées de fluide, sorties d'objets, sorties de fluide et informations supplémentaires. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base lifetime, power and heat variable of fusion combos, etc.

All parts of the recipe are simply listed in the method - the internal NuclearCraft code will deal with splitting it up into those five categories and packaging the information up into a recipe.

## Additions de recettes
Les méthodes de recette spécifieront `itemInput` pour les entrées d'élément. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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

## Ingrédients de chance
Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Cette information supplémentaire est simplement taguée à la fin du composant spécifié. <br/>

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. Le pourcentage et la taille des piles d'ingrédients jouent les rôles de la probabilité et du nombre d'essais, respectivement. <br/>

For ChanceFluidStacks, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemStacks and ChanceOreStacks, this is effectively 1). For example, a ChanceFluidStack for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

### format@@0 ChanceItemStack
La forme d'un `ChanceItemStack` est `IItemStack sortie, int percentage, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> If not specified, `minimumStackSize` is 0.

### format@@0 ChanceOreDictEntry
La forme d'un `ChanceOreDictEntry` est `IOreDictEntry sortie, int percentage, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> The minimum stack size for the output is `minimumStackSize`. Si non spécifié, la valeur par défaut est 0.

### ChanceLiquidStack
La forme d'une `ChanceLiquidStack` est `ILiquidStack, int pourcentage, int stackDifference, @Optional int minimumStackSize`. <br/> The chance for the output to be produced is `percentage`. <br/> The difference between possible stack sizes is `stackDifference`. La taille minimale de la pile pour la sortie est `minimumStackSize`. Si non spécifié, la valeur par défaut est 0.

- Exemple: ``<liquid:ethanol>` * 500, 100, 150, 50
    - La machine produira 50, 200, 350 ou 500 milliseaux d'éthanol
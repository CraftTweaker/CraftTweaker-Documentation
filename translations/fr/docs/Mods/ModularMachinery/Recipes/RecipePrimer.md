# Empreinte de recette

Un objet RecipePrimer est la recette actuelle. Vous pouvez obtenir un tel objet de la part du [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) et utiliser ses méthodes pour donner les recettes et les sorties.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.modularmachinery.RecipePrimer.`

## Méthodes Zen

Chacune de ces méthodes fait deux choses : tout d'abord, il modifie l'objet, puis il retourne l'objet lui-même (comme un autre RecipePrimer).  
Cela signifie que vous pouvez soit appeler chaque méthode par vous-même, ou faites un appel où vous ajoutez chaque morceau de code (exemple ci-dessous).

### Définition de la chance

```zenscript
setChance(chance flottante);
```

### Ajout des exigences en matière d'énergie et de carburant

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? C'est ce que saisit le code source, si cela ne fonctionne pas, essayez d'entrer
addFuelItemInout(int requiredTotalBurnTime);
```

### Ajout des entrées

Vous pouvez ajouter [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) ou [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) en entrée.

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

Vous pouvez ajouter [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) ou [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) en sortie.

```zenscript
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### Construire la recette

Une fois que vous avez fait vos changements ci-dessus, vous devez construire la recette pour qu'elle fasse quelque chose.

```zenscript
build();
```

## Exemple

Vous pouvez appeler chaque méthode par vous-même, ou jouer au codegolf:

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
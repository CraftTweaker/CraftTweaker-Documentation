::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Дуговая печь Immersive Engineering

Дуговая печь — это реализация [IRecipeManager](/vanilla/api/managers/IRecipeManager), она содержит все методы, доступные в нем, такие как `removeRecipe()` или `removeAll()`.

## Методы

#### Добавление рецептов

The following script will add a recipe that will output Bedrock and a Gold Nugget (as Slag) after 2000 ticks when two Coal Blocks, a Diamond and any Item from the Wool Tag is put into an Arc Furnace. The recipe will use 100000 IF.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.addRecipe(string recipePath, IIngredient mainIngredient, IIngredient[] additives, int time, int energy, IItemStack[] outputs, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:arc_furnace>.addRecipe("coal_to_bedrock", <item:minecraft:coal_block> * 2, [<item:minecraft:diamond> * 1, <tag:items:minecraft:wool>], 2000, 100000, [<item:minecraft:bedrock>], <item:minecraft:gold_nugget>);
```

#### Удаление рецептов

Удаляет все рецепты, где хотя бы один из выходов соответствует данному.

Данный скрипт удалит два рецепта дуговой печи.

The first recipe that is removed is the recipe for Slag, since `checkSlag` is `true`, it will remove all recipes that output Slag. The second recipe that is removed is the recipe for three Iron Ingots.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.removeRecipe(IItemStack output, @Optional(false) bool checkSlag)

<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:immersiveengineering:slag>, true);
<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:minecraft:iron_ingot> * 3);
```
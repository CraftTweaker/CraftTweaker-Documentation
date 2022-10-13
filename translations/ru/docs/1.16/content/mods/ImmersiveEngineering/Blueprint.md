::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Чертеж инженера Immersive Engineering

Чертеж инженера — это реализация [IRecipeManager](/vanilla/api/managers/IRecipeManager), она содержит все методы, доступные в нем, такие как `removeRecipe()` или `removeAll()`.

## Категории

Чертежи используют различные категории, чтобы определить, какой тип чертеж требуется, можете использовать

```
/ct dump ieBlueprintCategories
```

… чтобы вывести все известные категорий в файл лога CraftTweaker.

Когда установлен только Immersive Engineering, выводится следующее:

```
- bannerpatterns
- bullet
- components
- electrode
- molds
- specialBullet
```

## Методы

#### Добавление рецептов

The following script will add a "bullet" Blueprint recipe that will use a piece of Redstone and any item from the Forge Gems tag and output an Iron Sword.

```zenscript
// <recipetype:immersiveengineering:blueprint>.addRecipe(name as string, blueprintCategory as string, inputs as IIngredient[], output as IItemStack)

<recipetype:immersiveengineering:blueprint>.addRecipe("test_gaps", "bullet", [<item:minecraft:redstone>, <tag:items:forge:gems>], <item:minecraft:iron_sword>);
```

#### Remove Recipes

The following script will remove all Blueprint recipes that output a Casull Cartridge.

```zenscript
// <recipetype:immersiveengineering:blueprint>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blueprint>.removeRecipe(<item:immersiveengineering:casull>);
```
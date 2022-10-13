::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Доменная печь Immersive Engineering

Доменная печь — это реализация [IRecipeManager](/vanilla/api/managers/IRecipeManager), она содержит все методы, доступные в нем, такие как `removeRecipe()` или `removeAll()`. Наряду с доменной печью топливо доменной печи — это также [IRecipeManager](/vanilla/api/managers/IRecipeManager), оно содержит все методы, доступные в нем, такие как `removeRecipe()` или `removeAll()`.

## Методы

#### Добавление рецептов

Следующий скрипт добавит рецепт, выдающий древесный уголь и нить (как шлак) через 1000 тиков после того, как любой предмет с тегом шерсть положены в плавильную печь.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:items:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

#### Добавление топлив

Следующий скрипт допустит золотой имени, переименованный в «Меч бога солнца», как топливо доменной печи, горящее в течение 100000 тиков.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.addFuel(string name, IIngredient fuel, int burnTime)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({display: {Name: "{\"text\":\"Меч бога  солнца\"}" as string}}), 100000);
```

#### Удаление рецептов

Следующий скрипт удалит все рецепты доменной печи, выдающие уголь.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:minecraft:charcoal>);
```

#### Удаление топлив

Следующий скрипт запретит использовать древесный уголь как топливо доменной печи.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```
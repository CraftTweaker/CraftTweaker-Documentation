# Этап

Этап - класс, который вы даете при создании новой "Этапы", класс содержит все основные методы, необходимые для записи в этом этапе **. Это так просто! Как только вы добавили все записи, вам нужно. Не забудьте построить стадию!

## Импорт пакета

`import mods.zenstages.Stage;`

## Что делать с ним

### ZenGetters и безпараметрические методы ZenMethods

| Геттер | Что он делает        | Возвращаемый тип |
| ------ | -------------------- | ---------------- |
| этап   | Возвращает имя этапа | string           |

### Методы разбивки

**Примечание: Все эти методы будут работать только с классами Этапа, указанными при создании Этапа, используя [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) , так что сохраните их в статику, чтобы вы могли ссылаться на другие классы, если это необходимо.**

Проверьте, был ли [пользовательский тип](/Mods/GameStages/ZenStages/CustomType/) отключен к этой стадии.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
Стадия испытания. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("контейнер", "com.test");
```

Добавить ингредиент к сцене. По умолчанию задан опциональный параметр, который позволяет изменить этот рецепт ингредиента.

```zenscript
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boolean recipeStage);
TestStage. ddIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Добавить переопределение ингредиента. Используется когда вы откладываете весь мод через ModId, но вам нужно переделать некоторые предметы из мода в другой [этап](/Mods/GameStages/ZenStages/Stage/), так что это позволяет вам переделать элементы.

```zenscript
// addIngredientOverride(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Добавить ModId на этап. Этап все найденные элементы, которые зарегистрированы по идентификатору модуля, предоставленному этапу. Вы также можете указать массив IIngredients, которые не будут оглашены.

```zenscript
// addModId(String modId);
// addModId(String[] modId);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Добавить ILiquidStack на сцену.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Добавить измерение на этапе. Требуется установка [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/).

```zenscript
// добавление Dimension(int dimId);
TestStage.addDimension(-1);
```

Добавить название рецепта к этапу. Для установки требуется [Рецептов](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Добавить название рецепта к этапу. Для установки требуется [Рецептов](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Добавить моба на сцену. Требуется установка [MobStages](/Mods/GameStages/MobStages/MobStages/).

```zenscript
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestStage. ddMobs(["minecraft:skeleton", "minecraft:skeleton_horse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"], 9);
```

Добавить название материала TiC к сцене. Требуется установка [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

Добавить TiC модификатор на сцену. Требуется установка [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Добавить IE Multiblock на этап. Требуется установка [Multi Block Стадии](https://github.com/The-Acronym-Coders/MultiBlock-Stages/).

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Добавить руду заменить на этап. Требуется установить [стадии](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) для установки.

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreReplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage. ddOreЗамена (<minecraft:iron_bars:*>);
TestStage.addOreЗамена (<minecraft:iron_bars:*>, true);
TestStage.addOreЗамена (<chisel:redstone>, <chisel:granite>);
TestStage.addOreзамена(<chisel:redstone>, <chisel:granite>, true);
```
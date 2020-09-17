# Etap

Etap jest klasą, którą otrzymujesz podczas tworzenia nowego "Etapu", klasa zawiera wszystkie główne metody potrzebne do sfinalizowania wpisu do tego *Etapu*. To tak proste jak to! Po dodaniu wszystkich potrzebnych wpisów. Nie zapomnij zbudować sceny!

## Importowanie pakietu

`importuj mods.zenstages.Stage,`

## Co z tym zrobić

### ZenGetters i bezparametrowe ZenMethods

| ZenGetter | Co to robi         | Typ zwrotu  |
| --------- | ------------------ | ----------- |
| etap      | Zwraca nazwę sceny | ciąg znaków |

### Metody testowania

**Uwaga: Wszystkie te metody będą działać z klasą sceny podaną tylko wtedy, gdy utworzysz scenę używając [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) , więc zapisz je do statycznej, aby w razie potrzeby można było odwoływać się do innych klas.**

Sprawdź, czy [Niestandardowy typ](/Mods/GameStages/ZenStages/CustomType/) został scetowany do tej sceny.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("kontener", "com.test");
```

Dodaj składnik do sceny. Przywrócono domyślny parametr opcjonalny do scedowania receptury dla tego Składnika.

```zenscript
// addgredient(ISkładnik Składnika, @Optional(valueBoolean = true) receptura logiczna);
// addgredients(IIngredient[] składniki, @Optional(valueBoolean = true) receptura logiczna);
Etap testowy. ddIngredient(<minecraft:stick>);
TestStage.addgredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Dodaj nadpisanie składników Jest to używane, gdy ustawiasz cały mod za pomocą Modyfikatora, ale musisz przesadzić niektóre elementy z moda do innego [Etapu](/Mods/GameStages/ZenStages/Stage/), więc pozwala to na przesączanie elementów.

```zenscript
// addIngredientOverride(IIngredient składnik, @Optional(valueBoolean = true) recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Dodaj ID Modyfikacji do sceny. Spowoduje to sfinalizowanie wszystkich znalezionych elementów, które są zarejestrowane przez identyfikator moda dostarczony do Etapu. Możesz również podać tablicę IIngredients które nie będą etapowane.

```zenscript
// addModId(Moding modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignorreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Dodaj ILiquidStack do sceny.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] Stacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Dodaj wymiar do sceny. Wymaga zainstalowania [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/).

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Dodaj nazwę przepisu do sceny. Wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// addRecipeName(Receptura string);
TestStage.addRecipeName("minecraft:boat");
```

Dodaj nazwę przepisu do sceny. Wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// addRecipeName(Receptura string);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Dodaj potwora do sceny. Wymaga zainstalowania [MobStages](/Mods/GameStages/MobStages/MobStages/).

```zenscript
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestEtap ddMobs(["minecraft:skeleton", "minecraft:skeleton_horse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"], 9);
```

Dodaj nazwę materiału TiC do sceny. Wymaga zainstalowania [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCMaterial(Material string);
// addTiCMaterials(Nazwy materiałów string);
TestStage.addTiCMaterial("żelazo");
TestStage.addTiCMaterials(["brąz", "żelazo"]);
```

Dodaj modyfikator TiC do sceny. Wymaga zainstalowania [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Dodaj Multiblok IE do sceny. Wymaga zainstalowania [wieloblokowych etapów](https://github.com/The-Acronym-Coders/MultiBlock-Stages/).

```zenscript
// addIEMultiBlock(ciąg multiblock);
// addIEMultiBlocks(ciąg multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Dodaj zamiennik rudy do sceny. Wymaga zainstalowania [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods).

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreRereplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
Etap testowania. ddOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreRereplacement(<chisel:redstone>, <chisel:granite>, true);
```
# Teil

Etappe ist die Klasse, die Sie beim Erstellen einer neuen "Stage" erhalten haben. Die Klasse enthält alle Hauptmethoden, die Sie benötigen, um einen Eintrag in dieser *Stufe* zu studieren. So einfach ist das! Sobald Sie alle Einträge hinzugefügt haben, die Sie benötigen. Vergiss nicht, die Bühne zu bauen!

## Dieses Paket importieren

`importieren mods.zenstages.Stage;`

## Was ist damit zu tun

### ZenGetters und parameterlose ZenMethoden

| ZenGetter | Was macht es                | Rückgabetyp |
| --------- | --------------------------- | ----------- |
| stadium   | Gibt den Stage Namen zurück | string      |

### Staging-Methoden

**Hinweis: Alle diese Methoden funktionieren nur mit der Stage-Klasse, die Sie angegeben haben, wenn Sie eine Stage mit [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) erstellen, also speichern Sie diese in einer statischen Statik, so dass Sie von anderen Klassen referenzieren können, wenn Sie es benötigen.**

Überprüfen Sie, ob ein [benutzerdefinierter Typ](/Mods/GameStages/ZenStages/CustomType/) in dieser Phase gedreht wurde.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] Werte);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] Werte);
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

Füge einen Ingredient zur Bühne hinzu. Standardmäßig wird der optionale Parameter verwendet, um das Rezept für diesen Ingredienten zu studieren.

```zenscript
// addIngredient(Igredient(Igredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// adgredients(Igredient[] Zutaten, @Optional(valueBoolean = true) boolesche RezepteStage);
TestStage. ddIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Fügen Sie eine Ingredientenüberschreibung hinzu. Dies wird verwendet, wenn du eine ganze Mod über die ModId inszenierst, aber du musst einige Gegenstände von der Mod in eine andere [Phase](/Mods/GameStages/ZenStages/Stage/)überführen , damit Sie die Elemente neu inszenieren können.

```zenscript
// Hinzufügen IngredientOverride(IZutat, @Optional(valueBoolean = true) boolesche RezeptStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, wahr);
```

Füge eine ModId zur Bühne hinzu. Dadurch werden alle gefundenen Artikel zusammengefasst, die von der modId in der Phase registriert sind. Sie können auch ein Array von IIngredients angeben, das die zur Verfügung gestellten Gegenstände nicht inszeniert werden.

```zenscript
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Füge einen ILiquidStack zur Bühne hinzu.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Füge einer Stufe eine Dimension hinzu. Benötigt [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) um installiert zu sein.

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Füge einen Rezeptnamen zur Bühne hinzu. Benötigt [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) um installiert zu sein.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Füge einen Rezeptnamen zur Bühne hinzu. Benötigt [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) um installiert zu sein.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Füge einen Mob zur Bühne hinzu. Benötigt [MobStages](/Mods/GameStages/MobStages/MobStages/) um installiert zu sein.

```zenscript
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestStage. ddMobs(["minecraft:skeleton", "minecraft:skeleton_pferse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_Pferde"], 9);
```

Fügen Sie der Bühne einen TIC-Materialnamen hinzu. Benötigt die Installation von [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("Iron");
TestStage.addTiCMaterials(["bronze", "Iron"]);
```

Füge einen TiC-Modifikator zur Bühne hinzu. Benötigt die Installation von [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Füge einen IE Multiblock zur Bühne hinzu. Benötigt die Installation von [Multi Block Stages](https://github.com/The-Acronym-Coders/MultiBlock-Stages/).

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Füge einen Erzersatz zu einer Bühne hinzu. Benötigt [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) um installiert zu sein.

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage. ddOreplacement(<minecraft:iron_bars:*>);
TestStage.addOreplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreplacement(<chisel:redstone>, <chisel:granite>, true);
```
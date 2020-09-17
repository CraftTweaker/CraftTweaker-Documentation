# Fase

Stage è la classe che ti viene data quando crei un nuovo "Stage" la classe contiene tutto il metodo principale necessario per mettere in scena una voce a quella *Fase*. È semplice come quello! Una volta che hai aggiunto tutte le voci che ti servono. Non dimenticare di costruire il palco!

## Importazione del pacchetto

`import mods.zenstages.Stage;`

## Cosa fare con esso

### ZenGetters e parameterless ZenMethods

| ZenGetter | Che cosa fa                    | Tipo Di Reso |
| --------- | ------------------------------ | ------------ |
| fase      | Restituisce il nome della fase | stringa      |

### Metodi Di Staging

**Nota: Tutti questi metodi funzioneranno con la classe Stage data quando si crea uno Stage usando [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) in modo da salvarli in modo statico in modo da poter fare riferimento da altre classi se necessario.**

Spunta la casella per vedere se un [Tipo Personalizzato](/Mods/GameStages/ZenStages/CustomType/) è stato inserito in questa fase.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

Aggiungi un ingrediente a un palco. Predefinito al vero il parametro opzionale per mettere in scena la ricetta di detto Ingrediente.

```zenscript
// addIngredient(IIngrediente ingrediente, @Optional(valueBoolean = true) recipeStage booleano);
// addIngredients(IIngredient[] ingredienti, @Optional(valueBoolean = true) recipeStage);
TestStage. ddIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Aggiungi un Sovrascrivi Ingrediente. Questo viene utilizzato quando si sta mettendo in scena un'intera mod tramite il ModId ma è necessario rifilare alcuni elementi dalla mod ad un altro [Stage](/Mods/GameStages/ZenStages/Stage/), così questo ti permette di rifilare gli oggetti.

```zenscript
// addIngredientOverride(IIngredient ingredient, @Optional(valueBoolean = true) recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Aggiungi un ModId a uno stadio. In questo modo verranno eseguiti tutti gli elementi trovati che sono registrati dal modId fornito allo Stage. Puoi anche fornire una serie di IIngredienti che gli oggetti forniti non saranno messi in scena.

```zenscript
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Aggiungi un ILiquidStack a uno stadio.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStack);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Aggiungi una dimensione a uno stadio. Richiede [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) per essere installato.

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Aggiungi un nome di ricetta a uno stadio. Richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Aggiungi un nome di ricetta a uno stadio. Richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Aggiungi un mob a uno stadio. Richiede [MobStages](/Mods/GameStages/MobStages/MobStages/) per essere installato.

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

Aggiungi un nome di materiale TiC a uno stadio. Richiede [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) per essere installato.

```zenscript
// addTiCMaterial(stringa materialName);
// addTiCMaterials(stringa materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

Aggiungi un modificatore TiC a uno stadio. Richiede [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) per essere installato.

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Aggiungi un Multiblock IE a uno stadio. Richiede [Multi Block Stages](https://github.com/The-Acronym-Coders/MultiBlock-Stages/) per essere installato.

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Aggiungi una sostituzione mineraria a uno stadio. Richiede [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) per essere installato.

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreReplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage. ddOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>, true);
```
# NuclearCraft

**Note:The double set of brackets in functions, `([...])` is necessary.** This is basically because all NuclearCraft CraftTweaker methods require an array of objects, be they ingredients, strings, integers or doubles.

Alle Rezepte beinhalten fünf Informationssätze - Artikeleingänge, flüssige Eingänge, Artikelausgänge, Flüssigkeitsausgänge und zusätzliche Infos. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base lifetime, power and heat variable of fusion combos, etc.

All parts of the recipe are simply listed in the method - the internal NuclearCraft code will deal with splitting it up into those five categories and packaging the information up into a recipe.

## Rezeptzusatz
Rezeptmethoden geben `ItemInput` für Itemeingaben an. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Flüssigkeitseingänge
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Blockeingaben
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Blockausgänge
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Rezeptentfernungen
Wenn Sie ein zu löschendes Rezept angeben, müssen Sie nur alle Eingabe- oder Ausgangszutaten angeben. Zufallsdaten sind nicht erforderlich. Wieder müssen die Gegenstände zuerst kommen, gefolgt von den Flüssigkeiten.

Sie können auch alle Rezepte eines bestimmten Typs entfernen - verwenden Sie dazu einfach die `removeAllRecipes()` Methode.

## Zufalls-Zutaten
Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Diese zusätzlichen Informationen werden einfach auf das Ende der angegebenen Zutat markiert. <br/>

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. Die prozentuale und die Inhaltsstoff-Stapelgröße spielen die Rollen der Wahrscheinlichkeit bzw. der Anzahl der Tests. <br/>

For ChanceFluidStacks, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemStacks and ChanceOreStacks, this is effectively 1). For example, a ChanceFluidStack for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

### ChanceItemStack
Die Form eines `ChanceItemStack` ist `IItemStack Ausgabe, Int Prozent, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> If not specified, `minimumStackSize` is 0.

### ChanceOreDictEintrag
Die Form eines `ChanceOreDictEntry` ist `IOreDictEntry Ausgabe, int Prozent, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> The minimum stack size for the output is `minimumStackSize`. Wenn nicht angegeben, wird standardmäßig 0 angegeben.

### ChanceLiquidStack
Die Form eines `ChanceLiquidStack` ist `ILiquidStack, int Prozent, int stackDifference, @Optional int minimumStackSize`. <br/> The chance for the output to be produced is `percentage`. <br/> The difference between possible stack sizes is `stackDifference`. Die minimale Stack-Größe für die Ausgabe beträgt `minimumStackGröße`. Wenn nicht angegeben, wird standardmäßig 0 angegeben.

- Beispiel: ``<liquid:ethanol>` * 500, 100, 150, 50
    - Die Maschine wird 50, 200, 350 oder 500 Millimeter Ethanol produzieren
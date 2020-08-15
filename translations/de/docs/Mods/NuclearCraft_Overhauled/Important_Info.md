# NuclearCraft: Überarbeitet

Alle Rezepte beinhalten fünf Informationssätze - Artikeleingänge, flüssige Eingänge, Artikelausgänge, Flüssigkeitsausgänge und zusätzliche Infos. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base depletion time, heat gen, efficiency, criticality, and radiation level of solid fission fuels, etc.

All parts of the recipe are simply listed in the method - the internal NC code will deal with splitting it up into those five categories and packaging the information up into a recipe.


## Zufalls-Zutaten

Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Diese zusätzliche Information wird mit NC's 'Change'-Zutaten gegeben.

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. Die prozentuale und die Inhaltsstoff-Stapelgröße spielen die Rollen der Wahrscheinlichkeit bzw. der Anzahl der Tests. A minimum stack size can also be specified - without this, the minimum stack size is simply 0.

For ChanceFluidIngredients, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemIngredients, this is effectively 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**Hinweis: `ChanceItemIngredient` und `ChanceFluidIngredient` zählen als `Ingredient` für den Zweck von Rezepten in NuclearCraft: Überarbeitet**

### ChanceItemIngredient

#### Erstellen

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(IZutat, Int chancePercent, @Optional int minStackSize);
```

#### Beispiele

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Zusätzliche Methoden

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### ChanceFluidIngredient
Diese können überall dort eingesetzt werden, wo regulär `ILiquidStack` verwendet wird.

#### Erstellen
```zenscript
mods.nuclearcraft.ChanceFluidIngredient.create(IIngredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Beispiele
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Zusätzliche Methoden
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Rezeptzusatz
Rezeptmethoden geben `ItemInput` für Itemeingaben an. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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

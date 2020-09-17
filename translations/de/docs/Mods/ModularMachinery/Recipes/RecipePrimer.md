# RecipePrimer

Ein RecipePrimer Objekt ist das eigentliche Rezept. Du kannst ein solches Objekt vom [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) erhalten und seine Methoden verwenden, um das Rezept tatsächlich ins und out und Sachen zu geben.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`mods.modularmachinery.RecipePrimer;`

## ZenMethoden

Jede dieser Methoden hat zwei Dinge: Erstens ändert es das Objekt, dann gibt es das Objekt selbst zurück (wie ein anderer RecipePrimer).  
Das bedeutet, dass Sie jede Methode einzeln aufrufen können oder rufen Sie an, wo Sie jedes Stück Code anhängen (Beispiel unten).

### Chance setzen

```zenscript
setChance(Float Chance);
```

### Energie- und Kraftstoffbedarf hinzufügen

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? Dies ist es, was der Sourcecode zeigt, wenn er nicht funktioniert, versuchen Sie Input
addFuelItemInout(int requiredTotalBurnTime);
```

### Eingaben hinzufügen

Sie können [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEinträge](/Vanilla/OreDict/IOreDictEntry/) oder [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) als Eingabe hinzufügen.

```zenscript
addItemInput(IItemStack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

Sie können [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEinträge](/Vanilla/OreDict/IOreDictEntry/) oder [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) als Ausgabe hinzufügen.

```zenscript
addItemOutput(IItemStack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### Baue das Rezept

Nachdem Sie Ihre Änderungen oben vorgenommen haben, müssen Sie das Rezept erstellen, damit es tatsächlich etwas tut.

```zenscript
build();
```

## Beispiel

Du kannst entweder jede Methode einzeln aufrufen oder Codegolf spielen:

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
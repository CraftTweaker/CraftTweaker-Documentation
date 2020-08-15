# RecipePrimer

Un oggetto RecipePrimer è la ricetta attuale. È possibile ottenere un tale oggetto dal [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) e utilizzare i suoi metodi per dare effettivamente le ricette dentro e fuori e roba.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.modularmachinery.RecipePrimer;`

## ZenMethods

Ognuno di questi metodi fa due cose: in primo luogo, modifica l'oggetto, quindi restituisce l'oggetto stesso (come un altro RecipePrimer).  
Questo significa che puoi chiamare ogni metodo da solo, o fai una chiamata dove aggiungi ogni pezzo di codice (esempio di seguito).

### Impostare la possibilità

```zenscript
setChance(galleggiante);
```

### Aggiungere i requisiti di energia e carburante

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? Questo è ciò che il codice sorgente sais, se non funziona prova Input
addFuelItemInout(int requiredTotalBurnTime);
```

### Aggiunta input

Puoi aggiungere [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) come input.

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

Puoi aggiungere [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) come output.

```zenscript
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### Costruire la ricetta

Dopo aver fatto i tuoi cambiamenti sopra, è necessario costruire la ricetta in modo che effettivamente farà qualcosa.

```zenscript
costruzione();
```

## Esempio

È possibile chiamare ogni metodo da solo, o giocare codegolf:

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
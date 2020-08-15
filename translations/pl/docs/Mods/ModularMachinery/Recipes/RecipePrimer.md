# [PLACEHOLDER] ReceppePrimer

Obiekt Podstawowy Przepisu to rzeczywisty przepis. Możesz uzyskać taki obiekt od [ReceppeBuildera](/Mods/ModularMachinery/Recipes/RecipeBuilder/) i użyć jego metod, aby w rzeczywistości dawać receptury i rzeczy.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.moduarmachinery.RecipePrimer;`

## Metody ZenMethods

Każda z tych metod robi dwie rzeczy: Po pierwsze, modyfikuje obiekt, następnie zwraca obiekt sam (jako inny RecipePrimer).  
Oznacza to, że możesz samodzielnie zadzwonić do każdej metody, lub wykonaj jedno połączenie, w którym dołączysz każdy kod (przykład poniżej).

### Ustawienie szansy

```zenscript
setChance(szansa pływania);
```

### Dodawanie wymagań w zakresie energii i paliwa

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? Oto co to jest sais kodu źródłowego, jeśli nie działa spróbuj wejść
addFuelItemInout(int requiredTotalBurnTime);
```

### Dodawanie wejść

Możesz dodać [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEnentries](/Vanilla/OreDict/IOreDictEntry/) lub [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) jako wejście.

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDictReed);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

Możesz dodać [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEnentries](/Vanilla/OreDict/IOreDictEntry/) lub [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) jako wyjście.

```zenscript
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDictRection);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### Budowanie przepisu

Po wykonaniu powyższych zmian musisz zbudować przepis, aby faktycznie coś zrobić.

```zenscript
budynku();
```

## Przykład

Możesz zadzwonić do każdej metody samodzielnie, lub grać w kodegolf:

```zenscript
val reci = mods.moduarminery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
receptura. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
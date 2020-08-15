# Рецепт Прайм

Рецепт Primer - это настоящий рецепт. Такой объект можно получить из [Рецепт](/Mods/ModularMachinery/Recipes/RecipeBuilder/) и использовать его методы, чтобы дать рецепты и выходы и предметы.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт mods.modularmachinery.RecipePrimer;`

## ZenMethods

Каждый из этих методов делает две вещи: во-первых, он изменяет объект, затем возвращает объект как другой RecipePrimer).  
Это означает, что вы можете либо вызвать каждый метод самостоятельно, или сделайте один звонок, где вы добавляете все части кода (пример ниже).

### Установка шанса

```zenscript
setChance(плавающий шанс);
```

### Добавление требований в отношении энергии и топлива

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Типо? Вот что говорит исходный код, если он не работает, попробуйте ввод
addFuelItemInout(int requiredTotalBurnTime);
```

### Добавление входов

Вы можете добавить [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) или [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) в качестве входа.

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack);
```

### Adding outputs

Вы можете добавить [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) или [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) в качестве выхода.

```zenscript
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack);
```

### Построение рецепта

После того, как вы сделали изменения выше, вам нужно создать рецепт, чтобы он действительно что-то сделал.

```zenscript
строение();
```

## Пример

Вы можете вызвать каждый метод самостоятельно, или играть в кодовые гольф:

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associated MachineRegistry", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
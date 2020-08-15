# RecipePrimer

RecipePrimer オブジェクトは実際のレシピです。 [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) からこのようなオブジェクトを取得し、そのメソッドを使用してレシピのインやアウトなどを実際に提供することができます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.modularmachinery.RecipePrimer;`

## ZenMethods

これらのメソッドはそれぞれ2つのことを行います: 最初にオブジェクトを変更し、次にオブジェクト自体を(別の RecipePrimer として)返します。  
これは、各メソッドを単独で呼び出すことができることを意味します。 または、コードの各断片を追加する呼び出しを行います(以下の例)。

### 確率の設定

```zenscript
setChance(float chance);
```

### エネルギーと燃料の追加要件

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//typo? これは、sourcecode sais、try Input
addFuelItemInout(int requiredTotalBurnTime);
```

### 入力を追加中

[IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntity](/Vanilla/OreDict/IOreDictEntry/) または [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) を入力として追加できます。

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

[IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntity](/Vanilla/OreDict/IOreDictEntry/) または [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) を出力として追加できます。

```zenscript
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### レシピを構築

上記の変更を行った後、実際に何かを行うようにレシピを構築する必要があります。

```zenscript
build();
```

## 例

それぞれのメソッドを単独で呼び出すことも、codegolf を再生することもできます。

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci.build();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
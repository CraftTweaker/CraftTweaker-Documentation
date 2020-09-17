# NuclearCraft: Overhauled

すべてのレシピには、アイテム入力、流体入力、アイテム出力、流体出力、追加情報の5つの情報が含まれています。 The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base depletion time, heat gen, efficiency, criticality, and radiation level of solid fission fuels, etc.

All parts of the recipe are simply listed in the method - the internal NC code will deal with splitting it up into those five categories and packaging the information up into a recipe.


## 原材料の確率

Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. この追加情報は、NC '偶然の成分' を使用して与えられます。

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. 試験の確率と回数の役割は、それぞれパーセンテージと成分スタックサイズが果たす。 A minimum stack size can also be specified - without this, the minimum stack size is simply 0.

For ChanceFluidIngredients, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemIngredients, this is effectively 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**注意: `ChanceItemIngredient` と `ChanceFluidIngredient` は `IIngredient` 原子力クラフトにおけるレシピの目的: オーバーホール:**

### ChanceItemIngredient

#### 作成

```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChanceItemIngredient.create(IIngredient ingredient, int chancePercent, @Optional int minStackSize);
```

#### 使用例

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### 追加メソッド

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### ChanceFluidIngredient
これらは、通常の `ILiquidStack` が使用される場所であれば、どこでも使用できます。

#### 作成
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChanceFluidIngredient.create(IIngredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### 使用例
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### 追加メソッド
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## レシピの追加
レシピメソッドはアイテム入力に `itemInput` を指定します。 <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### 流体入力
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### ブロック入力
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### 出力をブロック
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## レシピの削除
削除するレシピを指定する場合は、すべての入力または出力成分を指定する必要があります。 原因の確率データは必要ありません。 ここでも、アイテムが最初に来なければならない流体が続きます。

特定の種類のレシピをすべて削除することもできます - これを行うには、単純に `removeAllRecipes()` メソッドを使用します。

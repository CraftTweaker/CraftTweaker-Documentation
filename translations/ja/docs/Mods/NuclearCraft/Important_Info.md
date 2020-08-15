# NuclearCraft

**Note:The double set of brackets in functions, `([...])` is necessary.** This is basically because all NuclearCraft CraftTweaker methods require an array of objects, be they ingredients, strings, integers or doubles.

すべてのレシピには、アイテム入力、流体入力、アイテム出力、流体出力、追加情報の5つの情報が含まれています。 The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base lifetime, power and heat variable of fusion combos, etc.

All parts of the recipe are simply listed in the method - the internal NuclearCraft code will deal with splitting it up into those five categories and packaging the information up into a recipe.

## レシピの追加
レシピメソッドはアイテム入力に `itemInput` を指定します。 <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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

## 原材料の確率
Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. この追加情報は、指定された食材の最後にタグ付けされます。 <br/>

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. 試験の確率と回数の役割は、それぞれパーセンテージと成分スタックサイズが果たす。 <br/>

For ChanceFluidStacks, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemStacks and ChanceOreStacks, this is effectively 1). For example, a ChanceFluidStack for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

### 偶然ItemStack
`ChanceItemStack` の形式は `IItemStack 出力、int percentage、@Optional int minimumStackSize` です。 <br/> The chance for the `output` to be produced is `percentage`. <br/> If not specified, `minimumStackSize` is 0.

### ChanceOreDictEntry
`ChanceOreDictEntry` の形式は `IOreDictEntry の出力、int percentage、@Optional int minimumStackSize` です。 <br/> The chance for the `output` to be produced is `percentage`. <br/> The minimum stack size for the output is `minimumStackSize`. 指定されていない場合は、デフォルトは 0 です。

### ChanceLiquidStack
`ChanceLiquidStack` の形式は `ILiquidStack, int percentage, int stackDifference, @Optional int minimumStackSize` です。 <br/> The chance for the output to be produced is `percentage`. <br/> The difference between possible stack sizes is `stackDifference`. 出力の最小スタックサイズは `minimumStackSize` です。 指定されていない場合は、デフォルトは 0 です。

- 例: ``<liquid:ethanol>` * 500, 100, 150, 50
    - このマシンは、50、200、350、または500ミリバケツのエタノールを生産します
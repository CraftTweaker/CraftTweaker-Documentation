# IMachine

IMachineは実際のマシンオブジェクトです。 [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) から取得できます。

## パッケージのインポート

It might be required for you to [import](/AdvancedFunctions/Import) the class.  
You usually only need to import a class when directly using the name, such as in casting or [Array Declarations](/AdvancedFunctions/Arrays_and_Loops) but better be safe than sorry and add the import.

```zenscript
import extraautilities2.Tweaker.IMachine;
```

## レシピを追加

There are two methods for adding recipes, one uses a probability map for the outputs, one allows for the use of [WeightedItemStack](/Vanilla/Items/WeightedItemStack) and [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) objects.  
Both methods use [maps](/AdvancedFunctions/Associative_Arrays) with strings as indices.  
These strings will be the names of the input/output slots given, which is why you should not have two slots with the same name in a machine.

### 確率マップの使用

```zenscript
myMachine.addRecipe(入力、出力、エネルギー、時間、確率);
```

このメソッドは以下のパラメータを使用します。

| 名称      | タイプ                                                          |
| ------- | ------------------------------------------------------------ |
| inputs  | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| エネルギー   | int                                                          |
| 時間      | int                                                          |
| 確率は     | float[string\]                                              |

### 出力マップのみを使用

You can also only use the outputs map, then ExtUtils2 will check for any [WeightedItemStack](/Vanilla/Items/WeightedItemStack) and [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) objects and use their chances.  
Remember, that adding anything other than those two or [IIngredient](/Vanilla/Variable_Types/IIngredient) as mapped value, will have no effect.

```zenscript
myMachine.addRecipe(inputs, outputs, energy, time);
```

このメソッドは以下のパラメータを使用します。

| 名称      | タイプ                                                          |
| ------- | ------------------------------------------------------------ |
| inputs  | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs | Object[string\]                                             |
| エネルギー   | int                                                          |
| 時間      | int                                                          |

## レシピを削除

レシピを削除することもできます。 ここでも、 [個のマップ](/AdvancedFunctions/Associative_Arrays) をインデックスとして使用します。

There are two methods, one uses [IIngredient](/Vanilla/Variable_Types/IIngredient) as values, and one that accepts a map with [IItemStack](/Vanilla/Items/IItemStack) and a map with [ILiquidStack](/Vanilla/Liquids/ILiquidStack) values.

### IIngredientの使用

```zenscript
myMachine.removeRecipe(inputs);
```

| 名称     | タイプ                                                          |
| ------ | ------------------------------------------------------------ |
| inputs | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |

### アイテムと液体に別々のマップを使用する

```zenscript
myMachine.removeRecipe(item, liquids);
```

| 名称   | タイプ                                                     |
| ---- | ------------------------------------------------------- |
| 項目   | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| リキード | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## マシン情報の取得

以下のメソッドを使用して、マシン上の情報を取得することもできます。

- `getInputSlots()`: [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) のリストとしてすべての入力スロットを返します。
- `getOutputSlots()`: [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) のリストとしてすべての出力スロットを返します。
- `getSlot()`: 名前に一致する [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) を返します。

## マシンに名前を付ける

これまでのところ、すべてのマシンに `machine.crafttweaker:your_machine_name` という名前が付けられます。ここで、 `your_machine_name` は、マシンを作成するために使用した名前です。

マシン名をローカライズしたい場合は、CrTの [IGame](/Vanilla/Game/IGame) 機能またはカスタムラングファイルを使用してください。

ですから、マシン名が `time_machine`の場合、スクリプト内でこれを呼び出す必要があります:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "スペースタイムディストーター(タイムマシン)");
```

または、言語ファイルにこれを追加します:

    machine.crafttweaker:time_machine=スペースタイムディストーター(タイムマシン)
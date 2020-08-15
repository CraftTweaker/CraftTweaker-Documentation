# IMachineSlot

マシーンスロットは、アイテムまたは液体を受け入れるスロットです。  
あとで [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) を使用してマシンを作成するときに必要です。

## パッケージのインポート

If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using

```zenscript
import extraautilities2.Tweaker.IMachineSlot;
```

## 新しい IMachineSlot の作成

IMachineSlotパッケージは、新しいIMachineSlotオブジェクトを作成するメソッドを提供します。

```zenscript
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, color, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

これらのメソッドはすべて、新しい Slot を IMachineSlot オブジェクトとして返します。

パラメータは次のとおりです。

| 名称                | タイプ                                           |
| ----------------- | --------------------------------------------- |
| name              | 文字列                                           |
| isOptional        | bool                                          |
| stackCapacity     | int                                           |
| 色                 | int                                           |
| 背景テクスチャ           | 文字列                                           |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

パラメータの動作:

- `name`: スロットの名前。 後でレシピに使用する。 マシンに同じ名前の2つのスロットがないことを確認してください。
- `isOptional`: レシピチェックを開始するために、このスロットを埋める必要があるかどうかを指定します。
- `stackCapacity`: このスロットに収まるアイテム/ミリバケットの数は？
- `色`: スロットの色は何色ですか?
- `backgroundTexture`: このスロットの背景のカスタムテクスチャパスをここに追加できます。
- `filterLiquidStack`: この [ILiquidStack](/Vanilla/Liquids/ILiquidStack) オブジェクトを指定すると、この流体のみがスロットに入ることができます。

## Getters

IMachineSlotからも基本情報を取得できます。  
これらのゲッターは、作成時にスロットを設定したものとは異なる何かを魔法のように返すことを期待しないでください。

| 名称            | タイプ  |
| ------------- | ---- |
| 名前            | 文字列  |
| 省略可能          | bool |
| stackCapacity | int  |
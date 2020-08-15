# ディーゼルヘルパー

ディーゼルハンドラーパッケージは、IEの燃料を変更するために使用することができます。

## パッケージの呼び出し

`mods.immysiveengineering.DieselHandler` を使用して、DieselHandler パッケージを呼び出すことができます。

## 燃料を追加

| 必須 | タイプ   | データタイプ                                       |
| -- | ----- | -------------------------------------------- |
| 必須 | 出力    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必須 | Input | 整数                                           |

### 例

```zenscript
//例:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## 燃料を取り除く

| 必須 | タイプ | データタイプ                                       |
| -- | --- | -------------------------------------------- |
| 必須 | 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## ドリル燃料を追加

| 必須 | タイプ | データタイプ                                       |
| -- | --- | -------------------------------------------- |
| 必須 | 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## ドリル燃料を取り除く

| 必須 | タイプ | データタイプ                                       |
| -- | --- | -------------------------------------------- |
| 必須 | 出力  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例

```zenscript
//例:
mods.immysiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```
# Excavator

## パッケージの呼び出し

`mods.immersiveengineering.Excavator` を使用して、Excavator パッケージを呼び出すことができます。

## 鉱物を追加

| 必須   | タイプ       | データタイプ   |
| ---- | --------- | -------- |
| 必須   | 名称        | 文字列      |
| 必須   | 鉱物の重量     | int型     |
| 必須   | 失敗のチャンス   | double型  |
| 必須   | Ores      | ストリング[]  |
| 必須   | チャンス      | double[] |
| 省略可能 | 寸法ホワイトリスト | int []   |
| 省略可能 | ブラック リスト  | boolean型 |

### 例

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## 鉱物を削除

| 必須 | タイプ | データタイプ |
| -- | --- | ------ |
| 必須 | 名称  | 文字列型   |

### 例

```zenscript
//例:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```
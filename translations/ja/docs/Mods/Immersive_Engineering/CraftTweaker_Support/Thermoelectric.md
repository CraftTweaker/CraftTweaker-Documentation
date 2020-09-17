# 熱電性
熱電パッケージを使用して、ブロックの温度を登録または登録解除して、イマーシブエンジニアリング熱電発電機に電力を供給することができます。 液体は本質的に温度を持っているので、それらはありませんし、登録することはできません。 気温はケルビンです。

## パッケージの呼び出し
`mods.immysiveengineering.Thermoelectric` を使って、Thermoelectric パッケージを呼び出すことができます。

## 温度源の追加

| 必須 | タイプ       | データタイプ                                              |
| -- | --------- | --------------------------------------------------- |
| 必須 | ターゲットブロック | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | 温度 (K)    | 整数                                                  |

### 例
```zenscript
//例:
mods.immsiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immsiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## 温度源を削除

| 必須 | タイプ       | データタイプ                                              |
| -- | --------- | --------------------------------------------------- |
| 必須 | ターゲットブロック | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |

### 例
```zenscript
//例:
mods.immsiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immsiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```

# MCFood

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.food.MCFood
```

## コンストラクタ
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| パラメータ   | タイプ    | 説明                      |
| ------- | ------ | ----------------------- |
| healing | int    | No description provided |
| 彩度      | float型 | No description provided |



## メソッド
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| パラメータ       | タイプ                                                                                           | 説明                      |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |
| probability | float型                                                                                        | No description provided |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| パラメータ  | タイプ                                                                                           | 説明                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| パラメータ          | タイプ      | 説明                      |
| -------------- | -------- | ----------------------- |
| canEatWhenFull | boolean型 | No description provided |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| パラメータ      | タイプ      | 説明                      |
| ---------- | -------- | ----------------------- |
| fastEating | boolean型 | No description provided |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| パラメータ   | タイプ | 説明                      |
| ------- | --- | ----------------------- |
| healing | int | No description provided |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| パラメータ | タイプ      | 説明                      |
| ----- | -------- | ----------------------- |
| meat  | boolean型 | No description provided |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| パラメータ | タイプ    | 説明                      |
| ----- | ------ | ----------------------- |
| 彩度    | float型 | No description provided |



## プロパティ

| 名称             | タイプ      | Has Getter | Has Setter |
| -------------- | -------- | ---------- | ---------- |
| canEatWhenFull | boolean型 | true       | false      |
| healing        | int      | true       | false      |
| isFastEating   | boolean型 | true       | false      |
| meat           | boolean型 | true       | false      |
| 彩度             | float型   | true       | false      |


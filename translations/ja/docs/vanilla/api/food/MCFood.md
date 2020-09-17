# MCFood

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(int, saturation as float);
```
| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 癒し    | int    | 説明が提供されていません |
| 彩度    | float型 | 説明が提供されていません |



## メソッド
### addEffect

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effection) crafttweaker.api.potion.MCPotionEffectInstance, float型の確率);
```

| パラメータ | タイプ                                                                                           | 説明           |
| ----- | --------------------------------------------------------------------------------------------- | ------------ |
| 効果    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | 説明が提供されていません |
| 確率:   | float型                                                                                        | 説明が提供されていません |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| パラメータ | タイプ                                                                                           | 説明           |
| ----- | --------------------------------------------------------------------------------------------- | ------------ |
| 効果    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | 説明が提供されていません |


### setCanEatWhenFull

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull を boolean として);
```

| パラメータ          | タイプ      | 説明           |
| -------------- | -------- | ------------ |
| canEatWhenFull | boolean型 | 説明が提供されていません |


### setFastEating

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating)
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| <unk> | boolean型 | 説明が提供されていません |


### setHealing

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 癒し    | int | 説明が提供されていません |


### setMeat

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 肉     | boolean型 | 説明が提供されていません |


### saturation

戻り値 [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 彩度    | float型 | 説明が提供されていません |



## プロパティー

| 名称             | タイプ      | ゲッターあり | セッターあり |
| -------------- | -------- | ------ | ------ |
| canEatWhenFull | boolean型 | true   | false  |
| 癒し             | int      | true   | false  |
| isFastEating   | boolean型 | true   | false  |
| 肉              | boolean型 | true   | false  |
| 彩度             | float型   | true   | false  |


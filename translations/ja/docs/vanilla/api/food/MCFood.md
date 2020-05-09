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
| Parameter  | Type  | Description             |
| ---------- | ----- | ----------------------- |
| healing    | int   | No description provided |
| saturation | float | No description provided |



## メソッド
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Parameter   | Type                                                                                          | Description             |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |
| probability | float                                                                                         | No description provided |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter | Type                                                                                          | Description             |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parameter      | Type    | Description             |
| -------------- | ------- | ----------------------- |
| canEatWhenFull | boolean | No description provided |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| fastEating | boolean | No description provided |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| healing   | int  | No description provided |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| meat      | boolean | No description provided |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parameter  | Type  | Description             |
| ---------- | ----- | ----------------------- |
| saturation | float | No description provided |



## プロパティ

| Name           | Type    | Has Getter | Has Setter |
| -------------- | ------- | ---------- | ---------- |
| canEatWhenFull | boolean | true       | false      |
| healing        | int     | true       | false      |
| isFastEating   | boolean | true       | false      |
| meat           | boolean | true       | false      |
| saturation     | float   | true       | false      |


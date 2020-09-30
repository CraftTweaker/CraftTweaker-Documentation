# MCFood

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Parameter  | Type  | Description             |
| ---------- | ----- | ----------------------- |
| healing    | int   | No description provided |
| saturation | float | No description provided |



## Methods
### addEffect

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

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

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter | Type                                                                                          | Description             |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parameter      | Type     | Description             |
| -------------- | -------- | ----------------------- |
| canEatWhenFull | boolean型 | No description provided |


### setFastEating

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parameter  | Type     | Description             |
| ---------- | -------- | ----------------------- |
| fastEating | boolean型 | No description provided |


### setHealing

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| healing   | int  | No description provided |


### setMeat

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| meat      | boolean型 | No description provided |


### setSaturation

戻り値の型: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parameter  | Type  | Description             |
| ---------- | ----- | ----------------------- |
| saturation | float | No description provided |



## Properties

| 名称             | Type     | Has Getter | Has Setter |
| -------------- | -------- | ---------- | ---------- |
| canEatWhenFull | boolean型 | true       | false      |
| healing        | int      | true       | false      |
| isFastEating   | boolean型 | true       | false      |
| meat           | boolean型 | true       | false      |
| saturation     | float    | true       | false      |


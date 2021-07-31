# MCFood

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Параметр   | Тип   | Description          |
| ---------- | ----- | -------------------- |
| healing    | int   | Описание отсутствует |
| saturation | float | Описание отсутствует |



## Methods
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Параметр    | Тип                                                                                           | Description          |
| ----------- | --------------------------------------------------------------------------------------------- | -------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |
| probability | float                                                                                         | Описание отсутствует |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр | Тип                                                                                           | Description          |
| -------- | --------------------------------------------------------------------------------------------- | -------------------- |
| effect   | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Параметр       | Тип     | Description          |
| -------------- | ------- | -------------------- |
| canEatWhenFull | boolean | Описание отсутствует |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Параметр   | Тип     | Description          |
| ---------- | ------- | -------------------- |
| fastEating | boolean | Описание отсутствует |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| healing  | int | Описание отсутствует |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Параметр | Тип     | Description          |
| -------- | ------- | -------------------- |
| meat     | boolean | Описание отсутствует |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Параметр   | Тип   | Description          |
| ---------- | ----- | -------------------- |
| saturation | float | Описание отсутствует |



## Свойства

| Название       | Тип     | Имеет Getter | Имеет Setter |
| -------------- | ------- | ------------ | ------------ |
| canEatWhenFull | boolean | true         | false        |
| healing        | int     | true         | false        |
| isFastEating   | boolean | true         | false        |
| meat           | boolean | true         | false        |
| saturation     | float   | true         | false        |


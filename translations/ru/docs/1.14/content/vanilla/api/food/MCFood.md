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
| Параметр   | Тип   | Описание             |
| ---------- | ----- | -------------------- |
| healing    | int   | Описание отсутствует |
| saturation | float | Описание отсутствует |



## Методы
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Параметр    | Тип                                                                                           | Описание             |
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

| Параметр | Тип                                                                                           | Описание             |
| -------- | --------------------------------------------------------------------------------------------- | -------------------- |
| effect   | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Параметр       | Тип     | Описание             |
| -------------- | ------- | -------------------- |
| canEatWhenFull | boolean | Описание отсутствует |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Параметр   | Тип     | Описание             |
| ---------- | ------- | -------------------- |
| fastEating | boolean | Описание отсутствует |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| healing  | int | Описание отсутствует |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| meat     | boolean | Описание отсутствует |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Параметр   | Тип   | Описание             |
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


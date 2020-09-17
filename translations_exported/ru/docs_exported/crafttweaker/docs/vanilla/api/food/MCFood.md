# MCFood

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.food.MCFood
```

## Конструкторы
```zenscript
new crafttweaker.api.food.MCFood(исцеление как int, насыщенность как плавный);
```
| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| исцеление    | int   | Описание отсутствует |
| насыщенность | float | Описание отсутствует |



## Методы
### addEffect

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(эффект как crafttweaker.api.potion.MCPotionEffectInstance, вероятность как плавание);
```

| Параметр    | Тип                                                                                                   | Описание             |
| ----------- | ----------------------------------------------------------------------------------------------------- | -------------------- |
| effect      | [Экземпляр crafttweaker.api.potion.MCPotionEffectEffect](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |
| вероятность | float                                                                                                 | Описание отсутствует |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(эффект как crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр | Тип                                                                                                   | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------- | -------------------- |
| effect   | [Экземпляр crafttweaker.api.potion.MCPotionEffectEffect](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### setCanEatWhenFull

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull как boolean);
```

| Параметр       | Тип     | Описание             |
| -------------- | ------- | -------------------- |
| canEatWhenFull | boolean | Описание отсутствует |


### Настройка FastEating

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| Зажигаем | boolean | Описание отсутствует |


### назначение лечения

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(исцеление как int);
```

| Параметр  | Тип | Описание             |
| --------- | --- | -------------------- |
| исцеление | int | Описание отсутствует |


### Мясо

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(мясо в виде бункеров);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| мясо     | boolean | Описание отсутствует |


### setSaturation

Тип возврата: [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(продолжительность как плавный);
```

| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| насыщенность | float | Описание отсутствует |



## Свойства

| Название        | Тип     | Имеет Getter | Имеет Setter |
| --------------- | ------- | ------------ | ------------ |
| canEatWhenFull  | boolean | true         | false        |
| исцеление       | int     | true         | false        |
| небыстроеееееие | boolean | true         | false        |
| мясо            | boolean | true         | false        |
| насыщенность    | float   | true         | false        |


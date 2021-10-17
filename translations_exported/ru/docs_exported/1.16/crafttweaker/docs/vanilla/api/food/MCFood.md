# MCFood

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.MCFood;
```


## Constructors

No Description Provided
```zenscript
new MCFood(healing as int, saturation as float) as MCFood
```
| Параметр   | Тип   | Описание                |
| ---------- | ----- | ----------------------- |
| healing    | int   | No Description Provided |
| saturation | float | No Description Provided |



## Методы

:::group{name=addEffect}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.addEffect(effect as MCPotionEffectInstance, probability as float) as MCFood
```

| Параметр    | Тип                                                                   | Описание                |
| ----------- | --------------------------------------------------------------------- | ----------------------- |
| effect      | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |
| probability | float                                                                 | No Description Provided |


:::

:::group{name=clearEffects}

Return Type: void

```zenscript
// MCFood.clearEffects() as void

myMCFood.clearEffects();
```

:::

:::group{name=removeEffect}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.removeEffect(effect as MCPotionEffectInstance) as MCFood
```

| Параметр | Тип                                                                   | Описание                |
| -------- | --------------------------------------------------------------------- | ----------------------- |
| effect   | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |


:::

:::group{name=setCanEatWhenFull}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setCanEatWhenFull(canEatWhenFull as boolean) as MCFood
```

| Параметр       | Тип     | Описание                |
| -------------- | ------- | ----------------------- |
| canEatWhenFull | boolean | No Description Provided |


:::

:::group{name=setFastEating}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setFastEating(fastEating as boolean) as MCFood
```

| Параметр   | Тип     | Описание                |
| ---------- | ------- | ----------------------- |
| fastEating | boolean | No Description Provided |


:::

:::group{name=setHealing}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setHealing(healing as int) as MCFood
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| healing  | int | No Description Provided |


:::

:::group{name=setMeat}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setMeat(meat as boolean) as MCFood
```

| Параметр | Тип     | Описание                |
| -------- | ------- | ----------------------- |
| meat     | boolean | No Description Provided |


:::

:::group{name=setSaturation}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setSaturation(saturation as float) as MCFood
```

| Параметр   | Тип   | Описание                |
| ---------- | ----- | ----------------------- |
| saturation | float | No Description Provided |


:::


## Свойства

| Название       | Тип     | Имеет Getter | Имеет Setter | Описание                |
| -------------- | ------- | ------------ | ------------ | ----------------------- |
| canEatWhenFull | boolean | true         | false        | No Description Provided |
| healing        | int     | true         | false        | No Description Provided |
| isFastEating   | boolean | true         | false        | No Description Provided |
| meat           | boolean | true         | false        | No Description Provided |
| saturation     | float   | true         | false        | No Description Provided |


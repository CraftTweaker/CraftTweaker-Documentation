# MCFood

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.MCFood;
```


## Constructor #构造函数

No Description Provided
```zenscript
new MCFood(healing as int, saturation as float) as MCFood
```
| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| healing    | int   | No Description Provided |
| saturation | float | No Description Provided |



## 使用方式

:::group{name=addEffect}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.addEffect(effect as MCPotionEffectInstance, probability as float) as MCFood
```

| 参数          | 类型                                                                    | 描述                      |
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

| 参数     | 类型                                                                    | 描述                      |
| ------ | --------------------------------------------------------------------- | ----------------------- |
| effect | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |


:::

:::group{name=setCanEatWhenFull}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setCanEatWhenFull(canEatWhenFull as boolean) as MCFood
```

| 参数             | 类型  | 描述                      |
| -------------- | --- | ----------------------- |
| canEatWhenFull | 布尔值 | No Description Provided |


:::

:::group{name=setFastEating}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setFastEating(fastEating as boolean) as MCFood
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| fastEating | 布尔值 | No Description Provided |


:::

:::group{name=setHealing}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setHealing(healing as int) as MCFood
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| healing | int | No Description Provided |


:::

:::group{name=setMeat}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setMeat(meat as boolean) as MCFood
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| meat | 布尔值 | No Description Provided |


:::

:::group{name=setSaturation}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setSaturation(saturation as float) as MCFood
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| saturation | float | No Description Provided |


:::


## 参数

| 名称             | 类型    | 可获得  | 可设置   | 描述                      |
| -------------- | ----- | ---- | ----- | ----------------------- |
| canEatWhenFull | 布尔值   | true | false | No Description Provided |
| healing        | int   | true | false | No Description Provided |
| isFastEating   | 布尔值   | true | false | No Description Provided |
| meat           | 布尔值   | true | false | No Description Provided |
| saturation     | float | true | false | No Description Provided |


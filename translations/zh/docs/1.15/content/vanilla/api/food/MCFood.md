# MCFood

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.food.MCFood
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| healing    | int | No description provided |
| saturation | 浮点数 | No description provided |



## 使用方式
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| 参数          | 类型                                                                                            | 描述                      |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |
| probability | 浮点数                                                                                           | No description provided |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| 参数             | 类型  | 描述                      |
| -------------- | --- | ----------------------- |
| canEatWhenFull | 布尔值 | No description provided |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| fastEating | 布尔值 | No description provided |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| healing | int | No description provided |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| meat | 布尔值 | No description provided |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| saturation | 浮点数 | No description provided |



## 参数

| 名称             | 类型  | 可获得  | 可设置   |
| -------------- | --- | ---- | ----- |
| canEatWhenFull | 布尔值 | true | false |
| healing        | int | true | false |
| isFastEating   | 布尔值 | true | false |
| meat           | 布尔值 | true | false |
| saturation     | 浮点数 | true | false |


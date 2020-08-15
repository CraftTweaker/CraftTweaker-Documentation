# MCFood

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.food.MCFood
```

## Constructor #构造函数
```zenscript
新手工业.api.food.MCFood(治疗为内、饱和为浮点型)；
```
| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 治愈中 | int | No description provided |
| 饱和度 | 浮点数 | No description provided |



## 方法
### 添加效果

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(效果为 craftweeper.api.potion.MCPotionEffectInstance, 概率为 float)；
```

| 参数 | 类型                                                                                            | 说明                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 效果 | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |
| 概率 | 浮点数                                                                                           | No description provided |


### 清除特效

```zenscript
myMCFood.cleareffects();
```

### removeEffect

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(效果为 craftweeper.api.potion.MCPotionEffectInstance)；
```

| 参数 | 类型                                                                                            | 描述                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 效果 | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| 参数             | 类型      | 描述                      |
| -------------- | ------- | ----------------------- |
| canEatWhenFull | boolean | No description provided |


### 设置快速设置

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| 正在快速入门 | boolean | No description provided |


### 设置恢复

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(正在治疗)；
```

| 参数  | 类型 | 描述                      |
| --- | -- | ----------------------- |
| 治愈中 | 整数 | No description provided |


### 采集肉

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(肉作为布尔值)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 肉  | boolean | No description provided |


### 设置饱和度

返回 [craftbinstruer.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setasteration(浮点饱和度)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 饱和度 | 浮点数 | No description provided |



## 参数

| 名称             | 类型      | 可获得  | 可设置   |
| -------------- | ------- | ---- | ----- |
| canEatWhenFull | boolean | true | false |
| 治愈中            | 整数      | true | false |
| isFastEing     | boolean | true | false |
| 肉              | boolean | true | false |
| 饱和度            | 浮点数     | true | false |


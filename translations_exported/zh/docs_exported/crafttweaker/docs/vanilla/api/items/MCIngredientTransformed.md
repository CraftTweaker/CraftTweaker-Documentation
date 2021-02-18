# MCIngredientTransformed&LT;T : IIngredient&GT;

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## 已实现的接口
MCIngredientTransformed implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [材料（IIngredient）](/vanilla/api/items/IIngredient)

## Casters

| 结果类型                                       | 是否隐藏 |
| ------------------------------------------ | ---- |
| [IData](/vanilla/api/data/IData)           | true |
| [MapData #地图数据](/vanilla/api/data/MapData) | true |

## 方法

### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.anyDamage() as MCIngredientConditioned<IIngredient>
myMCIngredientTransformed.anyDamage();
```

### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack) as boolean
myMCIngredientTransformed.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                 |
| ----- | ------------------------------------------- | ------------------ |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| 忽略伤害  | boolean                                     | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyDamaged() as MCIngredientConditioned<IIngredient>
myMCIngredientTransformed.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| 参数       | 类型                                                                       | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | ----- | ------------ |
| uid      | string                                                                   | No Description Provided | false |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true  |              |


## 运算符

### OR

```zenscript
myMCIngredientTransformed | other as IIngredient
```




## 参数

| 名称    | 类型                                                                                       | 可获得  | 可设置   |
| ----- | ---------------------------------------------------------------------------------------- | ---- | ----- |
| 基本属性  | T                                                                                        | true | false |
| items | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true | false |
| 变压器   | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true | false |


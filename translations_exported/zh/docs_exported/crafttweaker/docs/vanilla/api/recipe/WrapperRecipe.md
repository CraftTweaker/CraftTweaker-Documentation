# WrapperRecipe

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.recipes.WrapperRecipe
```

## 方法
### canFit

Return type: boolean

```zenscript
myWrapperRecipe.canFit(width as int, height as int);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| width  | int | No description provided |
| height | int | No description provided |



## 参数

| 名称          | 类型                                                                                          | 可获得  | 可设置   |
| ----------- | ------------------------------------------------------------------------------------------- | ---- | ----- |
| dynamic     | boolean                                                                                     | true | false |
| group       | String                                                                                      | true | false |
| icon        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true | false |
| id          | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)            | true | false |
| ingredients | List&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt; | true | false |
| output（输出）  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true | false |


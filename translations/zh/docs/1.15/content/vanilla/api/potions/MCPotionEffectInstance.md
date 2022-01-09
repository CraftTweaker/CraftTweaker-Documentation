# MCPotionEffectInstance

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## 使用方式
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| 参数 | 类型                                                                | 描述                      |
| -- | ----------------------------------------------------------------- | ----------------------- |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

返回为布尔值

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### getCurativeItems

Returns List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

返回为布尔值

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| 参数 | 类型                                                                | 描述                      |
| -- | ----------------------------------------------------------------- | ----------------------- |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| 参数    | 类型                                                                  | 描述                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| items | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## 参数

| 名称            | 类型                                                                            | 可获得  | 可设置   |
| ------------- | ----------------------------------------------------------------------------- | ---- | ----- |
| ambient       | 布尔值                                                                           | true | false |
| amplifier     | int                                                                           | true | false |
| duration      | int                                                                           | true | false |
| effectName    | 字符串[string]                                                                   | true | false |
| potion        | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true | false |
| showIcon      | 布尔值                                                                           | true | false |
| showParticles | 布尔值                                                                           | true | false |


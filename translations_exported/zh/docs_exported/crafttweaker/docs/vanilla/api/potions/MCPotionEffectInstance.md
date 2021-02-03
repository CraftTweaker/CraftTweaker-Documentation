# MCPotionEffectInstance

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffectInstance;
```


## 已实现的接口
MCPotionEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MCPotionEffectInstance

- Comparable&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt;
## 方法

### addCurativeItem

Return Type: void

```zenscript
MCPotionEffectInstance.addCurativeItem(stack as IItemStack) as void
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


### combine

Return Type: boolean

```zenscript
MCPotionEffectInstance.combine(effect as MCPotionEffectInstance) as boolean
```

| 参数     | 类型                                                                    | 描述                      |
| ------ | --------------------------------------------------------------------- | ----------------------- |
| effect | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |


### getCurativeItems

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
MCPotionEffectInstance.getCurativeItems() as stdlib.List<IItemStack>
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Return Type: boolean

```zenscript
MCPotionEffectInstance.isCurativeItem(stack as IItemStack) as boolean
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


### setCurativeItems

Return Type: void

```zenscript
MCPotionEffectInstance.setCurativeItems(items as IItemStack[]) as void
```

| 参数    | 类型                                            | 描述                      |
| ----- | --------------------------------------------- | ----------------------- |
| items | [IItemStack](/vanilla/api/items/IItemStack)[] | No Description Provided |



## 参数

| 名称            | 类型                                                    | 可获得  | 可设置   |
| ------------- | ----------------------------------------------------- | ---- | ----- |
| ambient       | boolean                                               | true | false |
| amplifier     | int                                                   | true | false |
| duration      | int                                                   | true | false |
| effectName    | string                                                | true | false |
| potion        | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true | false |
| showIcon      | boolean                                               | true | false |
| showParticles | boolean                                               | true | false |


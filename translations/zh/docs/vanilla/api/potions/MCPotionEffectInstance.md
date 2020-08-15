# MCPotionEffect实例

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## 方法
### 添加治疗项目

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as craftweeper.api.IItemStack);
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### 合并

返回为布尔值

```zenscript
myMCPotionEffectInstance.combine(效果为 craftbiner.api.potion.MCPotionEffectInstance)；
```

| 参数 | 类型                                                                                            | 说明                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 效果 | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### 获取治疗项目

返回列表<[craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

返回为布尔值

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as craftminstrer.api.item.IItemStack)；
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### 设置治疗项目

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as craftbiner.api.IItemStack[]);
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 项目 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## 参数

| 名称         | 类型                                                                    | 可获得  | 可设置   |
| ---------- | --------------------------------------------------------------------- | ---- | ----- |
| 环境         | boolean                                                               | true | false |
| 放大器        | 整数                                                                    | true | false |
| 持续时间       | 整数                                                                    | true | false |
| effectName | 字符串[string]                                                           | true | false |
| 药水         | [制作效果.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true | false |
| 显示图标       | boolean                                                               | true | false |
| 显示粒子       | boolean                                                               | true | false |


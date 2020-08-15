# MCPotionE效果

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作效果.api.potion.MCPotionEffect
```

## 已实现的接口
MCPotionEffect 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### 准备好

返回为布尔值

```zenscript
myMCPotionEffect.isReady(持续时间为英寸，放大器为英寸)；
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| 持续时间 | int | No description provided |
| 放大器  | int | No description provided |


### newInstance

返回 [craftbinstruer.api.potion.MCPotionEffect实例](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(持续时间为整数，放大器为整数)；
```

| 参数   | 类型 | 说明                      | 可选的   | 默认值 |
| ---- | -- | ----------------------- | ----- | --- |
| 持续时间 | 整数 | No description provided | false | 空的  |
| 放大器  | 整数 | No description provided | true  | 0   |



## 参数

| 名称                   | 类型                                                                    | 可获得  | 可设置   |
| -------------------- | --------------------------------------------------------------------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string]                                                           | true | false |
| 治疗项目                 | 列表<[craftmiliter.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true | false |
| 显示名称                 | 字符串[string]                                                           | true | false |
| 受益的                  | boolean                                                               | true | false |
| 即时的                  | boolean                                                               | true | false |
| 液体颜色                 | 整数                                                                    | true | false |
| 名称                   | 字符串[string]                                                           | true | false |


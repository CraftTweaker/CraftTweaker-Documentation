# MCPotionEffect

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## 已实现的接口
MCPotionEffect implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 使用方式
### isReady

返回为布尔值

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| duration  | int | No description provided |
| amplifier | int | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| 参数        | 类型  | 描述                      | 可选的   | 默认值  |
| --------- | --- | ----------------------- | ----- | ---- |
| duration  | int | No description provided | false | null |
| amplifier | int | No description provided | true  | 0    |



## 参数

| 名称                   | 类型                                                                      | 可获得  | 可设置   |
| -------------------- | ----------------------------------------------------------------------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string]                                                             | true | false |
| curativeItems        | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true | false |
| displayName          | 字符串[string]                                                             | true | false |
| isBeneficial         | 布尔值                                                                     | true | false |
| isInstant            | 布尔值                                                                     | true | false |
| liquidColor          | int                                                                     | true | false |
| name（名称）             | 字符串[string]                                                             | true | false |


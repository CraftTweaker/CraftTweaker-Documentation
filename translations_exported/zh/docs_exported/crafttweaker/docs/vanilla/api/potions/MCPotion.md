# MCPotion

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.potion.MCPotion
```

## 已实现的接口
MCPotion implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### getNamePrefixed

Return type: String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | String | No description provided |



## 参数

| 名称               | 类型                                                                                                            | 可获得  | 可设置   |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ---- | ----- |
| commandString    | String                                                                                                        | true | false |
| effects          | 列表&lt;[craftmiliter.api.potion.MCPotionEffect实例](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true | false |
| hasInstantEffect | boolean                                                                                                       | true | false |


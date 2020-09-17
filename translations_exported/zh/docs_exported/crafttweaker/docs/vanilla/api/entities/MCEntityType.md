# MCEntityType #MC实体类型

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.entity.MCEntityType
```

## 已实现的接口
MCEntityType实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 参数

| 名称                   | 类型                                                                                             | 可获得  | 可设置   |
| -------------------- | ---------------------------------------------------------------------------------------------- | ---- | ----- |
| classification #类别   | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | true | false |
| commandString #命令字符串 | 字符串[string]                                                                                    | true | false |
| 高度                   | 浮点数                                                                                            | true | false |
| immuneToFire #免疫火焰   | boolean                                                                                        | true | false |
| lootTable            | 字符串[string]                                                                                    | true | false |
| 名称                   | 字符串[string]                                                                                    | true | false |
| serializable #可序列化   | boolean                                                                                        | true | false |
| summonable #可召唤的     | boolean                                                                                        | true | false |
| translationKey       | 字符串[string]                                                                                    | true | false |
| width                | 浮点数                                                                                            | true | false |


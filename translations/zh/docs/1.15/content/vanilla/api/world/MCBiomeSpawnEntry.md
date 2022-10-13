# MCBiomeSpawnEntry

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.world.MCBiomeSpawnEntry
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.world.MCBiomeSpawnEntry(entityType as crafttweaker.api.entity.MCEntityType, weight as int, minGroupCount as int, maxGroupCount as int);
```
| 参数            | 类型                                                                         | 描述                      |
| ------------- | -------------------------------------------------------------------------- | ----------------------- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | No description provided |
| weight        | int                                                                        | No description provided |
| minGroupCount | int                                                                        | No description provided |
| maxGroupCount | int                                                                        | No description provided |



## 参数

| 名称            | 类型                                                                         | 可获得  | 可设置   |
| ------------- | -------------------------------------------------------------------------- | ---- | ----- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | true | false |
| maxGroupCount | int                                                                        | true | false |
| minGroupCount | int                                                                        | true | false |
| weight        | int                                                                        | true | false |


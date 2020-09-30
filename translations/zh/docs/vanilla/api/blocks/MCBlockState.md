# MCBlockState #MC方块状态

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.block.MCBlockState
```

## 已实现的接口
MCBlockState实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 使用方式
### getAllowedValuesForProperty #获取参数的可用值

返回为可用值列表<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| 参数       | 类型     | 描述    |
| -------- | ------ | ----- |
| name（名称） | String | 未提供说明 |


### getProperties #获取参数

返回字符串[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames #获取参数名称

返回为可用值列表<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue #获取参数值

返回字符串[String]

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| 参数 | 类型          | 说明    |
| -- | ----------- | ----- |
| 名称 | 字符串[string] | 未提供说明 |


### hasProperty #是否有参数存在

返回为布尔值

```zenscript
myMCBlockState.hasProperty(name as String);
```

| 参数 | 类型          | 描述    |
| -- | ----------- | ----- |
| 名称 | 字符串[string] | 未提供说明 |


### withProperty #参数数值

返回值 [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| 参数 | 类型          | 描述    |
| -- | ----------- | ----- |
| 名称 | 字符串[string] | 未提供说明 |
| 值  | 字符串[string] | 未提供说明 |



## 参数

| 名称                                | 类型                                                            | 可获得  | 可设置   |
| --------------------------------- | ------------------------------------------------------------- | ---- | ----- |
| block #方块                         | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true | false |
| canProvidePower #可提供能量(应该是指红石之类的) | 布尔值                                                           | true | false |
| commandString #命令字符串              | 字符串[string]                                                   | true | false |
| hasTileEntity #具有方块实体             | 布尔值                                                           | true | false |
| isSolid #是否为固体                    | 布尔值                                                           | true | false |
| isSticky #是否具有粘性                  | 布尔值                                                           | true | false |
| lightLevel #光照级别                  | 整数变量                                                          | true | false |
| ticksRandomly #是否具有随机刻            | 布尔值                                                           | true | false |

## Casters

| 结果类型                                                          | 是否隐藏  |
| ------------------------------------------------------------- | ----- |
| 字符串[string]                                                   | false |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true  |


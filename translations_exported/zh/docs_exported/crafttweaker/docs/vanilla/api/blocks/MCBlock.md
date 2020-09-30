# MCBlock #MC方块

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.block.MCBlock
```

## 方法
### canSpawnInBlock

Return type: boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState #获取默认状态

返回类型： [craftbiner.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## 参数

| 名称             | 类型     | 可获得  | 可设置   |
| -------------- | ------ | ---- | ----- |
| lootTable      | String | true | false |
| translationKey | String | true | false |

## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| String | false |


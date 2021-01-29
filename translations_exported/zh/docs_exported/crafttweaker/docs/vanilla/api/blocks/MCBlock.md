# MCBlock #MC方块

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlock;
```


## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| string | false |

## 方法

### canSpawnInBlock

Return Type: boolean

```zenscript
MCBlock.canSpawnInBlock() as boolean
myMCBlock.canSpawnInBlock();
```
### getDefaultState #获取默认状态

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlock.getDefaultState() as MCBlockState
myMCBlock.getDefaultState();
```

## 参数

| 名称             | 类型     | 可获得  | 可设置   |
| -------------- | ------ | ---- | ----- |
| commandString  | string | true | false |
| lootTable      | string | true | false |
| translationKey | string | true | false |


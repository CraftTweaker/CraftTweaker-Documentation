# IBlockSource

The IBlockSource interface contains some information when a dispenser is activated.

## 导入类

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.

`import crafttweaker.dispenser.IBlockSource;`

## ZenGetters

| ZenGetters | 类型                                         | 描述                                 |
| ---------- | ------------------------------------------ | ---------------------------------- |
| x          | 双精度                                        | The x coordinate of the dispenser. |
| y          | 双精度                                        | The y coordinate of the dispenser. |
| z          | 双精度                                        | The z coordinate of the dispenser. |
| world      | [IWorld](/Vanilla/World/IWorld)            | The world of the dispenser.        |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState) | The block state of the dispenser.  |
| 点          | [IBlockPos](/Vanilla/World/IBlockPos)      | The position of the dispenser.     |
| 方向         | [IFacing](/Vanilla/World/IFacing)          | The facing of the dispenser.       |

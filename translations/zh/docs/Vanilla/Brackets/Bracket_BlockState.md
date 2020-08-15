# 区块处理器

BlockState区块处理程序允许你访问游戏中的区块。 只能在游戏中注册BlockStates， 这样添加或移除模组可能会导致问题，因为你会在模块状态区块处理器中引用模组的模块。

BlockState区块处理程序像这样引用：

```zenscript
<blockstate:modid:blockname>
```

使用 `模拟器` 是方块定义的模组的模组摩托手。 和 `方块名称` 为方块名称。 这将返回指定方块的默认方块模块。

要使用BlockState区块处理器获得一个特定的块状态，您可以选择性地指定它的属性，就像这样：

```zenscript
<blockstate:modid:blockname:properties>
```

`属性` 是一个逗号分隔的组。 `name=value` 对应你想要在拦截状态中指定的任何属性。 未指定的任何属性都具有与默认区块状态相同的值。

这将返回IBlockState物体。 更多信息请参考 [相应的 wiki 条目](/Vanilla/Blocks/IBlockState/)。

请注意，这个括号处理程序将创建一个特定的块状态的参考。 如果您想要与多个块状态匹配，请参阅 [IBlockStateMatcher wiki条目](/Vanilla/Blocks/IBlockStateMatcher)。

## 例子

一个区块处理程序的例子是：

```zenscript
//block of dirt
<blockstate:minecraft:dirt>

/oak log, 垂直
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

/spruck log, 水平沿x-轴
<blockstate:minecraft:log:variant=spruce,axis=x>
```
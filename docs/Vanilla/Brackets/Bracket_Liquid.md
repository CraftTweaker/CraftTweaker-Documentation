#  流体处理器

流体处理器允许你访问游戏中的流体。它只能用于访问注册的流体，所以如果你有访问模组中的流体，增加或者移除此模组时可能会出错。

可以用以下方式引用流体：

```
<liquid:liquidname> OR <fluid:liquidname>

<liquid:lava> OR <fluid:lava>
```

如果流体被找到，将返回流体堆对象。
更多信息请参考[所属的wiki页面](/Vanilla/Liquids/ILiquidStack)。

# 获取所有注册的流体
你可以使用下列命令以在CraftTweak日志中输出所有注册的流体

```
/ct liquids
/crafttweaker liquids
```

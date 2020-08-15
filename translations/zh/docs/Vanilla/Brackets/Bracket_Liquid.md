# 液体套装处理器

液压碎片处理器让您能够访问游戏中的液体。 它只能在游戏中注册液体， 如果你在液体板块处理器中引用模组的液体，添加或删除模组可能会引起问题。

液体组处理器中的液体像这样引用：

```zenscript
<liquid:liquidname> 或 <fluid:liquidname>

<liquid:lava> 或 <fluid:lava>
```

如果找到液体，这将返回一个 ILiquidStack 对象。 请参考 [相应的 Wiki 条目](/Vanilla/Liquids/ILiquidStack/) 了解您可以对这些条目做些什么。

# 获取所有注册的液体中

您可以使用以下命令将所有已注册的液体输出到 CraftTinlower 日志

    /ct liquids
    /crafttweaker liquids
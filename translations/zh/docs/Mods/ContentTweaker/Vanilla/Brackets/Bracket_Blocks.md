# 块处理器

方块板块处理程序让您访问游戏中的方块。 它只能获得在游戏中注册的方块， 这样添加或移除模组可能导致问题，因为你在块块处理器中引用模组的方块。

区块块处理程序中以此方式引用了区块：

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

如果找到方块，这将返回一个 [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) 对象。  
请参阅 [相应的 Wiki 条目](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) 了解您可以对这些条目做些什么。
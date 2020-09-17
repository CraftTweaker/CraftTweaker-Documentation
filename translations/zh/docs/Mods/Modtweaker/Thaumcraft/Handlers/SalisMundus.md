# Salis Mundus

这个软件包允许您添加转化处理器来处理甲草胺的销售。  
这些处理程序会被调用，当你点击世界上与Thaumcraft的沙龙混合体中的一个方块时被调用。

如果该结果是一个区块，它将放在世界上，如果不是放在项目上。

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thaumcraft.SalisMundus;
```

## 添加配方

您可以指定一个 [IBlock](/Vanilla/Blocks/IBlock/) 或 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/)。  
如果您没有指定研究，这个配方始终是可能的 如果您确实决定指定一个研究字符串，您需要解锁研究才能转换为工作。

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in , IItemStack out, @Optional String research);
SalisMundus.addleSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IoreDictEnterprise in IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addsingleConversion(IoreDictEntry in, IItemStackout, @Optional String research);
SalisMundus.addleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## 删除配方

您也可以删除所有返回匹配项的配方。  
此处理程序检查提供的参数是否与输出项目堆栈匹配， 这样你也可以删除所有配方使用通配符 `<*>`

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

///removes all all registed managlers
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

// Only removes cruble handler
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```
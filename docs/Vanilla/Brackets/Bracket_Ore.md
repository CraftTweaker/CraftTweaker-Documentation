# 矿物词典处理器

矿物词典处理器允许你访问游戏中的矿物词典。

可以用以下方式引用矿物词典：

```
<ore:orename>
<ore:ingotIron>
```

只要没有调用`*`（会返回`List<IOreDictEntry>`），将会返回[矿物词典条目](/Vanilla/OreDict/IOreDictEntry)对象。
如果所访问的矿物词典在游戏中不存在，将会创造一个新的且不包含任何信息的矿物词典，名称为所输入的名称且返回此对象。
更多使用信息请参考[矿物词典条目](/Vanilla/OreDict/IOreDictEntry)。


# 获取所有注册过的矿物词典

你可以使用下列命令以在CraftTweak日志中输出所有注册的矿物词典。
```
/ct oredict
/crafttweaker oredict
```

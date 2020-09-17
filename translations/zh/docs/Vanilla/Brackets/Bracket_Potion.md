# 药水板块处理器

药水箱处理器让你在游戏中访问药水. 它只能在游戏中注册药水， 这样添加或移除模组可能会导致问题，因为如果你在药水槽处理器中引用模组的药水。

药水包处理器中像这样引用：

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

如果找到药水，这将返回一个 IPotion 对象。 请参考 [相应的 Wiki 条目](/Vanilla/Potions/IPotion/) 了解您可以对这些条目做些什么。

# 获取所有注册药水

您可以使用以下命令将所有注册的药水输出到CraftTinlower 日志

    /ctt 药水
    /craftbelower 药水
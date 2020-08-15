# 实体套装处理器

实体约束处理程序允许您在游戏中访问实体(例如Mobs, 瓦片等)。 只能让实体在游戏中注册， 这样添加或移除模组可能会导致问题，因为你会在实体布局处理器中引用模组的怪物。

实体在实体处理程序中以此方式引用：

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

如果发现生物/实体，这将返回一个 IEntityDefinition 对象。 请参考 [相应的 Wiki 条目](/Vanilla/Entities/IEntityDefinition/) 了解您可以对这些条目做些什么。

# 获取所有注册实体

您可以使用下面的命令将所有注册实体输出到 CraftTinlower 日志

    /ctt 实体
    /craftbinding 实体
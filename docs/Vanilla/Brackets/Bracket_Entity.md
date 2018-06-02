# 实体处理器

实体处理器允许你访问游戏中的实体（例；生物，方块实体值等等）。它只能用于访问注册的实体，所以如果你有访问模组中的生物，增加或者移除此模组时可能会出错。

可以用以下方式引用实体:

```
<entity:modID:entityName>

<entity:minecraft:sheep>
```

如果生物/实体被找到，将返回实体定义对象
更多使用信息请参考[所属的wiki页面](/Vanilla/Entities/IEntityDefinition)。

# 获取所有注册过的实体

你可以使用下列命令以在CraftTweak日志中输出所有注册过的实体
```
/ct entities
/crafttweaker entities
```

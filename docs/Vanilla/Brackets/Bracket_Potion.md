# 药水处理器

药水处理器允许你访问游戏中的药水。它只能用于访问注册的药水，所以如果你有访问模组中的药水，增加或者移除此模组时可能会出错。

可以用以下方式引用药水：

```
<potion:modname:potionname>

<potion:minecraft:strength>
```

如果药水被找到，将返回药水对象。
更多使用信息请参考[所属的wiki页面](/Vanilla/Potions/IPotion) for further information on what you can do with these.

# 获取所有注册的药水

你可以使用下列命令以在CraftTweak日志中输出所有注册的药水
```
/ct potions
/crafttweaker potions
```

# 材料零件处理器

材料零件处理程序让您能够访问游戏中的材料零件。 它只能在游戏中注册材料配件，所以你需要注意脚本的加载顺序。

材料部件用这种方式在材料零件处理器中引用：

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

如果找到材料部件，这将返回材料部件定义对象。  
这是一个同时起作用的对象 [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 以及一个 [IItemStack](/Vanilla/Items/IItemStack/) 对象， 这样两个接口的方法都将适用于返回的定义。
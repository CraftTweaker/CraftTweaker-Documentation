# 项目

插件的 Thaumcraft 集成扩展 [IItemStacks](/Vanilla/Items/IItemStack/)。  
这意味着你可以在任何 IItemStack 对象上使用下面的方法：

## 设定方面

您可以使用它来覆盖项目通常具有的方面。  
需要 [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] 或更多 [CTAPotStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) 对象。

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## 移除分组

您可以使用这个来防止某些方面被添加到项目中。  
需要 [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] 或更多 [CTAPotStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) 对象。

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```
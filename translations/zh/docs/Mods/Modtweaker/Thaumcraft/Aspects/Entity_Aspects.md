# 实体方面

插件的 Thaumcraft 集成扩展 [IentityDefine](/Vanilla/Entities/IEntityDefinition/)。  
这意味着你可以在任何 IEntityDefinition 对象上使用下面的方法：

## 设定方面

您可以使用它来覆盖一个实体通常具有的方面。  
需要 [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] 或更多 [CTAPotStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) 对象。

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## 移除分组

您可以使用这个来防止某些方面被添加到实体中。  
需要 [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] 或更多 [CTAPotStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) 对象。

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```
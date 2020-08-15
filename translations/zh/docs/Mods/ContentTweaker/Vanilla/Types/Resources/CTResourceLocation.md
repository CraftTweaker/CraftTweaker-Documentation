# CTResourceLocation

资源位置对象用于告诉Minecraft在哪里查找东西。 它包括一个域和一个路径。

## 呼叫/导入软件包

If you don't want to type out the package's whole name every time you use a static method or if you are encountering any issues with the class in general it might be required for you to [import](/AdvancedFunctions/Import/) the class:  
`import mods.contenttweaker.ResourceLocation`

## ZenMethods

### 静态方法：创建

静态方法是指包件本身需要使用的方法，而不是本实例的任何特定目标。  
您可以使用此方法创建一个新的 CTResourceLocation 实例：

```zenscript
var 实例 = mods.contenttweeper.ResourceLocation.create("contenttweiner:item/myItem");
```

### ZenGetters

ZenGetters被调用在对象上，而不是在包本身上

```zenscript
print(myLocation.domain);
```

| ZenGetter | 类型     |
| --------- | ------ |
| 域         | string |
| 路径        | string |
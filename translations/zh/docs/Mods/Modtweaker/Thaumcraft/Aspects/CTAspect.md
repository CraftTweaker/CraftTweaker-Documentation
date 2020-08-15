# CTAspolt

CTAspect是一个 [Aspectt 堆栈的](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/)的基础，就像一个 [IItemDefinition](/Vanilla/Items/IItemDefinition/) 作为一个 [IItemStack](/Vanilla/Items/IItemStack/) 的基础。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 thaumcraft.aspect.Clavis;`

## 正在获取此对象

您可以从 [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/) 对象中检索到一个 CTAPotspot对象：

```zenscript
val aspect = <aspect:ignis>.internal；
```

## ZenGetters 和 ZenSettters

| 名称           | isGetter | isSetter | 返回值类型 |
| ------------ | -------- | -------- | ----- |
| 聊天Colo**u**r | ✔        | ✔        | 字符串   |
| 名称           | ✔        |          | 字符串   |
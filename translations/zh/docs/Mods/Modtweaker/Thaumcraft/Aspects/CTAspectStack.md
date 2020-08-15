# CTAspectStack

CTAspectStack是一个 [CTaprospect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) 与显示堆栈将生成多少个宽高的积分。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 thaumcraft.aspect.ctspack；`

## 正在获取此对象

您可以从 [CTAspectStack Backet Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/) 对象中检索一个 CTAspectStack 对象：

```zenscript
val aspect = <aspect:ignis>;
```

## ZenGetters

| 名称   | 类型                                                        |
| ---- | --------------------------------------------------------- |
| 金额   | int                                                       |
| 内部设置 | [CTAspolt](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## 设置金额

```zenscript
//他们也这样做，两者都返回了一个新的 CTapertStack
val aspect = <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10)；
```
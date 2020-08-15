# 材料生成器

如果你想要构建一个 [材料](/Mods/ContentTweaker/Materials/Materials/Material/)，你需要一个材料生成器！  
这个硬音效不好，问吗？

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入mods.contenttweiner.MaterialBuilder；`

## 正在获取此对象

您可以使用 [材料系统包](/Mods/ContentTweaker/Materials/MaterialSystem/) 检索一个新的、清晰的构建器：

```zenscript
var mBuilder = mods.contenttweiner.MaterialSystem.getMaterialBuilder();
```

## 设置材料属性

您可以设置这些属性

| ZenMethod（ZenMethod）    | 参数                                                               |
| ----------------------- | ---------------------------------------------------------------- |
| 设置名称(名称)                | 字符串名称                                                            |
| setColor(color)         | 整数颜色                                                             |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | 布尔型哈斯特效                                                          |

所有这些方法都有两件事：第一，它们改变了建筑商的财产，第二，它们归还了经过修改的建筑商。  
您可以在下面的示例脚本中看到这意味着什么。

## 实际构建材料

在你可以构建你的材料之前，你需要构建它：

```zenscript
mBuilder.build();
```

这返回一个 [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/) 对象。

## 示例脚本

```zenscript
Import mods.contentTweeper.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urupbuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build(); build();
```
# 部件生成器

如果你想要构建一个 [部件](/Mods/ContentTweaker/Materials/Parts/Part/), 你将需要一个零件生成器！  
这个声音不是硬的，是吗？

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.Partner Builder；`

## 正在获取此对象

您可以使用 [材料系统包](/Mods/ContentTweaker/Materials/MaterialSystem/) 检索一个新的、清晰的构建器：

```zenscript
var pBuilder = mods.contenttweeper.MaterialSystem.getPartner Builder();
```

## 设置零件属性

您可以设置这些属性

| ZenMethod（ZenMethod）          | 参数                                                                  |
| ----------------------------- | ------------------------------------------------------------------- |
| setHasOverlay(hasOverlay)     | boolean hasOverlay                                                  |
| 设置名称(名称)                      | 字符串名称                                                               |
| setPartType(partType)         | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partType |
| setOreDictName(prefix)        | 字符串前缀                                                               |
| setAdditionalOreDictNames(前缀) | 字符串... prefixes                                                     |

所有这些方法都有两件事：第一，它们改变了建筑商的财产，第二，它们归还了经过修改的建筑商。  
您可以在下面的示例脚本中看到这意味着什么。

## 实际构建材料

在你可以构建你的材料之前，你需要构建它：

```zenscript
Builder.build();
```

这返回 [部分](/Mods/ContentTweaker/Materials/Parts/Part/) 对象。

## 示例脚本

```zenscript
var pBuilder = mods.contenttweeper.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item");
var denseGearPart = pBuilder.build();

var denseIngotogotPart = mods.contentiner.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contentbuilder.MaterialSystem.getPartType("item").setOreDictName("supergot").build();
```

## 值得注意的信息

### 本地化材料

您用您的新配件创建的项目一般将被命名为 `contenttweiner.part 。 艺术名`  
如果你想要你的项目包含材料名称，你需要本地化它。 最好是在 CoT's 语言文件中，这些文件可以在 `Resources/contenttweiler/lang`找到。  
替代您写的材料名称 `%s`所以命名上面创建的密度用具的人看起来就像这样：

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s
    

### 添加纹理

你用你的新配件创建的物品将会对你有点了解。  
如果你想要你的配件有一个特定的图标，你需要添加一个 `配件名称。 ng` 文件到 `Resources/contenttweiler/textures/items/items`  
因此，给一个密集的纹理需要我们添加一个名为 `gear_dense的文件。 ng` 到那个文件夹。
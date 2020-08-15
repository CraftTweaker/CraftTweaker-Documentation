# 走道

## 安装后

首先，在开始创建方块之前, 建议你至少一次运行Minecraft, 安装 ContentTinfinder。 这将允许ContentTinser创建它所需要的资源文件夹。

## 重要文件夹

ContentTginer 应该在您的Minecraft目录中创建一个额外的文件夹：“resources”。 资源文件夹将是 所有模型、文本和语言文件都会被找到的地方。 稍后将解释此文件夹中的更多信息。 "脚本" 由 CraftTsinter 添加的文件夹是你应该放置所有 ContentTinfall 脚本的地方，然而ContentTinfall 脚本应该以 开头。 ```#loader contenttweaker``` 在文件的顶部。

## 第一个块

因此，对于内容调节器内容如何工作的最佳例子。 我会向您展示您将要创建的 基本内容块之一，这是一个块。 还有其他内容可以创建，但我将不会将它们包括在这个 步行中。 首先，这里是我将用作示例的模块的脚本。 在方块页面可以找到这些方法的说明 。

```zenscript
#loader contenttfinfinder

import mods.contenttweeper.VanillaFactory;
import mods.contenttweeper.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0)；
antiIceBlock.setBlockResistance(5.0)；
antiIceBlock.setToolClass("pickaxe")；
antiIceBlock.setToolLevel(0)；
antiIceBlock.setBlockSoundType(<soundtype:snow>)；
antiIceBlock.setSlipperiness(0.3)；
antiIceBlock.register()；
```

这将创建一个像Minecraft的冰块一样的方块。 您将想要将此脚本放入 的“脚本”文件夹，遵循与 CraftTweiler 脚本中相同的规则。

## 资源

您也需要拿一个. ng 文件并将其放入“resources/contenttweiler/textures/blocks”(此文件夹应为您创建 如果您已经运行 ContentTinflow 文件的名称应该与您在 createBlock中的名称相匹配。 在这种情况下，它是“anti_ice”。 如果你计划使用默认的方形形状与方块， ContentTinflow将生成正常运行所需的模型jsons。

此部分的另一个部分将是语言文件。 ContentTinflow将已经生成了 en_us.lang 文件，你 将需要一行看起来像是 `tile.contenttinstrer。<block_name>.name=Block name` 或在我们的情况下，反冰箱 将是 `tile.contenttweiner.anti_ice.name=Anti Ice` 使用灯具和材质均存档。 你应该能够加载 游戏，看到你的方块将有一个模型、纹理和名称。
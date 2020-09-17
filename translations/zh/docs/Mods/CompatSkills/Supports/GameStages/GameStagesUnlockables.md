# 阶段解锁项

## 可解锁

GameStages支持的这一部分将侧重于后面的表格。 解锁游戏阶段的Aka "虚拟特性"。

## 资源信息：

当创建一个新的虚拟特性时，你会注意到一些东西丢失：

- 未本地化名称
- 未本地化描述
- 没有图标

这是因为需要资源。 在目前阶段，Compatskill的技能并不能提供本能提供这些知识的能力。 围绕这个问题有几种方式：

- 使用 BASE 与它自己的资源加载器 (仅在 ContentTinfinder 因为BASE 如何工作而存在时才能工作)
- 使用Lumien的 ResourceLoader

本地化正在向前发展。

    assets/compatskills/lang/en_us.lang
    
    en_us.lang = 英语翻译
    

但特性图标的纹理路径如下：

    assets/compatskills/textures/unlockables/name.png
    
    所以如果名称为“banana”，路径将如下所示：
    
    assets/compatskills/textures/unlockables/banana.png
    

### 语法：

    空白示例：
    mods.compatskills.GameStageunlockable.addGameStageUnlockable(String gamestage, String name, inter x, int y, String skillnume, int costs, @Opinion String... 默认要求;
    
    工作示例:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, "reskillable:collection", 3, "stage|test");
    mods.compatskills.GameStageUnlockable dddGameStageUnlockable("b", "b", 0, 1, "reskillable:collection", 3, "adv|minecraft:harmry/plant_seed");
    mods.compatskills.GameStageunlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:greating", 3, "trait|compatskills:b");
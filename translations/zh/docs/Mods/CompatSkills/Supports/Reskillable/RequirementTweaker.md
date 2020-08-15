# 需求调低

## PSA：

从1.2.0开始到现在，正在积极开发Rekkilable，以改进可重命名和竞争技能锁定系统的内部。 这是为了使今后能够建立更强有力的锁机制。

## 需要锁定：

目前主要的 CrT 支持是要求锁定。 这也可以通过配置系统来实现。 However the Config System does **NOT** support NBT!

### 语法：

    // 空白示例：
    mods.compatskills.Requirement.addRequirement(ItemStack项目，字符串... 已锁定)
    
    工作示例：
    
    // 添加钻石比克轴的锁，带有Wildcard 元数据
    mods.compattime。 equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // 添加一个 NBT Lock for Efficiency 5
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // 添加一个 NBT Lock for Silk Touch
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // 添加一个 NBT 锁来解开3
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7";
    

将3个附魔锁合并为单个锁的示例：

![非常棒的锁](https://i.imgur.com/gCfETAh.png)
# 条件調整

## PSA:

1.2.0以降では、ReskillableやCompatSkillのロックシステムの内部改善のために、Reskillableが積極的に開発されています。 これは、将来的により強力なロックメカニズムを可能にするための努力です。

## 条件ロック:

現在、主なCrTサポートは要件ロックです。 これは設定システムを介しても行うことができます。 しかし、設定システムは **** NBTをサポートしていません!

### 構文

    // Blank Example:
    mods.compatskills.Requirement.addRequirement(IItemStack item, String... locked)
    
    Working Examples:
    
    // Adds a lock for the Diamond Pickaxe with a Wildcard Metadata
    mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // Adds a NBT Lock for Efficiency 5
    mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Adds a NBT Lock for Silk Touch
    mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Adds a NBT Lock for Unbreaking 3
    mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

3つのエンチャントロックを1つのロックにまとめた例:

![素晴らしいロック](https://i.imgur.com/gCfETAh.png)
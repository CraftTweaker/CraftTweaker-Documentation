# 血魔法

**此支持是 WIP** **如果出现了某些故障，请在问题跟踪器上打开一个问题！** [问题跟踪链接](https://github.com/Coders-After-Dark/CompatSkills/issues)

## 绑定：

如果玩家不符合要求，这将取消在血魔法中绑定该特定物品的物品。

### 语法：

    空白示例：
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack, String... 需要);
    
    测试示例:
    mods.compatskills.Bindhandler.addBindLock("无法告诉的暗色能量在你周围然后再边", <bloodmagic:blood_orb>.withTag({orb: "bolmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:harmry/plant_seed");
    

## 仪式：

如果玩家不符合要求，这将取消仪式的激活。

### 语法：

    空白示例：
    mods.compatskills.RitualHandler.addRitualLock(错误消息，字符串仪式，字符串... requirements)
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
# 仪式支持

## 仪式：

如果仪式活动没有满足特定要求，这将取消仪式的激活。

### 命令：

目前有一个游戏中的命令来倾倒所有仪式字符串供仪式处理者使用。 命令为：/ct 仪式Dump ，它会将所有仪式字符串输出到"CraftTweaker.log"。

### 前1.4.0：

#### 语法：

    空白示例：
    mods.compatskills.RitualHandler.addRitualLock(错误消息，字符串仪式，字符串... requirements)
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### 1.4.0后：

截至Compatskills 1.4.0，已经添加了一些新的 ZenMethods，并且对现有语法进行了一些修改。 我们还解决了一个问题，使仪式支持和约束支持无法正常工作！

#### 语法：

    空白示例：
    mods.compatskills.RitualHandler.addRitualLock(仪式，字符串... 需要);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... 要求);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... 要求);
    
    测试示例:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compats.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### 错误消息

和绑定支持一样，错误信息已被移动到可本地化的字符串，而不是CrT 方法中的字符串。 这将使资源包作者能够本地化并更改字符串，因为他们喜欢这么容易一些。

    compatskills.blemmagic.ritualError=当仪式激活时，你不会取得预期的结果
    

其他一些更改，例如默认错误消息现在显示为对方状态聊天消息的一部分。 这意味着消息只显示给玩家，而不是在聊天中打印，让每个人看到。 这也意味着它现在将与聊天要求一起显示。 这使得玩家更容易识别他们在锁上的遗漏。
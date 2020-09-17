# ProjectE

## EMC-锁

截止1.5.0 Compatter技能支持EMC 锁定物品。

## 注意事项

截至1.9.0 EMC 锁已被修改：

    修改后的项目E支持锁定传输学习和冷凝器倍增。
    语法与 mods.compatskills.EMCLock.addEMCLock(int em, String... (c) 《关于消耗臭氧层物质的蒙特利尔议定书》未予管制的物质的蒙特利尔议定书
    玩家将能够使用不符合emc 锁定但无法学习或复制该项的物品。 现在学习和重复也要求玩家满足项目上的任何要求。
    注意：要将项目放入转化表中，您仍将获得emc ，但将无法将项目退出。
    

### 语法：

    // 空白示例：
    mods.compatskills.EMCLock.addEMCLock(int em, String... 已锁定)
    
    // 示例：
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")
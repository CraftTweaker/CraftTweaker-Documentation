# 技能隐藏/可见性锁定

此锁定允许您隐藏技能，直到玩家满足查看技能的要求。 这有一些有限的使用案例，例如在自定义包中添加“类”技能时，你不想看到“工程师”的人看到或能够看到“Mage”技能页面。

## 语法：

    空白示例：
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSill Skill, String... 默认要求);
    
    工作示例:
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");
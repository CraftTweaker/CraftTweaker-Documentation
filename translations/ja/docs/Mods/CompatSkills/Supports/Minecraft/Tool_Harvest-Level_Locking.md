# Tool Harvest-Level Locking

## Feature:

This lock adds the ability for pack authors to lock Tools in general or specific tool "types" behind their harvest level. This means that you can lock down all pickaxes with a harvest level of "3" behind a set of requirements. Or in general all tools with a harvest level of 3 behind a set of requirements!

## Syntax:

    mods.compatskills.HarvestLock.addToolLevelLock(int level, String... requirements);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... requirements);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("pickaxe", 3, "dim|1");
# ProjectE

## EMC-Locks

As of 1.5.0 CompatSkills supports EMC Locks for items.

## NOTICE

As of 1.9.0 EMC Locks has been modified:

    Modified ProjectE support to lock transmutation learning and condenser multiplication.
    The syntax is the same as before mods.compatskills.EMCLock.addEMCLock(int emc, String... requirements);
    Players will be able to use items that do not meet the emc lock but will not be able to learn or duplicate that item. Learning and duplication now also requires the player to meet any requirements the item has on it.
    Note: For putting items in the transmutation table you will still gain the emc but will not be able to get the item back out.
    

### Syntax:

    // Blank Example:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... locked)
    
    // Example:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")
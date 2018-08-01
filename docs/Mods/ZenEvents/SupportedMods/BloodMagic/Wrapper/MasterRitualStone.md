# MasterRitualStone

A master ritual stone is where all magic that flows through a [ritual](/Mods/ZenEvents/SupportedMods/BloodMagic/Wrapper/Ritual/) is centered.  
As such you are able to receive some information on your ritual from them.

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.bloodmagic.MasterRitualStone;`

## Getting such an object
You can get such an object from the [Ritual Events](/Mods/ZenEvents/SupportedMods/BloodMagic/Events/RitualEvent/)

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name | Type                                    |
|----------------|----------------|-----------------------------------------|
| cooldown       | cooldown       | int                                     |
|                | active         | bool                                    |
| areTanksEmpty  |                | bool                                    |
| runningTime    |                | int                                     |
| world          |                | [IWorld](/Vanilla/World/IWorld/)         |
| blockPos       |                | [IBlockPos](/Vanilla/World/IBlockPos/)   |
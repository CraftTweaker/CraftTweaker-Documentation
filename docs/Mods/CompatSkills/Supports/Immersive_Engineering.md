# Immersive Engineering

## Credits:
Credits goes out to @Skysom for helping guide me through this and for allowing me to rework some of his code from MultiblockStages!


## Explaination:
Immersive Engineering-Support currently consists of:
- A Command for dumping the string name of all IE Multiblocks.
	- Command is: /ct ieMultiBlocks
- Multiblock Gating using a Crt-based Syntax.


### Syntax:
```
Blank Example:
mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);

Working Example:
mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "I'm afraid this is just too complex for an idiot like you!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
```
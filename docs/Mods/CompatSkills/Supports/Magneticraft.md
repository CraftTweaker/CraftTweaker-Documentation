# Immersive Engineering

## Explaination:
Magneticraft Support currently consists of:
- A Command for dumping the string name of all Magneticraft Multiblocks.
	- Command is: /ct magMultiBlocks
- Multiblock Gating using a Crt-based Syntax.


### Syntax:
```
Blank Example:
mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);

Working Example:
mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "I'm afraid this is just too complex for an idiot like you!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");
```
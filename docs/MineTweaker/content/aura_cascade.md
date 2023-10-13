# Aura Cascade

## Handlers Supported

The following handlers are supported:

* Vortex Infuser / Pylon

Each of these handlers can have recipes added or removed:

```zenscript

//Pylon
//OutputStack, AuraInput, InputStack, 
mods.auraCascade.Pylon.addRecipe(<minecraft:diamond>, <aura:RED_AURA>*50, <minecraft:dirt>);
//OutputStack, AuraInput1, InputStack1, AuraInput2, InputStack2, AuraStack3, InputStack3, AuraStack4, InputStack4
mods.auraCascade.Pylon.addRecipe(<minecraft:diamond>, <aura:GREEN_AURA*1>, <minecraft:dirt>, <aura:RED_AURA*30>, <minecraft:dirt>, <aura:BLUE_AURA*90>, <minecraft:dirt>, <aura:WHITE_AURA*1500>, <minecraft:dirt>;
//OutputStack
mods.auraCascade.Pylon.removeRecipe(<minecraft:diamond>);
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/minetweaker auras - Outputs a list of aura types
```
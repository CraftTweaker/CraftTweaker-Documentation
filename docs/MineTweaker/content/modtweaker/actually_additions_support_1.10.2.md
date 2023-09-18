# Actually Additions Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Atomic Reconstructor
* Coffee Maker
* Compost
* Crusher
* Empowerer
Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Atomic Reconstructor
//InputStack, OutputStack, Energy
mods.actuallyadditions.AtomicReconstructor.addRecipe(<minecraft:coal:1>, <minecraft:fire_charge>, 1000);
//OutputStack
mods.actuallyadditions.AtomicReconstructor.remove(<minecraft:coal>);

//Coffee Maker
//InputStack, Amplifier, EffectArray, DurationArray
mods.actuallyadditions.Coffee.addRecipe(<minecraft:netherrack>, 10, ["swiftness"], [1]);
//InputStack
mods.actuallyadditions.Coffee.remove(<minecraft:sugar>);

//Compost
//InputStack, InputDisplay, OutputStack, OutputDisplay
mods.actuallyadditions.Compost.addRecipe(<minecraft:sugar>, <minecraft:snow>, <minecraft:dirt>, <minecraft:dirt>);
//InputStack
mods.actuallyadditions.Compost.remove(<actuallyadditions:itemCanolaSeed>);

//Crusher
//InputStack, OutputStack, @Optional Output2Stack, @Optional Output2Chance
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, <minecraft:stone>, 50);
//InputStack
mods.actuallyadditions.Crusher.remove(<minecraft:gold_ore>);

//Empowerer
//InputStack, OutputStack, Modifier1, Modifier2, Modifier3, Modifier4, EnergyPerStand, TimeInTicks)
mods.actuallyadditions.Empowerer.addRecipe(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100);
//InputStack, OutputStack
mods.actuallyadditions.Empowerer.remove(<actuallyadditions:itemCrystal:4>, <actuallyadditions:itemCrystalEmpowered:4>);
```
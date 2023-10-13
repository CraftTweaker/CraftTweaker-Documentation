# Actually Additions Support 1.11.2

## Handlers Supported

The following handlers are supported:

* Atomic Reconstructor
* Ball of Fur
* Coffee Maker
* Compost
* Crusher
* Empowerer
* Treasure Chest

Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Atomic Reconstructor
//OutputStack, InputStack, Energy
mods.actuallyadditions.AtomicReconstructor.addRecipe(<minecraft:fire_charge>, <minecraft:coal:1>, 1000);
//OutputStack
mods.actuallyadditions.AtomicReconstructor.removeRecipe(<minecraft:coal>);

//Ball of Fur
//OutputStack, Chance
mods.actuallyadditions.BallOfFur.addReturn(<minecraft:string>, <minecraft:coal:1>, 5);
//OutputStack
mods.actuallyadditions.BallOfFur.removeReturn(<minecraft:coal>);

//Coffee Maker
//InputStack, EffectArray, DurationArray, Amplifier
mods.actuallyadditions.Coffee.addRecipe(<minecraft:netherrack>, ["swiftness"], [1], 10);
//InputStack
mods.actuallyadditions.Coffee.removeRecipe(<minecraft:sugar>);

//Compost
//OutputStack, OutputDisplay, InputStack, InputDisplay
mods.actuallyadditions.Compost.addRecipe(<minecraft:dirt>, <minecraft:dirt>, <minecraft:sugar>, <minecraft:snow>);
//InputStack
mods.actuallyadditions.Compost.removeRecipe(<actuallyadditions:itemCanolaSeed>);

//Crusher
//OutputStack, InputStack, @Optional Output2Stack, @Optional Output2Chance
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ingot>, <minecraft:iron_ore>, <minecraft:stone>, 50);
//InputStack
mods.actuallyadditions.Crusher.removeRecipe(<minecraft:gold_ore>);

//Empowerer
//OutputStack, InputStack, Modifier1, Modifier2, Modifier3, Modifier4, EnergyPerStand, TimeInTicks, @Optional ParticleColourArray
mods.actuallyadditions.Empowerer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100, [0.5, 0.3, 0.2]);
//OutputStack
mods.actuallyadditions.Empowerer.removeRecipe(<actuallyadditions:itemCrystalEmpowered:4>);

//Treasure Chest
//LootStack, Chance, MinAmount, MaxAmount
mods.actuallyadditions.TreasureChest.addLoot(<minecraft:dirt>, 50, 1, 64);
//LootStack
mods.actuallyadditions.TreasureChest.removeLoot(<minecraft:gold>);
```
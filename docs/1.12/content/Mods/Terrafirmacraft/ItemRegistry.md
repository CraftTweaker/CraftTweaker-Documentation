# Item Registry

## Package
```zenscript
// Imports ItemRegistry methods into your script
import mods.terrafirmacraft.ItemRegistry;
```

## Register Item Size
- Register item size and weight. This changes how much a stack can hold.
- Sizes [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Weights [VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient input, String size, String weight);
```

## Register Item Heat
- Register item heat capability and if this item is forgeable (eg: can be used in anvil).
- Heat capacity determines how fast an item cools down/heat up. Wrought Iron is 0.35.
- Melt temperature is at which temperature the item is melt. Wrought Iron is 1535 Brilliant White while Bronze is 950 Orange. For a complete reference, check [Heating Temperatures](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(IIngredient input, float heatCapacity, float meltTemp, bool forgeable);
```

## Register Item Metal
- Register item as a metal item. Note that this automatically adds heating and forging capability. If canMelt is false this item won't bear the output directly (like iron ore needs bloomery/blast furnace)
- Registered metal ingot items aren't automatically registered as a valid input for tools (eg: Steel ingot from other mods registered by registerMetalItem method won't be automatically workable to TFC steel pickaxe head)
```zenscript
ItemRegistry.registerItemMetal(IIngredient input, String metal, int units, bool canMelt);
```

## Register Food
- Register item food stats (Does not work on TFC Foods), This takes priority over existing values. Setting Decay to 0 stops decay from happening.
```zenscript
ItemRegistry.registerFood(IIngredient input, int hunger, float water, float saturation, float decay, float grain, float veg, float fruit, float meat, float dairy);
```

## Register Armor
- Register armor stats
```zenscript
ItemRegistry.registerArmor(IIngredient input, float crushingModifier, float piercingModifier, float slashingModifier);
```

## Register Fuel
- Register item as a fuel for fire pit, forge or bloomery
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, float temperature, bool forgeFuel, bool bloomeryFuel);
```

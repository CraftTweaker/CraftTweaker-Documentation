# ModTweaker

ModTweaker is an addon for MineTweaker 3. Minetweaker lets you adjust recipes, remove them entirely, or add new recipes. While it has decent mod support, there are many mods that use custom crafting handlers that are not supported natively. ModTweaker plans to provide additional support for as many of these mods over time as possible.

## Contents
* Download
* General Usage
* Difference between IItemStack and IIngredient
* Currently Supported Mods 1.11.2
* Currently Supported Mods 1.10.2
* Currently Supported Mods 1.7.10

### Download
You can find ModTweaker on curseforge: [ModTweaker Download](https://minecraft.curseforge.com/projects/modtweaker)

### General Usage
In general, for all of the supported mods, you can either import them or call them directly.

Throughout the tutorial examples, the latter will be used just to keep everything concise.

Example with the [Botania](/Botania) Apothecary recipes:
```zenscript
import mods.botania.Apothecary;

Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalRed>, <ore:petalRed>]);
```
or:
```zenscript
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalRed>, <ore:petalRed>]);
```

### Difference between IItemStack and IIngredient
_IItemstack_ is the standard type for representing an item in a recipe. It can hold an item with metadata/damage value (metadata), NBT data and the stacksize. IIngredient is a more advanced type which can represent all of the above and Oredict entries, input conditions and item transformers.

However, most of the crafting mechanisms supported by Modtweaker don't support the latter but only _IItemStack_. Look at documentation of the specific handlers to see what they support. (The Method signature -which parameters and parameter types are used- is written above the example.)

If a ZenScript method for adding recipes, accepts IIngredient, most of the the handlers only can use the additional Oredict support not input conditions or item transformers. If there is additional support beyond that, it will be explicit marked.

If a ZenScript method for removing recipes accepts IIngredient, most of the the handlers can use all the features of IIngredient.

The support for mods is not finalized. There will be additional support added where applicable.

### Currently Supported Mods 1.11.2
* [Actually Additions](/modtweaker/actually_additions_support_1.11.2)
* [Chisel](/modtweaker/chisel_support_1.11.2)
* [Forestry](/modtweaker/forestry_support_1.11.2)
* [Refined Storage](/modtweaker/refined_storage_support_1.11.2)

### Currently Supported Mods 1.10.2
* [Actually Additions](/modtweaker/actually_additions_support_1.10.2)
* [Blood Magic](/modtweaker/blood_magic_support_1.10.2)
* [Botania](/modtweaker/botania_support_1.10.2)
* [Chisel](/modtweaker/chisel_support_1.10.2)
* [Embers](/modtweaker/embers_support_1.10.2)
* [Extra Utilities](/modtweaker/extra_utilities_support_1.10.2)
* [Forestry](/modtweaker/forestry_support_1.10.2)
* [Random Things](/modtweaker/random_things_support_1.10.2)
* [Refined Storage](/modtweaker/refined_storage_support_1.10.2)
* [Survivalist](/modtweaker/survivalist_support_1.10.2)
* [Tinker's Construct](/modtweaker/tconstruct_support_1.10.2)

### Currently Supported Mods 1.7.10
* [Applied Energistics 2](/modtweaker/applied_energistics_2_support)
* [Aura Cascade](/aura_cascade)
* [Botania](/modtweaker/botania_support)
* [Chisel 2](/modtweaker/chisel_2_support)
* [Ex Nihilo](/modtweaker/ex_nihilo_support)
* [Extended Crafting](/modtweaker/extended_crafting_support)
* [Extra Utilities](/modtweaker/extra_utilities_support)
* [Factorization](/modtweaker/factorization_support)
* [Forestry](/modtweaker/forestry_support)
* [Mariculture](/modtweaker/mariculture_support)
* [Mekanism](/modtweaker/mekanism_support)
* [Metallurgy 4](/modtweaker/metallurgy_4_support)
* [PneumaticCraft](/modtweaker/pneumaticcraft_support)
* [Railcraft](/modtweaker/railcraft_support)
* [Thaumcraft 4](/modtweaker/thaumcraft_4_support)
* [Thermal Expansion](/modtweaker/thermal_expansion_support)
* [Tinker's Construct](/modtweaker/tconstruct_support)
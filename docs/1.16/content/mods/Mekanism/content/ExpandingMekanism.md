# Expanding Mekanism

## "MekaTweaker"

Mekanism adds it's fair share of chemicals, which you must have encoutered while playing with it:
Gases, Infuse Types, Pigments, and Slurries.

In the old age of 1.12.2, adding custom gases was only a thing MekaTweaker, an addon mod could do.
However, as of Mekanism V10.1, Mekanism now has native support for adding custom chemicals through CraftTweaker and it's own [CraftTweaker loader](/zencode/Preprocessors/LoaderPreprocessor).

The name of this custom loader is: `mekanismcontent`, don't forget it at the top of the file!

### Basic Usage

The most basic functions you have access to can be found in the [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder) class.

```zenscript
#loader mekanismcontent

import mods.mekanism.content.builder.GasBuilder;
import mods.mekanism.content.builder.InfuseTypeBuilder;
import mods.mekanism.content.builder.PigmentBuilder;
import mods.mekanism.content.builder.SlurryBuilder;

/*
 * Adds five very simple chemicals to show a very basic usage of the content creation capabilities provided. Custom content needs to be created in the mekanismcontent loader and requires a full game restart to take effect as well as have names defined in a lang file. One thing to note is that these examples are extremely basic and there is quite a bit more that is possible with this system including using custom textures and adding various attributes.
 * 1) Creates an example Gas that is colored magenta.
 * 2) Creates an example Infuse Type that is colored green.
 * 3) Creates an example Pigment that is colored yellowish green.
 * 4) Creates an example Dirty Slurry that is for a yellow ore.
 * 5) Creates an example Clean Slurry that is for the same yellow ore.
*/

GasBuilder.builder().color(0xDF03FC).build("example_gas");
InfuseTypeBuilder.builder().color(0x3FC0B).build("example_infuse_type");
PigmentBuilder.builder().color(0xCAFC03).build("example_pigment");
SlurryBuilder.dirty().color(0xF0FC03).build("example_dirty_slurry");
SlurryBuilder.clean().color(0xF0FC03).build("example_clean_slurry");

```

### Builder Lists

The list of builders you can use to create custom Mekanism content is the following:

- [GasBuilder](/mods/Mekanism/content/builder/GasBuilder)
- [InfuseTypeBuilder](/mods/Mekanism/content/builder/InfuseTypeBuilder)
- [PigmentBuilder](/mods/Mekanism/content/builder/PigmentBuilder)
- [RobitSkinBuilder](/mods/Mekanism/content/builder/RobitSkinBuilder)
- [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

It is worth knowing that all Builders that refer to a Chemical extend [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder).

### Attribute Lists

The list of Attributes you can use right now in your custom Mekanism chemicals is the following:

- Gas Attributes:
  - [CoolantAttribute](/mods/Mekanism/content/attribute/gas/CoolantAttribute)
  - [FuelAttribute](/mods/Mekanism/content/attribute/gas/FuelAttribute)
  - [RadiationAttribute](/mods/Mekanism/content/attribute/gas/RadiationAttribute)
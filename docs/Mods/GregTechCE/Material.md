# Material

## Calling the package

The `mods.gregtech.material` package contains all classes you will need to deal with materials.

## Material Object

An object of `mods.gregtech.material.Material` represents a material in GregTech, with some useful members you can deal with.

Properties:

| Name               | Type                         | Description                                      |
| ------------------ | ---------------------------- | ------------------------------------------------ |
| color              | int                          | Color of material in RGB format                  |
| chemicalFormula    | String                       | Chemical formula of this material                |
| iconSet            | MaterialIconSet              | Icon set for this material meta-items generation |
| components         | ImmutableList<MaterialStack> | List of this material component                  |
| generationFlagsRaw | long                         | Generation flags of this material (See MatFlags) |
| element            | Element                      | Element of this material consist of              |

Getters:

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| radioactive     | bool   | True if this material is radioactive |
| protons         | long   |                                      |
| neutrons        | long   |                                      |
| mass            | long   |                                      |
| density         | long   |                                      |
| camelCaseString | String |                                      |
| unlocalizedName | String |                                      |
| localizedName   | String | Client-side only                     |
| name            | String | Name in the Material registry        |

Methods:

| Name (Parameters)             | Description           |
| ----------------------------- | --------------------- |
| addFlags(String... flagNames) | Add generation flags  |
| hasFlag(String flagName)      | Has a generation flag |

`MaterialStack` can be created by `material * number`, same as [Amount of Ingredient](/Vanilla/Variable_Types/IIngredient.md) or FluidStack.

### FluidMaterial

`FluidMaterial` is a material which contains fluid features. Its superclass is `Material` so all members in `Material` is still available.

Properties:

| Name             | Type | Description |
| ---------------- | ---- | ----------- |
| fluidTemperature | int  |             |

Getters:

| Name      | Type                                                       | Description           |
| --------- | ---------------------------------------------------------- | --------------------- |
| hasFluid  | bool                                                       |                       |
| hasPlasma | bool                                                       |                       |
| isGaseous | bool                                                       |                       |
| fluid     | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | material fluid        |
| plasma    | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | material plasma fluid |

### DustMaterial

`DustMaterial` is a material which contains dust features. Its superclass is `FluidMaterial` so all members in `FluidMaterial` is still available.

Properties:

| Name                | Type          | Description                                                                                                                                  |
| ------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier       | int           | Crushed ore output amount multiplier during maceration                                                                                       |
| byProductMultiplier | int           | Byproducts output amount multiplier during pulverization                                                                                     |
| smeltingMultiplier  | int           | Smelting item amount multiplier during vanilla item smelting                                                                                 |
| directSmelting      | SolidMaterial | Material to which smelting of this material ore will result                                                                                  |
| washedIn            | FluidMaterial | Material in which this material's ore should be washed to give additional output                                                             |
| separatedInto       | DustMaterial  | During electromagnetic separation, this material ore will be separated onto this material and material specified by this field               |
| burnTime            | int           | Burn time of this material when used as fuel in furnace smelting, Zero or negative value indicates that this material cannot be used as fuel |

Getters:

| Name          | Type                | Description                                         |
| ------------- | ------------------- | --------------------------------------------------- |
| oreByProducts | List<FluidMaterial> | List of ore by products                             |
| harvestLevel  | int                 | Tool level needed to harvest block of this material |

### SolidMaterial

`SolidMaterial` is a material which contains solid features. Its superclass is `DustMaterial` so all members in `DustMaterial` is still available.

Properties:

| Name           | Type          | Description                                                                                          |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial | Material specified here will be required as handle to make tool from this material                   |
| macerateInto   | DustMaterial  | Macerating any item of this material will result material specified in this field, default to itself |

Getters:

| Name             | Type                  | Description                                                                               |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| toolSpeed        | float                 | Speed of tools made from this material, default 1.0f                                      |
| toolDurability   | int                   | Durability of tools made from this material, 0 for materials that can't be used for tools |
| toolEnchantments | List<EnchantmentData> | Enchantment to be applied to tools made from this material                                |

### IngotMaterial

`IngotMaterial` is a mterial which contains ingot features. Its superclass is `SolidMaterial` so all members in `SolidMaterial` is still available.

Ingot materials can be used as wire, cable and fluid pipe. Those properties can be set by `setCableProperties(long voltage, int baseAmperage, int lossPerBlock)` and `setFluidPipeProperties(int throughput, int maxTemperature, boolean gasProof)`.

For example:

```java
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 loss/block
```

## Enchantment data

`gregtech.mods.EnchantmentData` can be found in `SolidMaterial#toolEnchantments`, they are an internal storage of a enchantment with levels.

They can be casted into `crafttweaker.enchantments.IEnchantmentDefinition` by calling `enchantment` getter, and level is available with `level` getter.

To add a enchantment for tools in `SolidMaterial`, simply calling `addToolEnchantment(IEnchantment enchantment)`, to add a CraftTweaker enchantment data type.

Example for a Fortune I material:

```java
var material = MaterialRegistry.get("iron"); // Modify iron material
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // Create a enchantment object and add it
```

## Material generation flags

These flags are applicable to materials.

| Name (case-insensitive)         | Description                                                                                                                                                                                                                                         |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DECOMPOSITION_BY_ELECTROLYZING  | Enables electrolyzer decomposition recipe generation                                                                                                                                                                                                |
| DECOMPOSITION_BY_CENTRIFUGING   | Enables centrifuge decomposition recipe generation                                                                                                                                                                                                  |
| BURNING                         | Add to material if it has constantly burning aura                                                                                                                                                                                                   |
| FLAMMABLE                       | Add to material if it is some kind of flammable                                                                                                                                                                                                     |
| EXPLOSIVE                       | Add to material if it is some kind of explosive                                                                                                                                                                                                     |
| NO_UNIFICATION                  | Add to material to disable it's unification fully                                                                                                                                                                                                   |
| NO_RECYCLING                    | Add to material if any of it's items cannot be recycled to get scrub                                                                                                                                                                                |
| DISABLE_DECOMPOSITION           | Disables decomposition recipe generation for this material and all materials that has it as component                                                                                                                                               |
| DECOMPOSITION_REQUIRES_HYDROGEN | Decomposition recipe requires hydrogen as additional input. Amount is equal to input amount                                                                                                                                                         |
| GENERATE_PLATE                  | Generate a plate for this material, If it's dust material, dust compressor recipe into plate will be generated, If it's metal material, bending machine recipes will be generated, If block is found, cutting machine recipe will be also generated |
| NO_WORKING                      | Add to material if it cannot be worked by any other means, than smashing or smelting. This is used for coated Materials.                                                                                                                            |
| NO_SMASHING                     | Add to material if it cannot be used for regular Metal working techniques since it is not possible to bend it.                                                                                                                                      |
| NO_SMELTING                     | Add to material if it's impossible to smelt it                                                                                                                                                                                                      |
| INDUCTION_SMELTING_LOW_OUTPUT   | Add to material if it is outputting less in an Induction Smelter.                                                                                                                                                                                   |
| SMELT_INTO_FLUID                | Add to material if it melts into fluid (and it will also generate fluid for this material)                                                                                                                                                          |
| EXCLUDE_BLOCK_CRAFTING_RECIPES  |                                                                                                                                                                                                                                                     |
| EXCLUDE_PLATE_COMPRESSOR_RECIPE |                                                                                                                                                                                                                                                     |
| CRYSTALLISABLE                  | If this material is crystallisable                                                                                                                                                                                                                  |
| GENERATE_LENSE                  |                                                                                                                                                                                                                                                     |
| HIGH_SIFTER_OUTPUT              |                                                                                                                                                                                                                                                     |
| GENERATE_FLUID_BLOCK            | Whenever system should generate fluid block for this fluid material                                                                                                                                                                                 |
| GENERATE_PLASMA                 | Add this flag to enable plasma generation for this material                                                                                                                                                                                         |
| STATE_GAS                       | Marks material state as gas                                                                                                                                                                                                                         |
| GENERATE_ROD                    |                                                                                                                                                                                                                                                     |
| GENERATE_GEAR                   |                                                                                                                                                                                                                                                     |
| GENERATE_LONG_ROD               |                                                                                                                                                                                                                                                     |
| MORTAR_GRINDABLE                | If this Material is grindable with a simple Mortar                                                                                                                                                                                                  |

## Material icon set

Icon sets are available in `mods.gregtech.material.MaterialIconSet`.

-   NONE
-   METALLIC
-   DULL
-   MAGNETIC
-   QUARTZ
-   DIAMOND
-   EMERALD
-   SHINY
-   SHARDS
-   ROUGH
-   FINE
-   SAND
-   FLINT
-   RUBY
-   LAPIS
-   POWDER
-   FLUID
-   GAS
-   LIGNITE
-   OPAL
-   GLASS
-   WOOD
-   LEAF
-   GEM_HORIZONTAL
-   GEM_VERTICAL
-   PAPER
-   NETHERSTAR

Getters are `name`.

Methods are `toString()`, and static method `getByName(String name)`.

## Material Registry

Material registry is a helper to get, list and create materials in the unification system.

You may import the class `mods.gregtech.material.MaterialRegistry`.

### Usage

```java
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Note that return type can be null if nothing was found
var material = MaterialRegistry.get(materialName);

// List all materials registered
var materialList = MaterialRegistry.getAllMaterials();

// Set toolDurability to 0 if ingot cannot be used as tool
// Note that an @Optional parameter can be left out, and it's replaced by default 0.
// Means Gem and Ingot material cannot be used as tool by default.
MaterialRegistry.createFluidMaterial(int metaItemSubId, String name, int color, String iconSet, @Optional MaterialStack[] materialComponents);

MaterialRegistry.createDustMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry.createGemMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry.createIngotMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### Example

```java
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial.addFlags(["GENERATE_ORE", "GENERATE_PLATE"]);
```

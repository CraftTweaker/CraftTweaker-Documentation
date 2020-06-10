# Builder

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.Builder;
```
## Information
The Builder, or Multiblock Builder, is used to define a custom [`Multiblock`](../Multiblock.md).

To get started, call [`#start(string, int)`](#builderstartstring-int).

## ZenMethods

### Static Methods
#### Builder#start(string, int)
-> Builder

Create a multiblock builder from a resource location.

 * **Parameters:**
   * `location` — The resource location of the multiblock.

     Used for getting the recipe map again.

     If no namespace is defined, it defaults to this mod's mod id.
   * `metaId` — The metadata the resulting multiblock will be registered as.
 * **Returns:** A multiblock builder instance, that should be used to set the properties of the multiblock.

### Instance Methods
#### Builder#withPattern(IBlockPattern)
-> Builder

Compulsory, set the pattern for the multiblock.

 * **Parameters:** `pattern` — An [`IBlockPattern`](../Interfaces/IBlockPattern.md) defining the multiblock's construction.
 * **Returns:** This builder, for convenience.

#### Builder#withRecipeMap(RecipeMap)
-> Builder

Compulsory, set the recipe map for the multiblock.

 * **Parameters:** `map` — The map to use.
 * **Returns:** This builder, for convenience.

#### Builder#withTexture(ICubeRenderer)
-> Builder

Set the texture for the multiblock. This will be used for the controller, and all the inputs/outputs when the structure forms.

If this is not defined, it will be defined as the most common block out of all designs. If there are no designs defined either, [`#build()`](#builderbuild) will fail.

 * **Parameters:** `texture` — The texture to use.
 * **Returns:** This builder, for convenience.

#### Builder#addDesign(IMultiblockShapeInfo...)
-> Builder

Add a design to be shown in JEI or structure previews. Can be called multiple times.

If none are defined, the multiblock won't show in JEI.

 * **Parameters:** `designs` — The designs to add and show in JEI.
 * **Returns:** This builder, for convenience.

#### Builder#build()
-> Multiblock

Construct the [`Multiblock`](../Multiblock.md) using the defined features.

Will fail if [`#withPattern(IBlockPattern)`](#builderwithpatterniblockpattern) or [`#withRecipeMap(RecipeMap)`](#builderwithrecipemaprecipemap) wasn't called, or if neither [`#withTexture(ICubeRenderer)`](#builderwithtextureicuberenderer) nor [`#addDesign(IMultiblockShapeInfo...)`](#builderadddesignimultiblockshapeinfo) was called.

 * **Returns:** The built [`Multiblock`](../Multiblock.md).

#### Builder#buildAndRegister()
-> Multiblock

Convenience method, equivalent to `build().register()`

[`#build()`](#builderbuild), [`Multiblock#register()`](../Multiblock.md#multiblockregister)

# ICubeRenderer

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.render.ICubeRenderer;
```
## Information
Used in [`Builder#withTexture(ICubeRenderer)`](docs/Mods/MultiblockTweaker/multiblocktweaker/crafttweaker/construction/Builder.md#builderwithtextureicuberenderer) to set the texture of the controller, and that of all the components, when the multiblock forms.

 * **See also:** Builder

## ZenMethods

### Static Methods
#### ICubeRenderer#nonSided(string)
-> ICubeRenderer

Get a non-sided [`ICubeRenderer`](/ICubeRenderer.md) (i.e. all sides have the same texture).

If the texture at the given location is not already used by something else, this must be registered in preinit. Use `#loader preinit` in a separate script and define it there first.

 * **Parameters:** `loc` — The resource location pointing to the texture to use.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) with all sides showing the given texture.

#### ICubeRenderer#fromBlock(IBlock)
-> ICubeRenderer

Get an [`ICubeRenderer`](/ICubeRenderer.md) from a block.

This will typically only work with blocks that have conventional models.

Equivalent to `block as ICubeRenderer`.

 * **Parameters:** `block` — The block whose textures should be used.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) textured the same as the given block.

#### ICubeRenderer#fromBlock(IItemStack)
-> ICubeRenderer

Get an [`ICubeRenderer`](/ICubeRenderer.md) from a block.

This will typically only work with blocks that have conventional models.

Equivalent to `stack as IBlock as ICubeRenderer`.

 * **Parameters:** `stack` — The [`IItemStack`](../../../Vanilla/Items/IItemStack.md) of block whose textures should be used.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) textured the same as the given block.

#### ICubeRenderer#fromState(IBlockState)
-> ICubeRenderer

Get an [`ICubeRenderer`](/ICubeRenderer.md) from a block state.

This will typically only work with blocks that have conventional models.

Equivalent to `state as ICubeRenderer`.

 * **Parameters:** `state` — The block state whose textures should be used.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) textured the same as the given block state.

#### ICubeRenderer#sided(Map\<IFacing,> map)
-> ICubeRenderer

Get a sided [`ICubeRenderer`](/ICubeRenderer.md) (i.e. different sides can have different textures).

`IFacing.up()` is the only mapping that is required, blanks will be filled in as such:

If DOWN is not defined, it will be mapped to UP. NORTH will be resolved as the first defined horizontal side in the order NORTH, EAST, SOUTH, WEST, otherwise UP. WEST, SOUTH and EAST will be mapped to NORTH if they are not defined yet.

If the texture at a given location is not already used by something else, it must be registered in preinit. Use `#loader preinit` in a separate script and define it there first.

 * **Parameters:** `map` — A mapping of sides to texture resource locations.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) with all sides showing the given texture.

#### ICubeRenderer#sided(string, string, string, string, string, string)
-> ICubeRenderer

Get a sided [`ICubeRenderer`](/ICubeRenderer.md) (i.e. different sides can have different textures).

`up` is the only mapping that is required, blanks will be filled in as such:

If DOWN is not defined, it will be mapped to UP. NORTH will be resolved as the first defined horizontal side in the order NORTH, EAST, SOUTH, WEST, otherwise UP. WEST, SOUTH and EAST will be mapped to NORTH if they are not defined yet.

If the texture at a given location is not already used by something else, it must be registered in preinit. Use `#loader preinit` in a separate script and define it there first.

 * **Parameters:**
   * `up` — The texture to use for the top face.
   * `north` — (Optional) The texture to use for the north face.
   * `east` — (Optional) The texture to use for the east face.
   * `south` — (Optional) The texture to use for the south face.
   * `west` — (Optional) The texture to use for the west face.
   * `down` — (Optional) The texture to use for the bottom face.
 * **Returns:** An [`ICubeRenderer`](/ICubeRenderer.md) with all sides showing the given texture.

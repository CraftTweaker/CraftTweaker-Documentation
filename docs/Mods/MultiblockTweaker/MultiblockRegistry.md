# MultiblockRegistry

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.MultiblockRegistry;
```
## Information
An alternative way to get a [`Multiblock`](Multiblock.md) from its metadata or ID.

## ZenMethods

### Static Methods
#### MultiblockRegistry#get(int)
-> Multiblock

Get a [`Multiblock`](Multiblock.md) by its metadata.

 * **Parameters:** `metaId` — The metadata of the multiblock controller.
 * **Returns:** The controller, if it was registered, or null.

#### MultiblockRegistry#get(string)
-> Multiblock

Get a [`Multiblock`](Multiblock.md) by its meta tile entity ID.

 * **Parameters:** `location` — The ID of the multiblock controller.
 * **Returns:** The controller, if it was registered, or null.

#### MultiblockRegistry#all()
-> List\<Multiblock>

 * **Returns:** All the registered [`Multiblock`](Multiblock.md)s.

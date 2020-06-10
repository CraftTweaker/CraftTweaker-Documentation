# Bracket Handlers

## Meta State Bracket Handler:
### Information
Get an [IBlockState](../../Vanilla/Blocks/IBlockState.md) by its resource location and metadata.
### Examples
```
// Example:
<metastate:resourcelocation:meta>

// Working Example:
<metastate:minecraft:dispenser:1>
```
## Multiblock Bracket Handler
### Information
Get a [Multiblock](Multiblock.md) by its resource location (Meta Tile Entity ID), or by its metadata.
### Examples
```
// Examples:
<multiblock:meta>
<multiblock:resourcelocation>

// Working* Examples:
<multiblock:3000>
<multiblock:multiblocktweaker:example_multiblock>
```

\* These examples will only work if you register a [Multiblock](Multiblock.md) under metadata `3000`,
or under the resource location `multiblocktweaker:example_multiblock`.

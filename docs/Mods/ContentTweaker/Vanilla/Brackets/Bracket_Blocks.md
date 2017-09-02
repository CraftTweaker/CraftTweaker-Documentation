# Block Bracket Handler

The Block Bracket Handler gives you access to the blocks in the game. It is only possible to get blocks registered in the game, so adding or removing mods may cause issues if you reference the mod's blocks in a Block Bracket Handler.

Entities are referenced in the Block handler this way:

```
<block:modID:blockName>

<block:minecraft:dirt>
```

If the block is found, this will return an IBlock Object.
Please refer to the [respective Wiki entry](../../../../Vanilla/Blocks/IBlock.md) for further information on what you can do with these.
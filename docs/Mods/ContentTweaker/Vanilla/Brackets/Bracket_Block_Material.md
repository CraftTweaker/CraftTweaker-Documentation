# Block Material Bracket Handler


The Block Material Bracket Handler gives you access to the Block Materials in the game.
Currently the only Block Materials supported are:

<details>
	<summary>Click to expand the Material list</summary>
	<ul>
		<li>Air</li>
		<li>Grass</li>
		<li>Ground</li>
		<li>Wood</li>
		<li>Rock</li>
		<li>Iron</li>
		<li>Anvil</li>
		<li>Water</li>
		<li>Lava</li>
		<li>Leaves</li>
		<li>Plants</li>
		<li>Vine</li>
		<li>Sponge</li>
		<li>Cloth</li>
		<li>Fire</li>
		<li>sand</li>
		<li>Circuits</li>
		<li>Carpet</li>
		<li>Glass</li>
		<li>Redstone_Light</li>
		<li>TNT</li>
		<li>Coral</li>
		<li>Ice</li>
		<li>Packed_Ice</li>
		<li>Crafted_Snow</li>
		<li>Cactus</li>
		<li>Clay</li>
		<li>Gourd</li>
		<li>Dragon_Egg</li>
		<li>Portal</li>
		<li>Cake</li>
		<li>Web</li>
	</ul>
</details>

Block Materials are referenced in the Material Bracket handler this way:

```
<blockmaterial:name>

<blockmaterial:wood>
```

If the Block Material is found, this will return an [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition) Object.  
# SoundType Bracket Handler


The SoundType Bracket Handler gives you access to the SoundTypes in the game.
Currently the only soundTypes supported are:

<details>
	<summary>Click to expand the type list</summary>
	<ul>
		<li>Wood</li>
		<li>Ground</li>
		<li>Plant</li>
		<li>Stone</li>
		<li>Metal</li>
		<li>Glass</li>
		<li>Cloth</li>
		<li>Sand</li>
		<li>Snow</li>
		<li>Ladder</li>
		<li>Anvil</li>
		<li>Slime</li>
	</ul>
</details>

SoundTypes are referenced in the Block handler this way:

```
<soundtype:name>

<soundtype:wood>
```

If the soundType is found, this will return an [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition) Object.  
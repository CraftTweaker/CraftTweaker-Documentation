# Material Part Bracket Handler

The Material Part Bracket Handler gives you access to the Material Parts in the game. It is only possible to get Material Parts registered in the game, so you need to be careful of the loading order of scripts.

Material Parts are referenced in the Material Part Bracket handler this way:

```
<materialpart:material:part>

<materialpart:platinum:gear>
```

If the Material Part is found, this will return a MaterialPartDefinition Object.  
This is an object that acts as both, an [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) as well as an [IItemStack](/Vanilla/Items/IItemStack/) object, so methods of both interfaces will work on the returned definition.
# Material Part Bracket Handler

The Material Part Bracket Handler gives you access to the Material Parts in the game. It is only possible to get Material Parts registered in the game, so you need to be careful of the loading order of scripts.

Material Parts are referenced in the Material Part Bracket handler this way:

```
<materialpart:material:part>

<materialpart:platinum:gear>
```

If the Material Part is found, this will return an [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart) Object.  
Please refer to the [respective Wiki entry](/Mods/ContentTweaker/Materials/Materials/MaterialPart) for further information on what you can do with these.
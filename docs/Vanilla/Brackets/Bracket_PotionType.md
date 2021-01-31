# PotionType Bracket Handler

The PotionType Bracket Handler gives you access to the PotionType in the game. It is only possible to get PotionTypes registered in the game, so adding or removing mods may cause issues if you reference the mod's PotionType.

PotionType are referenced in the PotionType Bracket Handler like so:

```zenscript
<potiontype:modname:potionname>

<potiontype:minecraft:strength>
<potiontype:minecraft:long_strength>
<potiontype:minecraft:strong_strength>
```

If the PotionType is found, this will return an PotionType Object.
Please refer to the [respective Wiki entry](/Vanilla/Potions/IPotionType/) for further information on what you can do with these.

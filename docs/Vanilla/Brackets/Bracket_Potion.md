# Potion Bracket Handler

The Potion Bracket Handler gives you access to the Potions in the game. It is only possible to get Potions registered in the game, so adding or removing mods may cause issues if you reference the mod's Potions in a Potion Bracket Handler.

Potions are referenced in the Potion Bracket Handler like so:

```
<potion:modname:potionname>

<potion:minecraft:strength>
```

If the Potion is found, this will return an IPotion Object.
Please refer to the [respective Wiki entry](../Potions/IPotion) for further information on what you can do with these.

# Getting all Registered Potions

You can use the following command to output all registered Potions to the CraftTweaker log
```
/ct potions
/crafttweaker potions
```
# Liquid Bracket Handler

The liquid Bracket Handler gives you access to the liquids in the game. It is only possible to get liquids registered in the game, so adding or removing mods may cause issues if you reference the mod's liquids in an liquid Bracket Handler.

Liquids are referenced in the Liquid Bracket Handler by like so:

```
<liquid:liquidname> OR <fluid:liquidname>

<liquid:lava> OR <fluid:lava>
```

If the liquid is found, this will return an ILiquidStack Object.
Please refer to the [respective Wiki entry](../Liquids/ILiquidStack) for further information on what you can do with these.

# Getting all Registered liquids

You can use the following command to output all registered liquids to the CraftTweaker log
```
/ct liquids
/crafttweaker liquids
```
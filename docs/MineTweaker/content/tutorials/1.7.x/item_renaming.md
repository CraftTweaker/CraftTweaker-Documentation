# Item Renaming
Not happy with an item name? Want to correct a type typo made by the mod author? Did some translation go missing?

Although a resource pack can fix that, it may be less cumbersome to use MineTweaker instead:

```zenscript
print(<minecraft:chest>.displayName); // prints the original name
<minecraft:chest>.displayName = "Storage Box";
```
That's all it takes!

Note that there exist some mod items with broken internal names. These cannot have their names modified with this method. Neither can they be modified through translations files, and as such these mod items should be considered bugged. If NEI is installed, you can still use the NEI.overrideName function, which will change the name in most places.


Unlike most script types, renaming requires a client restart, and not simply a script reload.
# Localization
Since MineTweaker 3.0.8, it is possible to change localization strings.

Two variants of the function exist - one that sets the translation no matter the current language, and one that overrides a translation but only when the given language matches the current language:

```zenscript
// Set translation but only if language is en_US
game.setLocalisation("en_US", "nei.inventory.prev", "Past");

//KEY, TEXT - You will want to use this one most of the time, it overrides no matter the language
game.setLocalisation("nei.inventory.next", "Future");
```
To find localizations, check the localization files in the assets of Minecraft or the mods you want to alter.
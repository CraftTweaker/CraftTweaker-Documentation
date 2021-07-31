::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# JEITweaker

## Beschreibung

This mod adds CraftTweaker support to JEI. CraftTweaker used to support JEI natively, but due to the 1.14 rewrite, the JEI support is being pulled out into it's own mod.

## Package

`mods.jei.JEI`

## Item Hiding

Das folgende Skript wird Erde im JEI ausblenden, wenn Sie sich die Itemliste ansehen.

```zenscript
// mods.jei.JEI.hideItem(IItemStack stack)

mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Flüssigkeit verstecken

Das folgende Skript wird Lava im JEI ausblenden, wenn Sie die Itemliste ansehen. Dies ist nur der tatsächliche Flüssigkeit und nicht der Eimer oder andere Gegenstände, die diese Flüssigkeit haben (wie ein Tank)

```zenscript
// mods.jei.JEI.hideFluid(IFluidStack stack)

mods.jei.JEI.hideFluid(<fluid:minecraft:lava>);
```

## Mod verstecken

The following script will hide all the Items added by "minecraft", except for Stone from the item list.

```zenscript
// mods.jei.JEI.hideItem(string modid, crafttweaker.api.recipeFilter exclude)

mods.jei.JEI.hideMod("minecraft", (name as string) => {
    return name == "stone";
});
```

## Regex Verstecken

Das folgende Skript wird alle Gegenstände ausblenden, die `Stein` in ihrem Namen aus der Itemliste haben.

```zenscript
// mods.jei.JEI.hideItem(string regex)

mods.jei.JEI.hideRegex(".*stone.*");
```

## Category Hiding

Das folgende Skript versteckt die Ofenkategorie im JEI. Es versteckt im Wesentlichen alle Rezepte der Kategorie.

```zenscript
// mods.jei.JEI.hideCategory(String category)

mods.jei.JEI.hideCategory("minecraft:furnace");
```

The default categories are:

```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Mods können jedoch weitere Kategorien hinzufügen, also sollte man `/ct dump jeiCategories` ausführen, um eine vollständige Liste davon zu erhalten!

# Rezept verstecken

Das folgende Skript versteckt das Rezept für Eichenboote aus der Herstellungskategorie. Dadurch wird das Rezept nicht entfernt, es wird nur ausgeblendet.

```zenscript
// mods.jei.JEI.hideRecipe(String category, String recipeName)

mods.jei.JEI.hideRecipe("minecraft:crafting", "minecraft:oak_boat");
```

## Add Info

Das folgende Skript fügt beliebige benutzerdefinierte Informationen zu einem Element oder einem Flüssigkeit hinzu, wenn es sich um ihre Verwendung in JEI handelt.

### Gegenstand-Information

Das folgende Skript fügt dem JEI-Informations-Tab drei Zeilen hinzu, wenn man einen Diamant betrachtet.

```zenscript
// mods.jei.JEI.addInfo(IItemStack stack, String[] information)

mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

The code above will produce: ![Commit Box Filled](https://blamejared.com/docsImages/JEITweakerAddInfo.png)

### Flüssigkeitsinformation

Das Hinzufügen von Flüssigkeit Infos ist sehr ähnlich dem Hinzufügen von Item-Infos, der einzige Unterschied ist, dass die Flüssigkeit eine Größe hat.

Mit `<fluid:minecraft:water>` wird eine einzige Wasserschicht in JEI angezeigt. Mit `<fluid:minecraft:water> * 1000` wird ein vollständiger Block Wasser im JEI angezeigt.

Das folgende Skript fügt dem JEI-Informations-Tab drei Zeilen hinzu, wenn man Wasser anschaut und das Wasser wird als vollständiger Block angezeigt.

```zenscript
// mods.jei.JEI.addInfo(IFluidStack stack, String[] information)

mods.jei.JEI.addInfo(<fluid:minecraft:water> * 1000, ["This is the first line!", "This is the second!", "third"]);
```




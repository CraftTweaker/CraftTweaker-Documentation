# JEI

CraftTweaker bietet Unterstützung für JustEnoughItems (JEI). Sie können Elemente oder Flüssigkeiten in JEI hinzufügen oder verbergen oder eine Beschreibungsseite für diese hinzufügen.

## Entfernen

Du kannst den Gegenstand entweder einfach aus JEI entfernen oder ihn und alle seine Rezepte aus dem Handwerkstisch entfernen.

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Kategorien ausblenden

Hiermit kannst du ganze JEI-Kategorien verbergen (z.B. Herstellungsrezepte, Ofenrezepte, Maschinenrezepte, ...).  
Es akzeptiert die Kategorie als Zeichenkette. Sie können alle registrierten Kategorien durch das Ausführen von `/ct jeiCategories` eintragen.

```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Neuer Eintrag

Du kannst auch einen [IItemStack](/Vanilla/Items/IItemStack/) zu JEI hinzufügen, um Elemente hinzuzufügen, die nicht hinzugefügt wurden oder um ein Element mit NBT-Tag zu JEI hinzuzufügen

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["Was einmal war Stein", "Ist Stein nicht mehr"]}}));
```

## Beschreibung hinzufügen

Eine JEI Beschreibung ist eine zusätzliche Seite, die bei der Suche nach Rezept/Verwendung einer Zutat in JEI angezeigt wird, die Informationen über diese Zutaten enthält.  
Sie können eine JEI-Beschreibung zu einem [IItemStack](/Vanilla/Items/IItemStack/)hinzufügen, ein [IItemStack](/Vanilla/Items/IItemStack/)[], ein [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) oder ein [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

Wenn Ihre Zeichenketten zu lang sind, um in eine Zeile (oder Seite) geschrieben zu werden, wird dies automatisch Zeilenumbrüche oder Seitenumbrüche erzeugen.  
Jeder String-Parameter wird mindestens eine Zeile haben und am Ende des Fensters umwickeln, wenn zu lang.

```zenscript
//addDescription(IItemStack item, string... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Niemals ","Gonna","Give","Up","Nie","Gonna","Let","You","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Sie können diese verwenden, um Dinge zu erstellen", "", "things like Armor","","","Yes...","That as well ...");

//addDescription(ILiquidStack stack, string... absteigend);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

Der `desc` Parameter ist ein varArg, was bedeutet, dass Sie entweder einen String [] geben können, der alle Beschreibungszeichenketten oder viele einzelne Zeichenketten enthält, was auch immer Sie bevorzugen. Mischen Sie sie einfach nicht!
# Erweiterte Rezepte

## Paket

```zenscript
importieren mods.ic2.AdvRecipes;
```

## Rezepttypen
Es gibt mehrere Arten von Rezepten:

### Gestaltete Rezepte
Formenrezepte sind Rezepte, bei denen es darauf ankommt, welcher Gegenstand in welchen Schlitz geht. Zum Beispiel können Sie nicht einfach 7 Stapel Eisenbarren in verschiedenen Größen anordnen, um Eisenleggings zu erstellen. Die Form spielt eine Rolle, so ist es ein geformtes Rezept.

### Formenlose Rezepte
Formenlose Rezepte sind Rezepte, bei denen nur die Gegenstände zählen, die du im Handwerksgitter platzierst, während die Form keine Bedeutung hat. Zum Beispiel erzeugen blaue und gelbe Farbstoffe grüne Farben. Dieses Rezept kümmert sich nicht darum, wo du welchen Gegenstand legst.

## Rezepte hinzufügen

### ergänzte Form
```zenscript
mods.ic2.AdvRecipes.addShaped(Output,Inputs);
```

Dies erzeugt ein geformtes Rezept für `Ausgabe` mit `Eingaben` als Zutaten.

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)

`Eingänge` sind ein 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
Das Rezept für Eisen Hose würde also als `[[Eisen, Eisen, Eisen, Eisen],[Eisen, Null,Eisen],[Eisen, Eisen ull,Iron]]`  
Wenn das verwirrend ist, versuchen Sie, die Arrays in ein Array pro Zeile aufzuteilen
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

AdvRecipes. ddShaped(Leggings,
 [[Eisen * 5,Eisen * 7,Eisen * 5],
  [Eisen * 3,null,Eisen * 3],
  [Eisen, Null,Eisen]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(Output,Inputs)
```

Dies erzeugt ein formloses Stapelrezept für `Ausgabe` mit `Eingängen` als Zutaten.

`Ausgabe` ist ein [IItemStack](/Vanilla/Items/IItemStack/)  
`Eingänge` sind ein [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (z.B. [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack-Ausgabe, Inhaltsstoffe[] Zutaten);
mods.ic2.AdvRecipes.addHiddenShaped(IItemStack-Ausgabe, IIngredient[][] Zutaten);
```

Dies erzeugt ein geformtes oder formloses Stapelrezept für `Ausgabe` mit `Eingaben` als ausgeblendete Zutaten. 

# Tooltips

Das Hinzufügen oder Entfernen eines Tooltipps ist wirklich einfach:  
Alles was du brauchst ist ein Element (oder oreDict oder ähnlich), also ein Igredient.

## Lösche Tooltips

Dies entfernt ALLE Tooltips von `Element`

```zenscript
item.clearTooltip();
```

## Entferne bestimmte Tooltips

Diese Funktion entfernt alle Tooltipps, die mit dem angegebenen Regex übereinstimmen. Ein Tooltip ist in der Regel eine Zeile Text (es sei denn, es gibt durch Leerzeichen erzwungene Linebreaks).

```zenscript
item.removeTooltip(regex);
```

`Element` ist ein [Igredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` ist ein String

## Normale Tooltips

Dies fügt `tT` als Tooltip zum `Element` hinzu.

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Halte, was kann ich mehr sagen?");
```

`Element` ist ein [Igredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` ist ein String

## Umschalt-Tooltips

Dadurch wird ein Tooltip hinzugefügt, der nur sichtbar ist, wenn Sie Shift gedrückt halten.  
Sie können auch eine Information hinzufügen, die sichtbar ist, wenn Sie nicht Shift gedrückt halten (üblicherweise wird so etwas wie eine Nachricht erzeugt, die Ihnen über den Shift-Tooltip erzählt.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Shift halten um zu wissen, was ich binden");
```

`Element` ist ein [Igredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` ist ein [Iformatierter Text](/Vanilla/Utils/IFormattedText/). Sie können auch einfach einen String verwenden, da er automatisch konvertiert wird.  
`info` ist ein [IFormattedText](/Vanilla/Utils/IFormattedText/). Sie können auch einfach eine Zeichenkette verwenden, da sie automatisch konvertiert werden.

# Markup

Die Welt ist farbenfroh und sollte auch all unsere Tooltips sein. Du kannst diese Optionen auch nesten (falls du einen grünen Text wolltest, das ist durchschlagen)

## Färben einer Zeichenkette

Sie können eine der 16 Farben auf Ihre Zeichenkette anwenden

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format. ray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white
```

```zenscript
<minecraft:stick>.addTooltip(format.green("This one was not repe"));
```

## Formatieren einer Zeichenkette

Sie können Ihrem String verschiedene Formate zuweisen, wenn Sie möchten:

```zenscript
format.obfuscated
format.fold
format.strikethrough
format.unterstreichen
format.kursiv
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("Dies ist ein schlechter Tooltip"));
```

## Tooltip-Funktionen

Sie können den [IFormattedText](/Vanilla/Utils/IFormattedText/) Parameter durch eine ITooltipFunction ersetzen (`import crafttweaker.item. TooltipFunction;`).  
Mit diesen Funktionen können Sie dynamisch einen Tooltip basierend auf dem angegebenen IItemStack generieren.

Eine Tooltipp-Funktion ist eine Funktion, die einen [IItemStack](/Vanilla/Items/IItemStack/) nimmt und den Tooltip als String zurückgibt. Das bedeutet, dass das Benutzen eines `Format` Befehls *für diese Funktionen nicht funktioniert* du musst dich auf Minecraft's Formatierungspräfixe verlassen, wenn du dies erreichen möchtest.

Für die Shift-Tipps können Sie auch eine zweite Funktion bereitstellen mit dem Sie auch den Tooltip generieren können, der angezeigt werden soll, wenn die Schicht nicht gedrückt wird. Für Shift-Tooltips sind es entweder beide Parameter als Funktion oder beide als [IFormattedText](/Vanilla/Utils/IFormattedText/), keine Mix-ups!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Beispiel
<ore:myAxeOreDictionary>. dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    return "Schaden: " ~ item. amage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Uses left : " ~ (item. axSchaden - item.damage);
}, function(item){
    return "Shift für ein paar saftige Math.";
});
```
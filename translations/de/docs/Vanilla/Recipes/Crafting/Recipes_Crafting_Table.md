# Rezepte

## Rezepttypen

Es gibt mehrere Arten von Rezepten:

### Gestaltete Rezepte

Formenrezepte sind Rezepte, bei denen es darauf ankommt, welcher Gegenstand in welchen Schlitz geht. Zum Beispiel können Sie nicht einfach 7 Eisenbarren in irgendeiner Weise arrangieren, um Eisenleggings zu erstellen. Die Form spielt eine Rolle, so ist es ein geformtes Rezept.

### Gespiegeltes Rezept

Gespiegelte Rezepte sind geformte Rezepte. Nur der Unterschied ist, dass das Rezept entlang der horizontalen oder vertikalen Achsen gespiegelt werden kann.

### Formenlose Rezepte

Formenlose Rezepte sind Rezepte, bei denen nur die Gegenstände zählen, die du im Handwerksgitter platzierst, während die Form keine Bedeutung hat. Zum Beispiel erzeugen blaue und gelbe Farbstoffe grüne Farben. Dieses Rezept kümmert sich nicht darum, wo du welchen Gegenstand legst.

## Rezepte entfernen

Es gibt mehrere Möglichkeiten, Rezepte zu entfernen.

### entfernen

```zenscript
recipes.remove(Ausgabe, NBTMatch);
```

This will crafting table recipes for the given `output`.  
If `NBTMatch` is true, it will only remove recipes that result in items with the same NTB-Data as provided

`Ausgabe` ist ein [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` ist ein Boolan und optional (Wird falsch sein, wenn nicht angegeben).

### entfernte Form

```zenscript
recipes.removeShaped(Ausgabe, Eingabe);
```

Diese ist strenger auf welche Rezepte zu entfernen sind und wird nur formale Rezepte entfernen, die `ausgeben` mit `Eingabe`.

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (e.g.[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

Darüber hinaus ist `Eingaben` optional. Wenn diese Funktion weggelassen wird, wird die Funktion dasselbe wie `Rezept tun.remove`tun, aber sie entfernt nur geformte Rezepte.  
`Eingaben` können Platzhalterzeichen enthalten: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` würde auf ein Rezept verweisen, dessen Artikel solange jeder Slot gefüllt ist, keine Rolle spielen.

### entferne Shapeless

```zenscript
recipes.removeShapeless(Ausgabe, Eingabe, Wildcard);
```

This one is more strict on which recipes to remove and will only remove shapeless recipes that craft `output` with `input`.  
If `wildcard` is true, it will remove shapeless recipes that craft `output` with `input` and other, non-specified items (for example you could disable all shapeless recipe that contain, among others, Lapis as ingredient).

`Ausgabe` ist eine [Igredient](/Vanilla/Variable_Types/IIngredient/)  
`Eingaben` ist eine [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  
`Platzhalter` ist ein Boolan und optional (Wird die gleiche wie false sein, wenn nicht angegeben)

Darüber hinaus ist `Eingaben` optional. Falls ausgelassen, wird die Funktion dasselbe wie `recipe.remove`tun, aber sie entfernt nur formlose Rezepte.

### alle entfernen

Entfernt alle hergestellten Rezepte im Spiel.  
Ein bisschen Überkill, denkst du?

```zenscript
recipes.removeAll();
```

### Nach Namen entfernen

Da 1.12 Namensrezepte einführt, kannst du auch Rezepte entfernen, sobald du ihren Namen weißt. Du kannst auch Regex verwenden, um mehrere Rezepte auf einmal zu entfernen. Und nein, wenn Sie nicht wissen, was reguläre Ausdrücke sind, werde ich das hier nicht erklären!

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Mit Mod entfernen

Du kannst auch alle Rezepte entfernen, die von der angegebenen Mod hinzugefügt wurden.  
Du musst den Modid als String angeben.

```zenscript
recipes.removeByMod("modularmachery");
```

## Rezepte hinzufügen

### Notizen auf 1.12

Am 1.12 benötigt jedes hinzugefügte Rezept eine UNIQUE-Kennung, da das Entwicklerteam das so wollte.  
Das bedeutet, dass alle Hinzufügungsfunktionen jetzt einen zusätzlichen Parameter `Namen` benötigen (was nicht ausgelassen werden kann).  
Das bedeutet `recipe.addShaped(Output,Input);` ist nun `Rezept. ddShaped(name,output,input);`  
Alle anderen Funktionen bleiben unverändert. Denke daran, dass `Name` eindeutig sein muss!  
`Name` ist ein String.

### ergänzte Form

```zenscript
//pre-1.12
recipes.addShaped(output,inputs, function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

Dies erzeugt ein geformtes Rezept für `Ausgabe` mit `Eingaben` als Zutaten.  
Wenn eine `Funktion` als dritter Parameter hinzugefügt wird, können Sie auch eine Funktion zur Bestimmung der Ausgabe verwenden.  
Wenn eine `Aktion` Funktion als Parameter hinzugefügt wird, du kannst auch bestimmen, was passieren wird, wenn der Gegenstand hergestellt wird.

`name` is a string and needs to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)  
`function` is a IRecipeFunction. Bitte verweisen Sie im [auf den Wiki-Eintrag](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) für weitere Informationen zu Funktionen.  
`Aktion` ist eine IRecipeAction. Weitere Informationen zu Aktionen finden Sie im [unter Respektierung des Wiki-Eintrags](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction).

`Eingänge` sind ein 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
Das Rezept für Eisen Hose würde also als `[[Eisen, Eisen, Eisen, Eisen],[Eisen, Null,Eisen],[Eisen, Eisen ull,Iron]]`  
Wenn das verwirrend ist, versuchen Sie, die Arrays in ein Array pro Zeile aufzuteilen

```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recipes.addShaped("CTLeggings", Leggings,
 [[Eisen, Eisen, Eisen, Eisen],
  [Eisen, Null,Eisen, Eisen],
  [Eisen, Null,Eisen]]);
```

### addShapedMirrored

```zenscript
//Normal pre 1.12 Syntax
recipes.addShapedMirrored(output,inputs,function,action);

//Empfohlen 1.12 Syntax
recipes.addShapedMirrored(name,output,inputs,function,action);
```

So wie ``Form hinzugefügt hat, nur dass das auf diese Weise erstellte Rezept ein gespiegeltes Rezept ist.

### addShapeless

```zenscript
//Normal pre 1.12 Syntax
recipes.addShapeless(output,inputs,function,action)

//Empfohlen 1.12 Syntax
recipes.addShapeless(name,output,inputs,function,action)
```

Dies erzeugt ein formloses Rezept für `Ausgabe` mit `Eingängen` als Zutaten.  
Wenn eine `Funktion` als dritter Parameter hinzugefügt wird, können Sie auch eine Funktion zur Bestimmung der Ausgabe verwenden.  
Wenn eine `Aktion` Funktion als Parameter hinzugefügt wird, du kannst auch bestimmen, was passieren wird, wenn der Gegenstand hergestellt wird.

`name` is a string and needs to be unique `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])  
`funktion` ist eine IRecipeFunktion. Weitere Informationen zu Funktionen finden Sie im [unter Beachtung des Wiki-Eintrags](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction). Dies ist optional.  
`aktion` ist eine IRecipeAction. Weitere Informationen zu Aktionen finden Sie im [unter Respektierung des Wiki-Eintrags](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction). Dies ist optional.

### addHidden

```zenscript
addHiddenShapeless(String name, IItemStack output, IIngredient[] Zutaten, @Optionale IRecipeFunction Funktion, @Optionale IRecipeAction Aktion);
addHiddenShaped(String-Name, IItemStack-Ausgabe, IIngredient[][] Zutaten, @Optionale IRecipeFunction Funktion, @Optionale IRecipeAction Aktion, @Optional Boolean gespiegelt);
```

Dies erzeugt ein formloses Rezept für `Ausgabe` mit `Eingaben` als Zutaten, das den Namen `Namen`trägt.  
Wenn eine `Funktion` als dritter Parameter hinzugefügt wird, können Sie auch eine Funktion verwenden, um die Ausgabe zu bestimmen.  
Wenn eine `Aktion` Funktion als Parameter hinzugefügt wird, du kannst auch bestimmen, was passieren wird, wenn der Gegenstand hergestellt wird.  
Für die formlose Variante können Sie auch einstellen, wenn das Rezept `gespiegelt ist`, wenn es weggelassen wird, nicht.

## Andere Funktionen

### Erhalte alle registrierten Handwerksrezepte.

Sie können dies verwenden, um eine [`Liste<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) zu erhalten, die ALLE registrierte Handwerksrezepte enthält.

    rezept.all;
    

### Erhalte alle Rezepte für einen bestimmten IIngredient

Sie können dies verwenden, um eine [`Liste<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) zu erhalten, die ALLE registrierte Handwerksrezepte für die angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) enthält.

    //recipes.getRecipesFor(IZutat);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### Alle Artikelbestandteile durch ein anderes ersetzen

Hiermit kannst du alle [Zutaten](/Vanilla/Variable_Types/IIngredient/) in einem Rezept durch ein anderes ersetzen, zum Beispiel alle Stöcke mit Steinen. Es akzeptiert auch einen optionalen dritten Parameter, der die Rezeptausgabe wiederholt. Wenn das Rezept

    //recipes.replaceAllOccurences(IIngredient toReplace, IIngredient replaceWith, @Optional IIngredient forOutput);
    
    //ersetzt jeden Stock durch Steine
    Rezepte. eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Ersetzt Goldbarren durch Goldblöcke
    Rezepte. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //Ersetzt nur in Rezepten ein diamond_sword als Output
    Rezepte. eplaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //Bedingungen funktionieren ebenfalls -> ersetzt Rezepte für jede Rezeptausgabe, außer tnt
    Rezepte. eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Herstellen

Du kannst sogar nach `Rezepten herstellen`! Die Funktion gibt einen [IItemStack](/Vanilla/Items/IItemStack/) oder `null` zurück, abhängig davon, ob ein Rezept gefunden wurde oder nicht.

    //recipes.craft(IItemStack[][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);
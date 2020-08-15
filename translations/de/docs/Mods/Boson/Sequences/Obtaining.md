# `Sequenz erhalten`s

## Übersicht
Eine `Sequenz` zu erhalten ist ein zweistufiger Prozess: Es ist zuerst notwendig, eine Referenz auf einen Sequenz-Konstruktor von zu erhalten, den korrekten Typ, aufrufen, indem Sie entweder eine Liste der Elemente des angegebenen Typs oder ein fertiges Array des angegebenen Typs übergeben, um den Konstruktionsprozess abzuschließen.

Einige CraftTweaker Integrationen können auch eine Möglichkeit bieten, eine `-Sequenz` direkt oder mittels einer Methode zu erhalten. In diesem Fall gibt es keine Notwendigkeit, einen Konstruktor anzufordern. Auf der anderen Seite wird der generische Typ nicht explizit spezifiziert, wodurch der Benutzer eine mentale Notiz vom Rückgabetyp machen muss.

## Schritt 1: Der Konstrukteur
Die Referenzierung einer `Sequenz` Konstruktor wird über einen speziellen Klammer-Handler durchgeführt, der folgende Syntax hat:

```zenscript
<sequence:CLASSNAME>
```

Im obigen Snippet, `CLASSNAME` repräsentiert entweder den kurzen oder den vollqualifizierten Namen der Klasse, für die diese Sequenz generisch sein wird. In einfacheren Worten wird definiert, welche Art von Elementen die Sequenz speichern kann, wenn der Konstruktor aufgerufen wird.

Betrachten Sie folgende zwei Beispiele:

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

The sequence expression marked with `# 1` will return a reference to a constructor for a sequence that will be able to hold instances of `IItemStack`. Beachten Sie, dass dies erfordert, dass die Klasse in das aktuelle Skript importiert wird, um zu funktionieren.

Der mit `# 2` markierte Sequenzausdruck gibt eine Referenz an einen Konstruktor für eine Sequenz zurück, die jede Art von `IIngredient`halten kann bedeutet, dass es `IItemStack`s akzeptiert aber auch `IOreDictEntr`ies oder jede andere benutzerdefinierte `IIngredient` Implementation.

**WICHTIG:** Dieser initiale Typ wird nur den aktuellen Sequenztyp beeinflussen. Es ist immer möglich, den Typ zu ändern, der in dieser Sequenz gespeichert ist, später über jede `Sequenz`-typ-konvertierende Anrufe, zum Beispiel `Karte`. Weitere Informationen finden Sie in der [Klassendokumentation](/Mods/Boson/Sequences/Docs/).

## Schritt 2: Den Konstrukteur aufrufen
Da die Klammerhandler den Konstruktor nicht aufrufen, sondern nur referenzieren, ist es nun notwendig, den Konstruktor direkt aufzurufen. Dies kann über eine normale Methoden-Invokationssyntax geschehen, außer über einen Klammer-Handler und nicht über einen Methodennamen.

Der Konstruktor einer Sequenz ist ein vararg, was bedeutet, dass er jede Menge Argumente akzeptieren kann solange es sich um alle generischen Typen handelt, die in der Konstruktor Referenz angegeben wurden. E.g., the bracket handler `<sequence:IItemStack>` will not be able to accept a `<ore:ingotCopper>` in its constructor, since an `IOreDictEntry` is not an `IItemStack`.

Es ist möglich, dem Konstruktor keine Argumente anzugeben. In diesem Fall ist die Sequenz leer.

Es ist auch möglich, ein Array selbst oder einen Verweis auf ein Array zu liefern, entweder in Form einer Methode oder einer Variable. In this case, the array will be accepted only if the type matches `CLASSNAME[]`, where `CLASSNAME` is the name of the type of objects in the sequence. Beachten Sie, dass dieses Verhalten **** eine experimentelle Flagge erfordert, um aktiviert zu sein. Weitere Informationen finden Sie unter im [Experimental Flags Preprocessor](/Mods/Boson/Preprocessor/Exp/).

Das folgende ist ein Snippet von Code, das zeigt, wie das obige im Code angewendet wird.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val sequenceOfRezepte = <sequence:ICraftingRecipe>(Rezepte. ll); # erfordert -Esao spezifiziert
```

## Was ist als Nächstes?
Nachdem die `Sequenz` erstellt wurde, finden Sie unter [der Klassendokumentation](/Mods/Boson/Sequences/Docs/) eine Liste der unterstützten Methoden.

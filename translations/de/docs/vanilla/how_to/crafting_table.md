# Herstellungstisch

## Rezepttypen

Es gibt drei Rezepttypen für die Herstellung von Tabellen:

- **Shapeless:** Ein formloses Rezept ist ein Rezept, bei dem die Position der Eingaben im Herstellungsraster keine Rolle spielt.
- **Gestaltet:** Ein geformtes Rezept ist ein Rezept, bei dem die Position der Gegenstände genau sein muss.
- **Gespiegelt geformt:** Ein gespiegeltes Rezept ist wie geformte Rezepte aber spiegelt das Rezept entlang der horizontalen oder vertikalen Achsen ab.

## Rezept hinzufügen

_Beim Hinzufügen eines Rezeptes sicherstellen, dass deine Rezeptnamen einzigartig sind!_

### Füge Formenrezepte hinzu

`craftingTable.addShapeless(recipeName, Output, Zutaten, Rezeptfunktion);`

- `recipeName` &lt;string>
- `Ausgabe` <[IItemStack](/vanilla/api/items/IItemStack)>
- `Zutaten` <[Ingredient](/vanilla/api/items/IIngredient)[]>
- `RecpeFunction` (optional) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Fügt dem Herstellungstisch ein [formloses](#recipe-types) Rezept hinzu. Da [formlose](#recipe-types) Rezepte die Position der Eingaben ignorieren, spielt auch die Reihenfolge der Artikel beim Erstellen des Rezepts keine Rolle.

[Shapeless](#recipe-types) Rezepte können bis zu 9 Eingänge haben, aber diejenigen mit 4 oder weniger Eingängen können auch im 2x2 Inventurraster hergestellt werden.

Die Rezepte des Herstellungstisches können auch mehr als 1 Menge des Ausgabegegenstandes ausgeben. Dies kann über den [IItemStack Multiplcation Operator](/vanilla/api/items/IItemStack/#mul) auf dem Ausgangselement erreicht werden.

```zenscript
craftingTable. ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Ein formloses Rezept kann bis zu 9 Eingaben haben
// Dies zeigt auch, dass mehr als eine Ausgabe verwendet werden kann. In diesem Beispiel werden 8 Gras ausgegeben.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Siehe [Rezeptfunktionen verwenden](#using-recipe-functions) für Beispiele zur Verwendung von Rezeptfunktionen._

### Füge gespiegelte und geformte Rezepte hinzu

`craftingTable.addShaped(recipeName, Output, Zutaten, Rezeptfunktion);`

`craftingTable.addShapedMirrored(RezeptName, Ausgabe, Zutaten, Rezeptfunktion);`

- `recipeName` &lt;string>
- `Ausgabe` <[IItemStack](/vanilla/api/items/IItemStack)>
- `Zutaten` <[Ingredient](/vanilla/api/items/IIngredient)[][]>
- `RecpeFunction` (optional) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Fügt je nach Funktion ein [geformtes](#recipe-types) (oder [gespiegeltes](#recipe-types)) Rezept zum Handwerkstisch hinzu. Die Reihenfolge der Gegenstände beim Erstellen des Rezepts bestimmt die Position der einzelnen Gegenstände im Handwerksgitter.

Das Rezept zu einem [gespiegelten](#recipe-types) Rezept zu machen, erlaubt stattdessen dem Spieler mehr Flexibilität, wenn er die Gegenstände zum Handwerksfeld hinzufügt.

[geformte](#recipe-types) und [gespiegelte](#recipe-types) Rezepte können in einem 2x2 (Inventar) oder 3x3 Handwerksgitter verwendet werden.

Die Rezepte des Herstellungstisches können auch mehr als 1 Menge des Ausgabegegenstandes ausgeben. Dies kann über den [IItemStack Multiplcation Operator](/vanilla/api/items/IItemStack/#mul) auf dem Ausgangselement erreicht werden.

```zenscript
// Füge ein geformtes Rezept
craftingTable. ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Hinzufügen eines 2x2-Rezepts (dies kann auch als gespiegelt gemacht werden)
craftingTable. ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Füge ein gespiegeltes Rezept hinzu
craftingTable. ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Siehe [Rezeptfunktionen verwenden](#using-recipe-functions) für Beispiele zur Verwendung von Rezeptfunktionen._

## Rezept-Funktionen verwenden

Eine Rezeptfunktion erlaubt eine programmatisch festgelegte Ausgabe. Dies kann besonders nützlich sein, wenn Sie einige der Informationen des Eingabewertes benötigen, wie zum Beispiel den Schaden des Gegenstands oder andere NBT-Daten.

_Da gespiegelte und geformte Rezepte ähnlich sind, werden Beispiele nur Formenrezepte beinhalten. Sie können jedes Beispiel mit `addShaped` genauso behandeln wie mit `addShapedMirrored`._

### Verwendung von RecipeFunctionArray in einem Shapeless Rezept

`RecpeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(üblicherweise als IItemStack, Eingaben als IItemStack[]) =>{};`

- `Gewöhnlich Out` <[IItemStack](/vanilla/api/items/IItemStack)>
- `Eingaben` <[IItemStack](/vanilla/api/items/IItemStack)[]> Array der Eingaben sortiert wie im Originalrezept definiert

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable. ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (üblich als IItemStack, inputs as IItemStack[]) => {
    // Prüft, ob <item:minecraft:dirt> einen Anzeigenamen von "total real diamond block" hat
    if (inputs[0]. isplayName == "total real diamond block") {
        // Gibt <item:minecraft:diamond> * 9
        zurück
    }

    // Ansonsten <item:minecraft:clay> mit einem Anzeigenamen von "Diamant"
    zurückgeben <item:minecraft:clay>. etDisplayName("Diamant");
});
```

### RecipeFunctionMatrix in einem Shaped/Gespiegelten Rezept verwenden

`RecpeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut as IItemStack, Eingaben als IItemStack[][]) =>{};`

- `Gewöhnlich Out` <[IItemStack](/vanilla/api/items/IItemStack)>
- `Eingaben` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Array von Eingängen sortiert wie im Originalrezept definiert. Eine Eingabe kann gefunden werden, indem die Zeile definiert wird, dann die Spalte (`gibt[0][1]` ein, um das Element in der ersten Zeile, der zweiten Spalte zu erhalten).

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable. ddShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, Eingaben als IItemStack[][]) => {
        var counter = 0;
        // Prüft ob alle <item:minecraft:clay_ball> einen Anzeigenamen von "Diamant" hat
        für die Zeile in den Eingaben {
            für das Rezeptelement in Zeile {
                if (<item:minecraft:clay_ball>. atches(recipeItem) && Rezeptem. isplayName == "Diamant") {
                    // Wenn das Rezeptelement <item:minecraft:clay_ball> ist und einen Namen "Diamant" hat, erhöht sich der Zähler
                    Zähler+;
                }
            }
        }

        // Wenn wir 8 <item:minecraft:clay_ball> mit dem Namen "Diamant" haben
        if (counter == 8) {
            if (inputs[1][1]. isplayName == "Special Diamond") {
                // Wenn <item:minecraft:diamond> einen Anzeigenamen von "Special Diamond" hat
                // Zurück 2 <item:minecraft:diamond_block>
                wie gewohnt zurückgeben * 2;
            } else {
                // Gibt <item:minecraft:diamond_block>
                normal zurück;
            }
        }

        // Ansonsten gibt <item:minecraft:clay> mit einem Anzeigenamen von "Diamantblock"
        zurück <item:minecraft:clay>. etDisplayName("Diamantenblock");
});
```

### Erweiterte Nutzung

#### Funktionen als Variable

Rezeptfunktionen können einer Variable zugewiesen werden, die es Ihnen erlaubt, die gleiche Funktion für mehrere Rezepte einfach zu ulitisieren.

Form:

```zenscript
import crafttweaker.api.item. Artikelstapel;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0]. isplayName == "total real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>. etDisplayName("Diamant");
};

// Eingaben[0] in exampleShapelessRecipeVarFunction werden <item:minecraft:dirt>
craftingTable. ddShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// Eingaben[0] in beispielShapelessRecipeVarFunction werden <item:minecraft:cobblestone>
craftingTable. ddShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Gestattet/Gespiegelt:

```zenscript
import crafttweaker.api.item. Artikelstapel;

var exampleShapedRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Prüft, ob alle <item:minecraft:clay_ball> einen Anzeigenamen von "Diamant" hat
    für Zeile in Eingaben {
        für das Rezept-Element in Zeile {
            if (<item:minecraft:clay_ball>. atches(recipeItem) && recipeItem. isplayName == "Diamant") {
                // Wenn das Rezeptelement <item:minecraft:clay_ball> ist und einen Namen "Diamant" hat, erhöht sich der Zähler
                Zähler++;
            }
        }
    }

    // Wenn wir 8 <item:minecraft:clay_ball> mit dem Namen "Diamant" haben
    if (counter == 8) {
        if (inputs[1][1]. isplayName == "Special Diamond") {
            // Wenn <item:minecraft:diamond> einen Anzeigenamen von "Special Diamond" hat
            // Retouren 2 <item:minecraft:diamond_block>
            Retourenüblich * 2;
        } else {
            // Gibt <item:minecraft:diamond_block>
            normal zurück;
        }
    }

    // Ansonsten gibt <item:minecraft:clay> mit einem Anzeigenamen von "Diamantblock"
    zurück <item:minecraft:clay>. etDisplayName("Diamant-Block");
};

craftingTable. ddShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], beispielShapedRecipeVarFunction);

CraftingTable. ddShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], beispielShapedRecipeVarFunction);
```

## Rezept entfernen

### Rezept nach Namen entfernen

`craftingTable.removeByName(recipeName);`

- `recipeName` &lt;string>

Entfernt das Rezept, das dem angegebenen Namen entspricht.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Rezepte durch Ausgabe entfernen

`craftingTable.removeRecipe(Ausgabe);`

- `Ausgabe` <[IItemStack](/vanilla/api/items/IItemStack)>

Entfernt alle Rezepte, bei denen das Ausgabeergebnis der angegebene [IItemStack](/vanilla/api/items/IItemStack) ist.

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Rezepte über Mod-ID entfernen

`craftingTable.removeByModid(modId);`

- `modId` &lt;string>

Entfernt alle Rezepte, die vom angegebenen Mod hinzugefügt wurden.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Rezepte von Mod-ID entfernen ausschließen

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;string>
- `exclusionfilter` <[Rezeptfilter](/Vanilla/api/Rezept/RezeptFilter)>
  - `Name` &lt;string> Der Name des aktuell überprüften Rezeptes. _Die Mod Id wird nicht enthalten_

Entfernt alle Rezepte, die vom angegebenen Mod hinzugefügt wurden. Rezepte sind ausgeschlossen, wenn das Ergebnis des exclusionFilters für den Rezeptnamen wahr ist.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Prüft, ob der Name des Rezepts mit "minecraft:red_bed_from_white_bed" übereinstimmt"
    return name == "red_bed_from_white_bed";
});
```

Mehrere Rezepte können ebenfalls ausgeschlossen werden. Eine Möglichkeit dazu ist folgende:

```zenscript
// Ein Array von Rezeptnamen als Zeichenketten
var minecraftExclusions als string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_zugar_cane"
];

CraftingTisch. emoveByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Rezepte von Regex entfernen

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

Entfernt alle Rezepte, die mit dem Regex-String übereinstimmen.

```zenscript
// Entfernt Rezepte wie "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet" und "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Alle Rezepte entfernen

`craftingTable.removeAll();`

Entfernt alle handwerklichen Tischrezepte.

```zenscript
craftingTable.removeAll();
```

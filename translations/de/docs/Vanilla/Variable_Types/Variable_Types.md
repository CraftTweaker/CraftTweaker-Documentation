# Variablentypen

Da Sie sicherlich schon ein bisschen mit Variablen und Werten verwechselt haben, müssen Sie sich wundern, wie weiß CraftTweaker, ob es sich um einen Integer, einen Gegenstand oder einen oreDic-Eintrag handelt?

Der einfachste Weg eine Variable zu deklarieren ist die Verwendung ```var name = Wert;```. This creates the variable and casts it to the value it thinks is most fitting for the situation.

## Übertragung einer Variable auf einen bestimmten Typ

Komplexere Skripte können es erfordern, dass Sie eine Variable als einen bestimmten Typ abgeben. Zum Beispiel würde dies fehlschlagen:

```zenscript
var test;

test = <minecraft:dirt>;
recipes.remove(test);
```

Warum also scheitert das? Dies liegt daran, dass CT Variablen, die dem IAny Typ keinen Startwert gegeben haben, abgibt. Diese Art wurde gemacht, um einige Rezept-Handler zu erleichtern, wenn auch nie wirklich implementiert, so dass es manchmal mehr Schaden als nützt. Ursprünglich war er als Typ gedacht, der die Form der meisten anderen Typen annehmen kann, so dass Sie nicht immer die Variablen ändern müssen aber die Schnittstelle wurde nie implementiert.

Back to the topic: How can we fix this issue? Durch Gießen der Variablentest auf ```IItemStack```, der der Typ ist, der für Elemente verwendet wird. Leider müssen einige Typen zuerst importiert werden, und das ist eine davon.

```zenscript
import crafttweaker.item.IItemStack;
var test as IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## Liste der Variablentypen

Hier ist eine (unvollständige) Liste der meisten Variablentypen

| Name (Name in CT)                                   | Erklärung                                                                                                                          | Beispiel                                              | Importieren                                 |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Ganzzahl (int)                                      | Ganzzahlen sind ganze Zahlen (z.B. 1,2,3,...), Caps bei 2 147 483 647                                                              | `var test = 10 als int;`                              |                                             |
| [IItemStack](/Vanilla/Items/IItemStack/)            | Einzelne Elemente                                                                                                                  | `var test = <minecraft:dirt> als IItemStack;`   | import crafttweaker.item.IItemStack;        |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Einzelne oder mehrere Elemente (z.B. `<minecraft:dirt>`, `<ore:ingotIron>`,...)                                        | `var test = <minecraft:dirt> als Igredient;`    | import crafttweaker.item.IIngredient;       |
| [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/)  | Mehrere Elemente aus einem OreDict (z.B. `<ore:ingotIron>`, `<ore:ingotGold>`,...)                                     | `var test = <ore:ingotIron> als IOreDictEntry;` | import crafttweaker.oredict.IOreDictEintrag |
| Boolesche (Bool)                                    | Booleans sind entweder wahr oder falsch.                                                                                           | `var test = false als Bool;`                          |                                             |
| Byte (Byte)                                         | Bytes-Werte sind ganze Zahlen von 0 bis 255 ()                                                                                     | `var test = 125 als Byte;`                            |                                             |
| Gleitpunkt (Float)                                  | Dezimalstellen                                                                                                                     | `var test = 1.25 als float;`                          |                                             |
| Doppelte Präzision (doppelt)                        | Wie Floating Points, nur präziser und mit einem höheren Zahlenbereich                                                              | `var test = 1.25 als Doppelt;`                        |                                             |
| Lang (lang)                                         | Wie Integer, aber mit einem höheren Zahlenbereich (normalerweise ist Int in Ordnung)                                               | `var test = 30 als lang;`                             |                                             |
| Null (null)                                         | Null, nichts, nada. Nicht wirklich ein Typ, aber dennoch nützlich                                                                  | `var test = null;`                                    |                                             |
| Kurze (kurz)                                        | Wie Integer, aber mit einem kleineren Zahlenbereich                                                                                | `var test = 16 als kurz;`                             |                                             |
| String (String)                                     | Eine Zeichenkette ist ein Text. Hier brauchen Sie normalerweise nicht das "als", da alles in "s ist automatisch eine Zeichenkette. | `var test = "Hallo Welt!" als String;`                |                                             |
| Leer (leer)                                         | Noch weniger als null. Sie werden wahrscheinlich nur den leeren Typ benötigen, wenn Sie mit Funktionen umgehen                     | `var test als nichtig;`                               |                                             |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)      | Wie IItemStack, nur für Flüssigkeiten                                                                                              | `var test = <liquid:water> als ILiquidStack;`   | import crafttweaker.liquid.ILiquidStack;    |
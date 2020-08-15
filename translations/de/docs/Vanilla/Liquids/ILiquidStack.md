# ILiquidStack

Ein LiquidStack besteht aus einem [Liquid Definition](/Vanilla/Liquids/ILiquidDefinition/) sowie einem optionalen Tag und einem optionalen Betrag.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere craftweaker.liquid.ILiquidStack;`

## Einen ILiquidStack erstellen

Ein ILiquidStack kann mit dem [Liquid Bracket Handler](/Vanilla/Brackets/Bracket_Liquid/) erstellt werden

```zenscript
//Siehe Der flüssige Klammerhandler für weitere Informationen
val lava = <liquid:lava>;

//Flüssigkeit. ithTag(Tag as IData)
val lavaWithTag = <liquid:lava>. ithTag(DATA);

//Flüssig * Betrag in Millibuckets (-> 1000 = 1 Eimer)
val lavaWithAmount = <liquid:lava> * 1000;
```

## Flüssigkeitseigenschaften erhalten

Da ein ILiquidStack eine Flüssigkeit repräsentiert, muss es sicherlich auch eine Möglichkeit geben, die Eigenschaften des flüssigen Flüssigkeiten zurückzuholen.  
Überprüfen Sie die Tabelle, um zu sehen, was Sie mit ZenGetters vom ILiquidStack Object abrufen können.

| ZenGetter   | Was ist das?                                                                        | Rückgabetyp                                               | Beispiel                                  |
| ----------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| name        | Dies gibt den unlokalisierten flüssigen Namen zurück                                | string                                                    | `test = <liquid:lava>.name;`        |
| displayName | Dies gibt den lokalisierten flüssigen Namen zurück                                  | string                                                    | `test = <liquid:lava>.displayName;` |
| beträge     | Gibt den Betrag des ILiquidObject zurück                                            | int                                                       | `test = <liquid:lava>.amount;`      |
| Leuchtkraft | Dies gibt die Leuchtkraft der verwiesenen Flüssigkeit zurück                        | int                                                       | `test = <liquid:lava>.luminosity;`  |
| dichte      | Dies gibt die Dichte der empfohlenen Flüssigkeit zurück                             | int                                                       | `test = <liquid:lava>.density;`     |
| Temperatur  | Dies gibt die Temperatur der angegebenen Flüssigkeit zurück                         | int                                                       | `test = <liquid:lava>.temperature;` |
| viskosität  | Dies gibt die Viskosität der angegebenen Flüssigkeit zurück                         | int                                                       | `test = <liquid:lava>.viscosity;`   |
| gasförmig   | Gibt zurück, ob die erwähnte Flüssigkeit gasförmig ist                              | boolean                                                   | `test = <liquid:lava>.gaseous;`     |
| tag         | Dies gibt das ILiquidObject-Tag zurück                                              | [IData](/Vanilla/Data/IData/)                             | `test = <liquid:lava>.tag;`         |
| definition  | Damit wird die Definition der angegebenen Flüssigkeiten zurückgegeben (siehe unten) | [ILiquid Definition](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition;`  |

# Ingrediente Implementierung

Java Jargon: ILiquidStack implementiert IIngredient. In other words, all methods that can be used in [IIngredients](/Vanilla/Variable_Types/IIngredient/) can also be used for ILiquidStacks Refer to the IIngredient entry for further information on this. Hier sind einige Sonderfälle, da Flüssigkeiten nur keine Artikel sind

* Du kannst ILiquidStacks nicht markieren und du wirst null von dir versuchen, die Markierung eines ILiquidStacks abzurufen
* .items gibt eine leere Liste zurück
* .itemArray gibt ein leeres Array zurück
* .Flüssigkeiten geben diese Flüssigkeit als ILiquidStack zurück (so, genau dieses Objekt)
* Liquidstacks können keine Transformatoren haben und nach Transformatoren fragen immer falsch
* Liquidstacks können keine Bedingungen haben (.only funktioniert nicht)
* Passend zu den Artikeln gibt immer falsch zurück
# ILiquidDefinition

Die ILiquidDefinition definiert die Flüssigkeit, aus der [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) besteht. Im Gegensatz zum ILiquidStack erlaubt diese Schnittstelle die Änderung der Flüssigkeitseigenschaften.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import craftweaker.liquid.ILiquidDefinition;`

## Methoden

Was können wir also damit tun?

### Multiplikation

Das Multiplizieren einer ILiquidDefinition führt zu einem neuen [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) mit dem angegebenen Betrag in Millibuckets

```zenscript
val def = <liquid:lava>.definition;

//im Wesentlichen dasselbe
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Bekomme und setze die Flüssigkeitseigenschaften

Als ILiquidDefinition repräsentiert eine Flüssigkeit, können Sie erhalten, aber auch ihre Eigenschaften festlegen. Weitere Informationen finden Sie in der nachstehenden Tabelle.

Wie in der Tabelle oben, setzen Sie den Zengetter/Setter am Ende der ILiquidDefinition. Einige ZenGetters haben keine entsprechenden ZenSetter, Sie müssen sich auf andere Mittel verlassen, um diese Eigenschaften zu ändern.

Seien Sie jedoch vorsichtig mit Zensettern, die nur die Flüssigkeitsregister ändern und keine Auswirkungen auf Flüssigkeiten in der Welt haben. Sie werden wahrscheinlich nur den Temperatureinstellung benötigen, wenn Sie mit [Tinkers' Construct Smeltery fuel](/Mods/Modtweaker/TConstruct/Fuel/) verwechseln.

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: Leuchtkraft
val lavaL = definition.luminosity;

//Zensetter: Leuchtkraft
definition.luminosity = 0;
```

| ZenGetter   | ZenSetter   | Was ist das?                                                            | Rückgabe/Set Typ |
| ----------- | ----------- | ----------------------------------------------------------------------- | ---------------- |
| name        |             | Dies gibt den unlokalisierten flüssigen Namen zurück                    | string           |
| displayName |             | Dies gibt den lokalisierten flüssigen Namen zurück                      | string           |
| Leuchtkraft | Leuchtkraft | Diese liefert die Leuchtkraft der verwiesenen Flüssigkeit               | int              |
| dichte      | dichte      | Diese kehrt die Dichte der verwiesenen Flüssigkeit zurück/ein           | int              |
| Temperatur  | Temperatur  | Diese kehrt die Temperatur der verwiesenen Flüssigkeit zurück/legt      | int              |
| viskosität  | viskosität  | Diese Rückgabe/setzt die Viskosität der erwähnten Flüssigkeit           | int              |
| gasförmig   | gasförmig   | Diese kehrt zurück/legt fest, ob die erwähnte Flüssigkeit gasförmig ist | boolean          |
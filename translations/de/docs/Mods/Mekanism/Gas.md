# Mekanism

Mekanism CraftTweaker Unterstützung wurde jetzt direkt in Mekanism integriert ([Link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism fügt Klammerhandlerunterstützung hinzu, um **Gas** zu definieren -- ein spezieller Materialzustand, der sich von Schmiede unterscheidet. [**Flüssigkeiten**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Hinweis: `<gas:water>` unterscheidet sich von `<liquid:water>`*

Ab dem Mekanism 9.7.0 ist es nun möglich, alle registrierten Gase (einschließlich der Gase anderer Modi) über den Befehl `/ct gases` anzuzeigen

Es ist auch ab Mekanism 9.7.1 möglich, einen Gasstapel/Klammerhandler durch String zu bekommen. `mods.mekanism.MekanismHelper.getGas(string);`

## Beispiel

```zenscript
importieren mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) als IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetter

Wie LiquidStacks unterstützen auch IGasStacks einige spezielle ZenGetters.  
Sie rufen die ZenGetters mit `gas.Getter` an (z.B. `<gas:water>.name`)

| ZenGetter   | Beschreibung                              | Rückgabetyp    |
| ----------- | ----------------------------------------- | -------------- |
| definition  | Gibt die Gas-Definition zurück            | IGasDefinition |
| NAME        | Gibt den Gasnamen zurück                  | string         |
| displayName | Gibt den Anzeigenamen des Gases zurück    | string         |
| beträge     | Gibt den Gasbetrag in Millibuckets zurück | int            |

## Menge des Objekts einstellen

Sie können den Betrag des Objekts (Gasvolumen in Millibuckets) auf zwei Arten festlegen, die beide genau die gleiche tun:

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## IGasDefinition

Ein IGasDefinition-Objekt enthält Informationen zu einem Gas.  
Sie können ein solches Objekt mit `gasStack.definition` erhalten (überprüfen Sie die Tabelle oben)

| ZenGetter   | Beschreibung                                       | Rückgabetyp |
| ----------- | -------------------------------------------------- | ----------- |
| NAME        | Gibt den Namen des angegebenen Gases zurück        | string      |
| displayName | Gibt den Anzeigenamen des angegebenen Gases zurück | string      |

Sie können eine gasDefinition multiplizieren, um einen neuen IGasStack mit dem angegebenen Betrag in Millibuckets zurückzugeben:

```zenscript
var gas_definition = <gas:water>.definition;
var gas_bucket = gas_definition * 1000;
```
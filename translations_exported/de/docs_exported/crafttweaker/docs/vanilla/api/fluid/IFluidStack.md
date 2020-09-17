# IFluidStack

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implementierte Schnittstellen
IFluidStack implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### kopieren

Kopiert den Stapel. Benötigt werden nur bei veränderlichen Stacks.

 Gibt zurück: `Ein neuer Stapel mit den gleichen Informationen wie dieser`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutierbar

Macht diesen Stapel veränderbar

 Gibt zurück: `Ein neuer Stapel ist veränderbar.`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setBetrag

Legt den Flüssigkeitswert in MilliBuckets (MB) fest

 Gibt zurück: `Ein neuer Stapel oder dieser Stapel je nachdem, ob dieser Stapel veränderbar ist`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(Betrag wie in);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Beschreibung                                |
| --------- | ---- | ------------------------------------------- |
| beträge   | int  | Der Betrag, der diesen Stapel multipliziert |



## Eigenschaften

| Name          | Type                                                         | Hat Getter | Hat Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| Kommandozeile | String                                                       | true       | false      |
| flüssig       | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## Operatoren
### MUL

Legt den Flüssigkeitswert in MilliBuckets (MB) fest

 Gibt zurück: `Ein neuer Stapel oder dieser Stapel je nachdem, ob dieser Stapel veränderbar ist`

```zenscript
myIFluidStack * Betrag als Int
myIFluidStack * 1000
```

| Parameter | Type | Beschreibung                                |
| --------- | ---- | ------------------------------------------- |
| beträge   | int  | Der Betrag, der diesen Stapel multipliziert |


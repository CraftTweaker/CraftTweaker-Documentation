# MCFluid

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implementierte Schnittstellen
MCFluid implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### makeStack

Erstellt eine neue [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) mit der angegebenen Menge an Flüssigkeit.

 Gibt `eine neue (unveränderbar) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(Betrag wie in);
myMCFluid.makeStack(1000);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| beträge   | int  | Keine Beschreibung angegeben |



## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

## Operatoren
### MUL

Erstellt eine neue [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) mit der angegebenen Menge an Flüssigkeit.

 Gibt `eine neue (unveränderbar) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * Betrag als Int
myMCFluid * 1000
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| beträge   | int  | Keine Beschreibung angegeben |


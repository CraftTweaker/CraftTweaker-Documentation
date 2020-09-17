# IPotion

Ein ITrank Objekt bezieht sich auf einen Trank im Spiel.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere craftweaker.potions.IPotion;`

## Hole ein ITrank Objekt

Du kannst ein solches Objekt durch den [Trank Bracket-Handler erhalten](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## ZenGetter

Zurzeit können Sie mit Tränken nur einige Informationen abrufen.  
Beispiel `<potion:minecraft:strength>.name`

| ZenGetter       | Was macht es                                            | Rückgabetyp                                      |
| --------------- | ------------------------------------------------------- | ------------------------------------------------ |
| name            | Gibt den internen Namen des Tranks zurück               | string                                           |
| badEffect       | Gibt zurück, wenn der Trank Effekt schlecht ist         | bool                                             |
| flüssige Farbe  | Gibt die Farbe des Tranks zurück                        | int                                              |
| flüssige Farbe  | Gibt die Farbe des Tranks zurück                        | int                                              |
| kurativeItems   | Gibt eine Liste aller heilenden Items für den Trank aus | Liste <[IItemStack](/Vanilla/Items/IItemStack/)> |
| hasStatussymbol | Gibt zurück, ob der Trank ein Statussymbol hat          | bool                                             |
| isBeneficial    | Gibt zurück, ob der Trank nützlich ist                  | bool                                             |
| isInstant       | Gibt zurück, ob der Trank sofort ist                    | bool                                             |

## ZenMethoden

### Erstelle PotionEffect

Ein [IPotionEffect](/Vanilla/Potions/IPotionEffect/) ist ein Trank, der eine Dauer und Verstärker hat. Sie können diese beiden Methoden verwenden, um eine von einem IPot zu erhalten:  
Wie man vermuten könnte, geben beide ein [IPotionEffect](/Vanilla/Potions/IPotionEffect/) Objekt zurück.

```zenscript
pot.makePotionEffect(int Dauer, int Verstärker);
pot.makePotionEffect(int Dauer, int Verstärker, boolean ambientEffect, boolean particlesShown);
```
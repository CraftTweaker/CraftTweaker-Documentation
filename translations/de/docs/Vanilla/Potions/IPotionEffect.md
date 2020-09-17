# IPotionEffect

Ein IPotionEffect ist ein [ITrantion](/Vanilla/Potions/IPotion/) mit einer Dauer und einem Verstärkerparameter (Stärke).  
Du kannst sie von einem [ITrank](/Vanilla/Potions/IPotion/) Objekt erhalten.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere craftweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                                | Type                                             |
| ---------------------------------------- | ------------------------------------------------ |
| dauern                                   | int                                              |
| trank                                    | [IPotion](/Vanilla/Potions/IPotion/)             |
| does ShowParticles                       | bool                                             |
| verstärker                               | int                                              |
| kurativeItems                            | Liste <[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                               | bool                                             |
| isAmbient                                | bool                                             |
| isPotionDurationMax (auch ein ZenSetter) | bool                                             |

## ZenMethoden

### Ist ein Gegenstand ein heilendes Element

Verwendet einen [IItemStack](/Vanilla/Items/IItemStack/).  
Gibt einen Bool zurück

```zenscript
isCurativeItem(IItemStack item);
```

### Effekt auf eine Entität ausführen

Verwendet eine [IEntity](/Vanilla/Entities/IEntity/) oder eine seiner Unterklassen (z.B. [IPlayer](/Vanilla/Players/IPlayer/)).  
kehrt nichtig zurück (nichts!

```zenscript
performEffect(IEntity Entity);
```
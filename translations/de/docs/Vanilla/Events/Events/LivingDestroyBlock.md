# LivingDestroyBlock

Dieses Ereignis wird abgefeuert, wenn ein Wither- oder Enderdrache versucht, Blöcke zu zerstören, oder wenn ein Zombie versucht, eine Tür zu brechen. Dieses Ereignis ist **abbrechbar**und wenn abgebrochen, wird der Block nicht beschädigt.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ivingDestroyBlockEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
LivingDestroyBlock Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter | ZenSetter | Type                                        |
| --------- | --------- | ------------------------------------------- |
| `status`  |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |


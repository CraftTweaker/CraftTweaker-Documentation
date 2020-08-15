# IEnchantment

Eine IEnchantment ist im Wesentlichen eine [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) und eine Verzauberungsstufe.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.enchantments.IEnchantment;`

## ZenGetter/ZenSetter

| ZenGetter   | ZenSetter   | Type                                                                    |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| definition  |             | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| Level       |             | int                                                                     |
| displayName | displayName | string                                                                  |

## ZenMethoden

### Die Verzauberung als NBT abrufen

Möglicherweise möchten Sie das NBT-Tag des Verzauberungszaubers erhalten.  
Sie können es entweder als [IData](/Vanilla/Data/IData/) übertragen oder die Methode verwenden:

```zenscript
ench.makeTag();
ench als crafttweaker.data.IData;
```
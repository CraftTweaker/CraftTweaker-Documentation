# IEnchantment

Un IEnchantment è essenzialmente un [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) e un livello di incantesimo.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.enchantments.IEnchantment;`

## ZenGetters/ZenSetters

| ZenGetter   | ZenSetter   | Tipo                                                                                 |
| ----------- | ----------- | ------------------------------------------------------------------------------------ |
| definizione |             | [Definizione IEnchantmentDefinizione](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| livello     |             | int                                                                                  |
| displayName | displayName | stringa                                                                              |

## ZenMethods

### Recupera l'Incantesimo come NBT

Potresti voler ottenere l'NBT-Tag dell'Incantesimo.  
Puoi inserirlo come [IData](/Vanilla/Data/IData/) o usare il metodo:

```zenscript
ench.makeTag();
ench as crafttweaker.data.IData;
```
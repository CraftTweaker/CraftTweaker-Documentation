# Raffreddante

Il gestore di raffreddamento non appartiene ad alcuna macchina specifica, ma gestisce i valori del refrigerante per tutte le altre macchine.  
Per esempio la dinamo di ervazione utilizza i valori del refrigerante, così come la dinamo magmatica con l'incremento del serbatoio entropo fornito.

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.Coolant;
```

## Aggiungi Raffreddante

Usalo per registrare un nuovo refrigerante al manager.  
CoolantRF deve essere non negativo e il fattore di raffreddamento deve essere compreso tra 1 e 100 (incluso).  
Se questi intervalli non sono soddisfatti, il refrigerante non sarà registrato!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Questi sono due dei valori che TE utilizza di default:
//mods. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```

## Rimuovi Raffreddante

Usalo per eliminare un refrigerante esistente dal manager.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```
# IBlockAction

La funzione IBlockAction può essere aggiunta a un blocco [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) e a seconda di dove l'hai aggiunto, verrà attivato quando il blocco è posizionato o rotto.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IBlockAction;`

## Parametri

IBlockAction è una funzione con i seguenti parametri:

- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il blocco
- [posizione IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) → La posizione del blocco
- Stato [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) → Contiene informazioni sul blocco, come il Blocco stesso e i suoi metadati

La funzione non ha un valore di ritorno!

## Esempio

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("I WAS PLACED!!!");
}
```
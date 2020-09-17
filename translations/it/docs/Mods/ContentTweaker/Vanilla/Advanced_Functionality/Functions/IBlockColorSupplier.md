# IBlockColorSupplier

La funzione IBlockColorSupplier può essere utilizzata per fornire l'oggetto colore [](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) da utilizzare per qualsiasi cosa.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IBlockColorSupplier;`

## Parametri

La funzione IBlockColorSupplier è una funzione con i seguenti parametri.

- [Stato ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) → lo stato di blocco del blocco il cui colore è richiesto.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) accesso → accesso blocco del blocco di cui il colore è richiesto.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → la posizione del blocco il cui colore è richiesto.
- int tintIndex → l'indice di tinta, utilizzare che comunque ti piace. La funzione deve restituire un [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Esempi

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState;
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker. orld.IBlockAccess;

funzione getBlockColor(stato come BlockState, accesso come IBlockAccess, pos come BlockPos, tintIndex as int) as Color {
  //Restituisce a lime color
    return Color. romInt(0x00FF00);
}
```
# ICTPlayer

Un ICTPlayer è l'oggetto speciale [IPlayer](/Vanilla/Players/IPlayer/) di ContentTweaker.  
Ciò significa che tutti i [metodi IPlayer](/Vanilla/Players/IPlayer/) sono disponibili anche su questo oggetto!

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Player;`

## ZenMethods

`IMutableItemStack getHeldItem(Hand hand);`

Parametri:

- [Mano](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) mano → Mano principale o Fuori

Restituisce il [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) tenuto alla mano [](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) indicata.
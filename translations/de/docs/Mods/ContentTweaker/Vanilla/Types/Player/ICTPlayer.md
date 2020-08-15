# ICTPlayer

Ein ICTPlayer ist ContentTweakers spezielles [IPlayer](/Vanilla/Players/IPlayer/) Objekt.  
Das bedeutet, dass alle [IPlayers](/Vanilla/Players/IPlayer/) Methoden auch auf diesem Objekt verfügbar sind!

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren mods.contenttweaker.Player;`

## ZenMethoden

`IMutableItemStack getHeldItem(Hand hand);`

Parameter:

- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) Hand → Haupt- oder Aus-Hand

Returns the [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) held at the given [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/).
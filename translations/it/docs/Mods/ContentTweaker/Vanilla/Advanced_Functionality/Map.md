# Mappa

Il pacchetto Mappa consente di impostare un waypoint utilizzando il gestore degli eventi waypoint di BASE.

## Importazione del pacchetto

È possibile importare il pacchetto in modo da non doverlo ripetere ogni volta.

    import mods.contenttweaker.Map;
    

## Aggiungere Waypoint

Questo è l'unico metodo esposto dal pacchetto Mappa e consente di impostare un waypoint nella posizione indicata.  
Si tratta di un metodo vuoto con i parametri:

- nome stringa
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(nome stringa, mondo di IWorld, IBlockPos pos, colore CTcolor)
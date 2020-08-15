# IExplosionEvent

Questa interfaccia è estesa da tutti gli eventi di esplosione. Ciò significa che è possibile utilizzare i ricevitori qui sotto per accedere ai dettagli della posizione.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IExplosionEvent;`

## ZenGetters

| nome      | tipo                                   |
| --------- | -------------------------------------- |
| mondo     | [IWorld](/Vanilla/World/IWorld/)       |
| posizione | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x         | doppia                                 |
| y         | doppia                                 |
| z         | doppia                                 |

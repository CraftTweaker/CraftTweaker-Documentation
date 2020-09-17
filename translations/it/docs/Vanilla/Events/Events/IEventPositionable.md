# IEventPositionable

Questa interfaccia è estesa da tutti gli eventi la cui posizione è importante.  
Ciò significa che puoi usare le ricevitrici qui sotto per accedere ai dettagli della posizione.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IEventPositionable;`

## ZenGetters

| nome      | tipo                                   |
| --------- | -------------------------------------- |
| posizione | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x         | int                                    |
| y         | int                                    |
| z         | int                                    |
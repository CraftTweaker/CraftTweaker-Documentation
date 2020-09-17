# ILivingEvent

Questa interfaccia è estesa da tutti gli Eventi che possono avere un'entità vivente centrale.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.ILivingEvent;`

## Estendere IEntityEvent

Questa interfaccia estende [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), il che significa che tutte le funzionalità che IEntityEvent offre sono presenti anche in ILivingEvent

## ZenGetters

| nome             | tipo                                                      |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
# Nivel de saqueo

Este evento se dispara cuando una criatura de la Entidad Viviente es matada para calcular el nivel de saqueo. El valor puede incrementarse o disminuirse o dejarse como está. El valor puede haber sido modificado por otros eventos, pero el valor original no está incluido.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ootingLevelEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
LootingLevel Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter        | Ajuste         | Tipo                                            |
| ---------------- | -------------- | ----------------------------------------------- |
| `lootingLevel`   | `lootingLevel` | int                                             |
| `fuente de daño` |                | [Fuente del ID](/Vanilla/Damage/IDamageSource/) |

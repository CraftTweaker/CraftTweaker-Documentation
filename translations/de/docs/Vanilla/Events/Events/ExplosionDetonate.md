# Explosion Detonieren

Das ExplosionDetonate Event wird kurz vor dem Start einer Explosion abgefeuert. Es kann nicht aufgehoben werden.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. xplosionDetonateEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
ExplosionDetonate Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter               | ZenSetter | Type                                           |
| ----------------------- | --------- | ---------------------------------------------- |
| `betroffenen Entitäten` |           | [IEntität](/Vanilla/Entities/IEntity/)[]       |
| `affectedPositions`     |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |

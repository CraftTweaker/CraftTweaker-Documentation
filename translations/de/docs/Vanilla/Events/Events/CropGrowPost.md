# CropGrowPostEvent

Das CropGrowPost-Event wird abgefeuert, sobald ein Crop-Block **erfolgreich** gewachsen ist. Sie kann nicht aufgehoben werden und dient lediglich als Meldung über das Anbauwachstum.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ropGrowPostEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
CropGrowPost Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter             | ZenSetter | Type                                        |
| --------------------- | --------- | ------------------------------------------- |
| `originalBlockstatus` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`       |           | [IBlock](/Vanilla/Blocks/IBlock/)           |

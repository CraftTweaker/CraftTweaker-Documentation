# ChickenRepresentation

Il ChickenRepresentation è un modello di quello che il vostro pollo farà.  
Per impostazione predefinita, esisterà solo e getterà l'uovo che hai dato come parametro iniziale.  
È possibile modificare questo comportamento per consentire polli migliori modificando le proprietà date.

## Importare la classe

Vuoi importare la classe? Qui vai:

```zenscript
import mods.contenttweaker.Chicken;
```

## Registrazione del pollo

Dopo aver impostato il vostro polloRappresentanza per essere quello che si desidera essere, la parte più importante è registrarlo.  
Attenzione però, poiché qualsiasi modifica apportata a questo modello dopo la registrazione avrà ancora effetto, così si dovrebbe creare un nuovo polloRappresentanza per ogni pollo che si desidera avere.

## ZenProperties

È possibile modificare o ottenere il valore attuale delle proprietà da un oggetto `. ame = newValue` o utilizzando i metodi `object.setName(newValue);`

Esempio:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| nome            | tipo                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| nome            | stringa                                                                                |
| layItem         | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| dropItem        | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| backgroundColor | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| foregroundColor | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| textureLocation | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnType       | stringa                                                                                |
| layCoefficiente | galleggiante                                                                           |
| parentOne       | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo       | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
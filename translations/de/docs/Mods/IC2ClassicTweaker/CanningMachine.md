# Konservenmaschine

## Paket

```zenscript
importieren mods.ic2.CanningMachine;
```

### Liste der Effekt-Ids
* 1: Hunger (Verdorbenes Fleisch) (80 % Chance)
* 2: Gift (Spinnenauge)
* 3: Hunger (Rohhuhn) (30% Chance)
* 4: Goldener Apfel
* 5: Notch Apfel
* 6: Corus Frucht

## Methoden

### Register Items For Effect (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... inputs);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... Eingänge** Die Eingänge, die das Essen bekommen, können wirken.
- **int Id** Die EffektID die Sie auf die angegebenen Elemente anwenden möchten. Gültige Effekt-Id sind wie folgt:

### Effekt-Id löschen (int id, boolean deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int Id** Die EffektID die du von der gefüllten Dose entfernen möchtest. Werfen Sie oben auf gültige Effekt-IDs.
- **Boolesche Löschelemente** Ob Gegenstände mit diesem Effekt auch von abgelegten Dosen entfernt werden sollen. Dieser boolesche Vorgang funktioniert möglicherweise nicht.

### Kraftstoffwert registrieren (int Kraftstoffwert, IItemStack Eingang)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Früher hatte ein Wert von 2548.
```

- **int Treibstoffwert** Wie viel Treibstoff der angegebene Gegenstand wert ist.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Das Element, für das der Kraftstoffwert registriert werden soll. Es können sogar Elemente mit existierenden Werten sein. In diesem Fall wird der zuvor angegebene Wert überschrieben. Hinweis: must be an itemstack, no oredicts allowed.

### Kraftstoff-Multiplikator registrieren (TreibstoffMultiplikator, IItemStack Eingang)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float TreibstoffMultiplikator** Welchen Prozentsatz der vorherige Eingabewert erhöht wird. zum Beispiel 1 = 100%, 0,5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Element zum Registrieren des Treibstoffmultiplikators Es können sogar Elemente mit existierenden Multiplikatoren sein. In diesem Fall wird der zuvor spezifizierte Multiplikator überschrieben. Hinweis: must be an itemstack, no oredicts allowed.

### Lösche Brennstoff (IItemStack Eingabe)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack Eingang);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Das zu entfernende Element ist eine Eingabe für den Kraftstoff.

Siehe [hier](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) für Informationen darüber, wie Brennstoffdosen funktionieren.

### Konservenrezept hinzufügen (IItemStack-Ausgabe, Ingredientenfüller, IItemStack-Behälter)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(IItemStack Output, IIngredientfüller, IItemStack Container);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Produkt
- **[IItemStack](/Vanilla/Items/IItemStack/) Container** Der zu füllende Item
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Füllstoff** Die Zutat, mit der in den Behälter gefüllt wird


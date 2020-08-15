# Definicja IEntityDefinition

To brzmi przerażająco, więc co to oznacza? Zasadniczo jest to odniesienie do podmiotu zarejestrowanego w grze, więc jest to odniesienie, czyli do potwora w grze.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityDefiniation;`

## Wywołanie Obiektu IEntityDefinition

```zenscript
//Zwracają one obiekt IEntityDefinition Object
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("owca");

```

## Funkcje

A więc, gdzie jest to interesujące: Co możemy z nim zrobić, teraz, kiedy to stworzyliśmy?

### id

Zwraca ID jako ciąg znaków

```zenscript
//zwraca "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### Nazwa

Zwraca nazwę jako ciąg znaków

```zenscript
//zwraca "Owce"
<entity:minecraft:sheep>.name;
```

### utwórz obiekt

Pierwsza metoda tworzy tylko obiekt w podanej lokalizacji.  
Druga również go pojawia.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(Świat, blockPos);
```

`świat` jest obiektem [IWorld](/Vanilla/World/IWorld/) .  
`blockPos` jest obiektem [IBlockPos](/Vanilla/World/IBlockPos/).

## Zrzuty

Możemy nawet dodawać i/lub usuwać krople potworów, czy to nie jest świetne?

### Dodaj normalny upuszczenie

Dodaje to normalny kroplę, która może pojawić się za każdym razem, gdy moba zostanie zabity za pomocą dowolnych środków.

```zenscript
Wal entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,szansa);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`element` to element do dodania jako kropla i [IItemStack](/Vanilla/Items/IItemStack/) lub [Ważony ItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` to minimalna kwota, która jest upuszczana i liczba całkowita. To jest opcjonalne.  
`<code> max` to maksymalna kwota, która jest upuszczana i liczba całkowita. Jest to opcjonalne.  
`szansa` jest szansą na wypadnięcie z drogi. To jest opcjonalne. Nie potrzebne, jeśli używasz [WażoneItemStack](/Vanilla/Items/WeightedItemStack/) zamiast `pozycji`

### Dodaj plasteronly drop

Tak samo jak normalne drogi, ale tylko wtedy, gdy obiekt został zabity przez gracza.

```zenscript
//addPlayerOnlyDrop(item,min,max,szansa);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Dodaj funkcję upuszczenia

Funkcja upuszczania jest wywoływana za każdym razem, gdy powiązana jednostka jest zabijana. Możesz to użyć, jeśli musisz sprawdzić wymagania, zanim coś upuścisz, jak tylko upuszczenie do pewnego biomu i rzeczy.  
Będziesz potrzebował [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### Usuń

To usuwa kroplę.

```zenscript
Waliczna jednostka = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`element` to przedmiot do usunięcia z listy i [IItemStack](/Vanilla/Items/IItemStack/).

### Wyczyść spadki

To usuwa wszystkie kropli.

```zenscript
Jednostka walna = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### Pobierz

To zwraca wszystkie kropki, które zostały dodane przez CT jako lista [IEntityDrop](/Vanilla/Entities/IEntityDrop/) obiektów.

```zenscript
Wal entity = <entity:minecraft:sheep>;

//drops;
Wal dropList = entity.drops;
```
# Transformatory przedmiotów

Transformatory przedmiotów przekształcają twoje wejścia przy wytwarzaniu.  
Może to obejmować zarówno uszkodzenie przedmiotu, jak i zwrot zupełnie innego przedmiotu.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.IItemTransformer;`

```zenscript
<br />Towar walny = <minecraft:apple>;

//Przedmiot nie zostanie zużyty i pozostanie w siatki
przekształceniePrzedmiot = przedmiot. euse();

//Przedmiot nie zostanie zużyty, a cały stos zostanie Ci odesłany (robi /give).
transformedItem = item.giveBack();

//element zostanie zużyty, ale poda ci określony stos (gniazdo rzemieślnicze zostanie wyczyszczony!).
element transformacji = element. iveBack(<minecraft:potato>);

//przedmiot zostanie zastąpiony określonym przedmiotem, który zamiast tego przejdzie do transformacji
przedmiot = przedmiot. ransformReplace(<minecraft:potato>);

//uszkodza przedmiot przez 1
transformedItem = element. ransformDamage();

//uszkodza element o podanej wartości
transformedItem = item.transformDamage(3);

//element zostanie zużyty, bez względu na to co się stanie.
transformedItem = item.noReturn();

//Powoduje zużycie wielu elementów.
Element transformedItem = item.transformConsume(3);
```

## Rejestrowanie transformatorów własnych produktów

### Przekształć

Stary Transformator przedmiotów, który może przestać istnieć w 1.13.  
Strzela specjalną funkcją, która akceptuje dwa parametry: [przedmiot](/Vanilla/Items/IItemStack/) sam w sobie i [gracz](/Vanilla/Players/IPlayer/) wykonujący tworzenie.

```zenscript
transformedItem = item.transform(function(element, gracz) {return item;});
```

Funkcja musi zwrócić [IItemStack](/Vanilla/Items/IItemStack/).  
Ten stos zastąpi później to, co jest w gniazdzie rzemieślniczym. Użyj `null` , aby wyczyścić to miejsce.

### Nowa transformacja

W nowym wewnętrznym systemie receptur istniała potrzeba nowego Transformatora. Ta jedna akceptuje tylko jeden parametr, to jest pozycję w slocie.

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

Funkcja musi zwrócić [IItemStack](/Vanilla/Items/IItemStack/).  
W przeciwieństwie do innego transformatora nie będzie to przedmiot zastępujący ten w polu rzemieślniczym, ale ten, który jest zwracany dla tego pola rzemieślniczego.  
Innymi słowy, jeśli zwrócisz `null` tutaj, jeden przedmiot zostanie zużyty, każdy inny przedmiot, który zostanie zwrócony, zostanie umieszczony w polu rzemieślniczym, jeśli to możliwe, lub odesłać do pacjenta, tak samo jak w przypadku postępowania z wiaderkami.  
Jeśli naprawdę nie potrzebujesz zmiennej gracza, to jest transformator, na który chcesz iść!
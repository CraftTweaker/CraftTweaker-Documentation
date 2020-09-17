# DataMap

Mapa, czasami nazywana również tablicą stowarzyszeniową, jest strukturą danych, która pozwala na przechowywanie wielu elementów.  
W przeciwieństwie jednak do tablicy możesz również dać każdemu z tych elementów klucz do wywołania.  
DataMap rozszerza [IData](/Vanilla/Data/IData/), więc każda DataMap jest IData, może potrzebować tych informacji później.

## Tworzenie mapy:

Mapa jest specjalnym rodzajem [IData](/Vanilla/Data/IData/), więc na ostatnim etapie musisz zaimportować ten interfejs:  
`zaimportuje słabsze rzemieślniki. ata.IData;`

Być może zauważyłeś, że żaden typ nie może zostać przekonwertowany na mapę (ani mapa nie może być przekonwertowana na żaden typ poza ciągami), więc musi być inny sposób ich tworzenia!  
Jest to:

```zenscript
importuj crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} jako IData;
```

Pamiętaj:  
Mapy są obsługiwane jako `Mapa<String,IData>`!  
Oznacza to, że klucze nie powinny zawierać znaków, których normalne ciągi CT nie mogą obsługiwać.  
Oznacza to również, że podczas gdy klucz jest ciągiem, wartość jest kolejnym obiektem [IData](/Vanilla/Data/IData/) .  
Możesz nawet zagnieżdżyć mapy na mapach (oto co robi mnóstwo danych NBT):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "hello"
                    }
                } jako IData;
```

## Odzyskiwanie członków

Niestety utworzone mapy są niezmienne, więc nie możesz zmienić ich członków.  
Aby pobrać członka mapy musisz znać jego nazwę klucza. Wtedy możesz to zrobić:

```zenscript
val mySecondMap = {key1: "wartość1",
                   key2: "value2",
                   klucz3: 3} jako IData;

//Pobiera użytkownika o nazwie "key1"
var k1 = mySecondMap. ey1 jako IData;
print(k1.asString());

//Pobierz członka o nazwie "key2"
var k2 = mySecondMap.memberGet("key2") jako IData;
print(k2.asString());
```

## Modyfikowanie map

Możesz dodawać lub substratować mapy, aby uzyskać nową mapę ze zmienionymi wartościami.  
To działa nawet dla zagnieżdżonych map!

```zenscript
mapa walna1 jako IData = {
    key1 : "hello"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

print(map1 + map2). sString()); //Drukuje {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
    key1 : "dwa",
    key2 : "dwa",
    key3 : "three"
};

print(map3 - "key1"). sString()); //Prints {key2 : "two", key3 : "three"}

val map4 as IData = {
    key3 : "cothing"
};

print(map3 - map4). sString()); //Wydrukuje {key1 : "dwa", key2 : "dwa"}
```
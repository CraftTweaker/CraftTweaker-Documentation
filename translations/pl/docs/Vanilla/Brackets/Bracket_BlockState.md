# Obsługa nawiasów BlockState

Obsługa nawiasów BlockState daje Ci dostęp do bloków w grze. Możliwe jest tylko zarejestrowanie BlockStates w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do blokowania moda w uchwycie nawiasów BlockState

BlockStates są przywoływane w obsłudze nawiasów BlockState jak tak:

```zenscript
<blockstate:modid:blockname>
```

`modid` jest modidem modelu, w którym blok jest zdefiniowany, i `nazwa bloku` jest nazwą bloku. Spowoduje to zwrócenie domyślnego BlockState dla określonego bloku.

Aby uzyskać konkretny stan blokowania z obsługą nawiasów BlockState możesz opcjonalnie określić jego właściwości, takie jak:

```zenscript
<blockstate:modid:blockname:properties>
```

Gdzie `właściwości` są oddzielone przecinkami zestawem `name=value` dla dowolnych właściwości, które chcesz określić w stanie bloku. Wszystkie właściwości, które nie są określone, mają te same wartości, co w domyślnym stanie blokowania.

Spowoduje to zwrócenie obiektu IBlockState Please refer to [the respective wiki entry](/Vanilla/Blocks/IBlockState/) for further information.

Pamiętaj, że ten uchwyt nawiasów stworzy odniesienie do jednego konkretnego blokady. Jeśli chcesz być w stanie dopasować się do wielu bloków, zapoznaj się z [wpisem wiki IBlockStateMatchera](/Vanilla/Blocks/IBlockStateMatcher).

## Przykłady

Przykładem podmiotu zajmującego się nawiasem BlockState jest:

```zenscript
//blok brudu
<blockstate:minecraft:dirt>

//kłód dębowy,
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//świerk poziomy, wzdłuż osi x
<blockstate:minecraft:log:variant=spruce,axis=x>
```
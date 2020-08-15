# Obsługa nawiasów częściowych materiału

Obsługa Material Part Bracket Handler daje Ci dostęp do Części Materialnych w grze. Możliwe jest tylko zarejestrowanie części Material w grze, więc musisz zachować ostrożność w kolejności ładowania skryptów.

Części materiałowe są wymienione w uchwycie nawiasów materiałowych w następujący sposób:

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Jeśli Znaleziono Część Materialna, zwróci ona obiekt MaterialPartDefinition  
To jest obiekt, który działa jako obydwa, [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) oraz obiekt [IItemStack](/Vanilla/Items/IItemStack/) , tak więc metody obu interfejsów będą pracować nad zwróconą definicją.
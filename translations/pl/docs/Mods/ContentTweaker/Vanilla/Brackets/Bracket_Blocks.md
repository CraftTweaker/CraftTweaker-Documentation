# Obsługa nawiasów blokowych

Obsługa przedziałów blokowych daje Ci dostęp do bloków w grze. Można zarejestrować tylko bloki w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do bloków moda w uchwycie wspornika bloków.

Bloki są przywoływane w obsłudze nawiasów blokowych w ten sposób:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

If the block is found, this will return an [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Object.  
Please refer to the [respective Wiki entry](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) for further information on what you can do with these.
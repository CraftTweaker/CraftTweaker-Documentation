# Obsługa wspornika materiałów blokowych

Obsługa bloków Materiałów daje Ci dostęp do Materiałów Block-u w grze. Obecnie obsługiwane są jedyne materiały bloków to:

<details>
    <summary>Kliknij, aby rozwinąć listę materiałów</summary>
    <ul>
        <li>Powietrze</li>
        <li>Trawa</li>
        <li>Sztaby i pręty drążone ze stali nierdzewnej</li>
        <li>Drewno</li>
        <li>Skała</li>
        <li>Żelazo</li>
        <li>Kowadło</li>
        <li>Woda</li>
        <li>Lava</li>
        <li>Liście</li>
        <li>Rośliny</li>
        <li>Vine</li>
        <li>Gąbka</li>
        <li>Tkanina</li>
        <li>Ogień</li>
        <li>piasek</li>
        <li>Obwody</li>
        <li>Dywan</li>
        <li>Szkło</li>
        <li>Czerwony kamień_jasny</li>
        <li>TNT</li>
        <li>Koral</li>
        <li>Lód</li>
        <li>Zapakowany lód</li>
        <li>Wytworzone śnieg_śnieg</li>
        <li>Cactus</li>
        <li>Glina</li>
        <li>Gourd</li>
        <li>Smocze_Jajko</li>
        <li>Portal</li>
        <li>Ciasto</li>
        <li>Web</li>
    </ul>
</details>

Materiały blokowe są przywoływane w uchwycie nawiasów materiałowych w ten sposób:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Jeśli materiał bloku zostanie znaleziony, zwróci on obiekt [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/).